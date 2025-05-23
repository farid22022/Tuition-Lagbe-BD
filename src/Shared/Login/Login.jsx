

import React, {  useState } from 'react';
import { motion } from 'framer-motion';
import { FiSmartphone, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import loginImage from "./../../../public/Images/undraw_two-factor-authentication_8tds.svg";
// import {AuthProvider} from '../../providers/AuthProvider';

// export const currentUser = JSON.parse(localStorage.getItem('user')) || null;
export let currentUser =  null;
const Login = () => {
  const [formData, setFormData] = useState({
    phone: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
//   const { setUser } = useContext(AuthProvider);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, when: "beforeChildren" }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const imageVariants = {
    float: {
      y: [0, -20, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    },
    hover: { scale: 1.05, transition: { duration: 0.3 } }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?8801[3-9][0-9]{8}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be in the format +8801XXXXXXXXX';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('http://127.0.0.1:8000/api/v1/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        setErrors(data);
        return;
      }

      // Store tokens and user data
      localStorage.setItem('access_token', data.access);
      localStorage.setItem('refresh_token', data.refresh);
      localStorage.setItem('user', JSON.stringify(data.user));
      currentUser = data.user;
      // Redirect to dashboard
      navigate('/user-dashboard/dashboard');
    } catch (error) {
      console.error('Network error:', error);
      setErrors({ non_field_errors: 'Network error. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  console.log(currentUser);
  
  if (currentUser) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-emerald-50 to-green-50 p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center"
      >
        <motion.img
          src={currentUser.image || "https://via.placeholder.com/100"}
          alt="User"
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-emerald-200 shadow-md"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "backOut" }}
        />
        <motion.h2
          className="text-3xl font-bold text-emerald-600 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Welcome Back, <span className='text-emerald-800 font-extrabold'>{currentUser.role.toUpperCase()},</span>  {currentUser.first_name}
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          You are already logged in.
        </motion.p>

        <motion.div
          className="text-left space-y-2 text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p><strong className='text-emerald-600'>Email:</strong> {currentUser.email || "N/A"}</p>
          <p><strong className='text-emerald-600'>Phone:</strong> {currentUser.phone || "N/A"}</p>
          <p><strong className='text-emerald-600'>Location:</strong> {currentUser.location || "Not specified"}</p>
        </motion.div>
        <div className="mt-6 flex justify-center flex-column">
            <motion.button
                className="mt-6 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded-xl transition-colors duration-300"
                onClick={() => navigate('/')}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                >Home   
            </motion.button>
            <motion.button
                className="mt-6 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded-xl transition-colors duration-300"
                onClick={() => navigate('/user-dashboard/dashboard')}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                >Dashboard
            </motion.button>
        </div>
      </motion.div>
    </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-emerald-50 to-green-50 p-4">
      <motion.div
        className="flex flex-col md:flex-row items-center rounded-3xl p-10 w-full max-w-6xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            src={loginImage}
            alt="login"
            className="w-4/5 h-auto object-contain"
            variants={imageVariants}
            animate="float"
            whileHover="hover"
          />
        </motion.div>

        {/* Form Section */}
        <motion.div
          className="w-full md:w-1/2 space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="text-center" variants={itemVariants}>
            <h2 className="text-3xl font-bold text-emerald-600 mb-2">Welcome Back</h2>
            <p className="text-lg text-gray-600">Log in to continue your journey</p>
          </motion.div>

          {errors.non_field_errors && (
            <motion.div className="text-red-500 text-center" variants={itemVariants}>
              {errors.non_field_errors}
            </motion.div>
          )}

          <motion.form onSubmit={handleLogin} className="space-y-4">
            <motion.div variants={itemVariants}>
              <label className=" text-lg font-medium text-gray-800 flex items-center">
                <FiSmartphone className="mr-3 text-emerald-600 text-xl" />
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-lg"
                placeholder="+8801712345678"
                disabled={isLoading}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className=" text-lg font-medium text-gray-800 flex items-center">
                <FiLock className="mr-3 text-emerald-600 text-xl" />
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-lg pr-10"
                  placeholder="Enter your password"
                  disabled={isLoading}
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-xl text-gray-500 cursor-pointer"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </div>
              </div>
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </motion.div>

            <motion.button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white text-lg font-semibold py-3 rounded-xl transition-colors duration-300 disabled:opacity-50"
              variants={itemVariants}
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Log In'}
            </motion.button>
          </motion.form>

          <p className="text-center mt-6 text-gray-600">
            Don’t have an account?{' '}
            <a href="/signup" className="text-emerald-600 font-semibold hover:underline">
              Sign up here
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login