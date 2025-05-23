import axios from "axios";

const axiosPublic = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add response interceptor for error handling
axiosPublic.interceptors.response.use(
  response => response,
  error => {
    console.error('Axios error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;