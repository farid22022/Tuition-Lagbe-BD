import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext(null);

const axiosAuth = axios.create({
  baseURL: "http://localhost:8000/api/v1/",
  withCredentials: true,
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const accessToken = localStorage.getItem("access-token");
    if (storedUser && accessToken) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const refreshToken = async () => {
    try {
      const refreshToken = localStorage.getItem("refresh-token");
      if (!refreshToken) throw new Error("No refresh token available");

      const response = await axiosAuth.post("/token/refresh/", {
        refresh: refreshToken,
      });
      const newAccessToken = response.data.access;
      localStorage.setItem("access-token", newAccessToken);
      console.log("Refreshed token:", newAccessToken); // Debug refresh
      return newAccessToken;
    } catch (error) {
      console.error("Token refresh failed:", error.response?.data);
      throw error;
    }
  };

  const logOut = async () => {
    try {
      const refreshToken = localStorage.getItem("refresh-token");
      if (refreshToken) {
        await axiosAuth.post("/logout/", { refresh: refreshToken }, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
            "Content-Type": "application/json",
          },
        });
      }
    } catch (error) {
      console.error("Logout error:", error.response?.data);
    } finally {
      localStorage.removeItem("access-token");
      localStorage.removeItem("refresh-token");
      localStorage.removeItem("user");
      setUser(null);
      setLoading(false);
    }
  };

  const updateUserProfile = async (first_name, password, location, imageUrl) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('first_name', first_name);
      if (password) formData.append('password', password);
      if (location) formData.append('location', location);
      if (imageUrl) formData.append('image', imageUrl);

      const response = await axiosAuth.patch("/profile/", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          "Content-Type": "multipart/form-data",
        },
      });
      setUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      throw error.response?.data || { error: "Profile update failed" };
    } finally {
      setLoading(false);
    }
  };

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    logOut,
    refreshToken,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;