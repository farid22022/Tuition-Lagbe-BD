import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import {jwtDecode }from "jwt-decode";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')) || null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  console.log('user', user);
//   const createUserData = {
//     first_name: '',
//     last_name: '',
//     phone: '',
//     email: '',
//     password: '',
//     image:
//         'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-978409_1280.png',

//     };
  const createUser = async (userData, detailData) => {
    setLoading(true);
    try {
      const response = await axiosPublic.post('/signup/', {
        user: userData,
        detail: detailData,
      });
      // Optionally set user and tokens if signup auto-logs in
      return response.data;
    } catch (error) {
      throw error.response?.data || { error: 'Signup failed' };
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (phone, password) => {
    setLoading(true);
    try {
      const response = await axiosPublic.post('/login/', { phone, password });
      const { access, refresh, user } = response.data;
      localStorage.setItem('access-token', access);
      localStorage.setItem('refresh-token', refresh);
      setUser(user);
      return response.data;
    } catch (error) {
      throw error.response?.data || { error: 'Login failed' };
    } finally {
      setLoading(false);
    }
  };

  const logOut = () => {
    setLoading(true);
    localStorage.removeItem('access-token');
    localStorage.removeItem('refresh-token');
    setUser(null);
    setLoading(false);
    return Promise.resolve();
  };

  const updateUserProfile = async (name, photo) => {
    setLoading(true);
    try {
      // Assume a /api/v1/profile/ endpoint exists for updating profile
      const response = await axiosPublic.patch('/profile/', {
        first_name: name,
        image: photo,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access-token')}`,
        },
      });
      setUser(prev => ({ ...prev, first_name: name, image: photo }));
      return response.data;
    } catch (error) {
      throw error.response?.data || { error: 'Profile update failed' };
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('access-token');
      if (token) {
        try {
          // Decode token to check validity
          const decoded = jwtDecode(token);
          if (decoded.exp * 1000 > Date.now()) {
            // Fetch user data (assume /api/v1/profile/ returns user details)
            const response = await axiosPublic.get('/profile/', {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            setUser(response.data);
          } else {
            // Token expired
            localStorage.removeItem('access-token');
            localStorage.removeItem('refresh-token');
          }
        } catch (error) {
          console.error('Auth check error:', error);
          localStorage.removeItem('access-token');
          localStorage.removeItem('refresh-token');
        }
      }
      setLoading(false);
    };

    checkAuth();
  }, [axiosPublic]);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;