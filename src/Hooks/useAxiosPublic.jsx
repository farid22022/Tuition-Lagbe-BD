import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

// Create a singleton axios instance
const axiosPublic = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Required for CORS with credentials
});

// Flag to prevent multiple simultaneous refresh attempts
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

const useAxiosPublic = () => {
  const { refreshToken, logOut } = useContext(AuthContext);

  // Request interceptor to add the token
  if (!axiosPublic.interceptors.request.handlers.length) {
    axiosPublic.interceptors.request.use(
      (config) => {
        const accessToken = localStorage.getItem("access-token");
        console.log("Setting Authorization header with token:", accessToken); // Debug token
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
  }

  // Response interceptor to handle token refresh on 401 errors
  if (!axiosPublic.interceptors.response.handlers.length) {
    axiosPublic.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
          if (isRefreshing) {
            // If a refresh is already in progress, queue the request
            return new Promise((resolve, reject) => {
              failedQueue.push({ resolve, reject });
            })
              .then((token) => {
                originalRequest.headers.Authorization = `Bearer ${token}`;
                return axiosPublic(originalRequest);
              })
              .catch((err) => Promise.reject(err));
          }

          originalRequest._retry = true;
          isRefreshing = true;

          try {
            const newAccessToken = await refreshToken();
            localStorage.setItem("access-token", newAccessToken);
            console.log("New token after refresh:", newAccessToken); // Debug new token
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            processQueue(null, newAccessToken);
            return axiosPublic(originalRequest);
          } catch (refreshError) {
            console.error("Token refresh failed:", refreshError);
            processQueue(refreshError, null);
            await logOut();
            return Promise.reject(refreshError);
          } finally {
            isRefreshing = false;
          }
        }

        console.error("Axios error:", error.response?.data || error.message);
        return Promise.reject(error);
      }
    );
  }

  return axiosPublic;
};

export default useAxiosPublic;