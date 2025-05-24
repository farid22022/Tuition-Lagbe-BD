
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiUser, FiLock, FiMail, FiSmartphone, FiEye, FiEyeOff, FiBook, FiMapPin, FiHome, FiImage
} from 'react-icons/fi';
import teacher from "./../../../public/Images/undraw_teaching_58yg.svg";
import student from "./../../../public/Images/undraw_educator_6dgp.svg";

const SignUp = () => {
  const [isTeacher, setIsTeacher] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    age: '',
    institution: '',
    image: '',
    user_type: 'teacher',
    experience: '',
    subjects: '',
    location: '',
    preferred_subjects: '',
    student_class: '',
    address: '',
  });
  const [errors, setErrors] = useState({});
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  const imageVariants = {
    float: {
      y: [0, -20, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    },
    hover: { scale: 1.05, transition: { duration: 0.3 } }
  };

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

  const pageVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password || formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?8801[3-9][0-9]{8}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be in the format +8801XXXXXXXXX';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateImage = (file) => {
    if (!file) return true; // Image is optional
    const maxSize = 5 * 1024 * 1024; // 5MB
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (file.size > maxSize) {
      setErrors(prev => ({ ...prev, image: 'Image size must be less than 5MB' }));
      return false;
    }
    if (!allowedTypes.includes(file.type)) {
      setErrors(prev => ({ ...prev, image: 'Only JPEG, PNG, or GIF images are allowed' }));
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && validateImage(file)) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
      setErrors(prev => ({ ...prev, image: '' }));
    } else {
      setImageFile(null);
      setImagePreview(null);
      e.target.value = null;
    }
  };

  const clearImage = () => {
    setImageFile(null);
    setImagePreview(null);
    setFormData(prev => ({ ...prev, image: '' }));
    if (fileInputRef.current) fileInputRef.current.value = null;
  };

  const uploadImage = async () => {
    if (!imageFile) return '';
    setIsUploading(true);
    const formData = new FormData();
    formData.append('image', imageFile);
    formData.append('key', import.meta.env.VITE_IMGBB_API_KEY || '757ec57b5f8a618a06dabaafb680a399'); // Fallback for testing
    try {
      const response = await fetch('https://api.imgbb.com/1/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.error?.message || 'Image upload failed');
      }
      return data.data.url;
    } catch (error) {
      throw new Error(error.message || 'Failed to upload image');
    } finally {
      setIsUploading(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      alert('Please fix the form errors before submitting');
      return;
    }

    let imageUrl = '';
    try {
      if (imageFile) {
        imageUrl = await uploadImage();
      }
    } catch (error) {
      setErrors(prev => ({ ...prev, image: error.message }));
      alert(error.message);
      return;
    }

    const user_type = isTeacher ? 'teacher' : 'guardian';
    const postData = {
      user: {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        age: formData.age ? parseInt(formData.age) : null,
        institution: formData.institution,
        user_type,
        image: imageUrl,
      },
      detail: isTeacher ? {
        experience: formData.experience,
        subjects: formData.subjects,
        location: formData.location
      } : {
        preferred_subjects: formData.preferred_subjects,
        student_class: formData.student_class,
        address: formData.address
      }
    };

    console.log('Final Submission Data:', JSON.stringify(postData, null, 2));

    try {
      const response = await fetch('http://127.0.0.1:8000/api/v1/signup/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData),
      });

      const responseData = await response.json();
      if (!response.ok) {
        const errorMessages = Object.entries(responseData)
          .map(([field, errors]) => `${field}: ${errors.join(', ')}`)
          .join('\n');
        setErrors(responseData);
        alert(`Signup failed:\n${errorMessages || 'Unknown error'}`);
        return;
      }

      alert('Signup successful!');
      window.location.href = '/login';
    } catch (error) {
      console.error('Network error:', error);
      alert('Network error. Please try again.');
    }
  };

  const totalPages = isTeacher ? 6 : 6; // 4 common + 2 conditional pages

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <motion.div
            key="page-1"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div variants={itemVariants}>
                <label className="text-lg font-medium text-gray-800 flex items-center">
                  <FiUser className="mr-3 text-emerald-600 text-xl" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-lg"
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </motion.div>
              <motion.div variants={itemVariants}>
                <label className="text-lg font-medium text-gray-800 flex items-center">
                  <FiMail className="mr-3 text-emerald-600 text-xl" />
                  Email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-lg"
                  placeholder="example@email.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </motion.div>
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            key="page-2"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div variants={itemVariants}>
                <label className="text-lg font-medium text-gray-800 flex items-center">
                  <FiLock className="mr-3 text-emerald-600 text-xl" />
                  Password
                </label>
                <div className="relative">
                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-lg pr-10"
                    placeholder="Enter your password"
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
              <motion.div variants={itemVariants}>
                <label className="text-lg font-medium text-gray-800 flex items-center">
                  <FiSmartphone className="mr-3 text-emerald-600 text-xl" />
                  Phone
                </label>
                <input
                  required
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-lg"
                  placeholder="+8801712345678"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </motion.div>
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            key="page-3"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div variants={itemVariants}>
                <label className="text-lg font-medium text-gray-800 flex items-center">
                  <FiUser className="mr-3 text-emerald-600 text-xl" />
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-lg"
                  placeholder="Enter your age"
                />
                {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
              </motion.div>
              <motion.div variants={itemVariants}>
                <label className="text-lg font-medium text-gray-800 flex items-center">
                  <FiBook className="mr-3 text-emerald-600 text-xl" />
                  Institution
                </label>
                <input
                  type="text"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-lg"
                  placeholder="Your institution"
                />
                {errors.institution && <p className="text-red-500 text-sm mt-1">{errors.institution}</p>}
              </motion.div>
            </div>
          </motion.div>
        );
      case 4:
        return (
          <motion.div
            key="page-4"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="space-y-4"
          >
            <motion.div variants={itemVariants}>
              <label className="text-lg font-medium text-gray-800 flex items-center">
                <FiImage className="mr-3 text-emerald-600 text-xl" />
                Profile Picture
              </label>
              <input
                type="file"
                accept="image/jpeg,image/png,image/gif"
                onChange={handleImageChange}
                ref={fileInputRef}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-lg"
                disabled={isUploading}
              />
              {imagePreview && (
                <div className="mt-2 relative">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-32 h-32 object-cover rounded-full border-2 border-gray-200"
                  />
                  <button
                    onClick={clearImage}
                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                  >
                    ×
                  </button>
                </div>
              )}
              {isUploading && (
                <p className="text-emerald-600 text-sm mt-1">Uploading image...</p>
              )}
              {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
            </motion.div>
          </motion.div>
        );
      case 5:
        return isTeacher ? (
          <motion.div
            key="page-5-teacher"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div variants={itemVariants}>
                <label className="text-lg font-medium text-gray-800 flex items-center">
                  <FiMapPin className="mr-3 text-emerald-600 text-xl" />
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-lg"
                  placeholder="Your location"
                />
                {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
              </motion.div>
              <motion.div variants={itemVariants}>
                <label className="text-lg font-medium text-gray-800 flex items-center">
                  <FiBook className="mr-3 text-emerald-600 text-xl" />
                  Subjects
                </label>
                <input
                  type="text"
                  name="subjects"
                  value={formData.subjects}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-lg"
                  placeholder="Subjects you teach"
                />
                {errors.subjects && <p className="text-red-500 text-sm mt-1">{errors.subjects}</p>}
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="page-5-guardian"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div variants={itemVariants}>
                <label className="text-lg font-medium text-gray-800 flex items-center">
                  <FiBook className="mr-3 text-emerald-600 text-xl" />
                  Preferred Subjects
                </label>
                <input
                  type="text"
                  name="preferred_subjects"
                  value={formData.preferred_subjects}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-lg"
                  placeholder="Subjects you want"
                />
                {errors.preferred_subjects && <p className="text-red-500 text-sm mt-1">{errors.preferred_subjects}</p>}
              </motion.div>
              <motion.div variants={itemVariants}>
                <label className="text-lg font-medium text-gray-800 flex items-center">
                  <FiUser className="mr-3 text-emerald-600 text-xl" />
                  Student Class
                </label>
                <input
                  type="text"
                  name="student_class"
                  value={formData.student_class}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-lg"
                  placeholder="e.g., Class 7"
                />
                {errors.student_class && <p className="text-red-500 text-sm mt-1">{errors.student_class}</p>}
              </motion.div>
            </div>
          </motion.div>
        );
      case 6:
        return isTeacher ? (
          <motion.div
            key="page-6-teacher"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="space-y-4"
          >
            <motion.div variants={itemVariants}>
              <label className="text-lg font-medium text-gray-800 flex items-center">
                <FiUser className="mr-3 text-emerald-600 text-xl" />
                Experience
              </label>
              <textarea
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-lg"
                placeholder="Your teaching experience"
              />
              {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience}</p>}
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="page-6-guardian"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="space-y-4"
          >
            <motion.div variants={itemVariants}>
              <label className="text-lg font-medium text-gray-800 flex items-center">
                <FiHome className="mr-3 text-emerald-600 text-xl" />
                Address
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-lg"
                placeholder="Full address"
              />
              {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
            </motion.div>
          </motion.div>
        );
      default:
        return null;
    }
  };

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
            src={isTeacher ? teacher : student}
            alt="role"
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
            <h2 className="text-3xl font-bold text-emerald-600 mb-2">Create Account</h2>
            <p className="text-lg text-gray-600">Start your educational journey</p>
          </motion.div>

          {/* Role Selection */}
          <motion.div className="grid grid-cols-2 gap-4" variants={containerVariants}>
            {['Teacher', 'Guardian'].map((role) => (
              <motion.div
                key={role}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className={`p-4 border-2 rounded-xl cursor-pointer transition-colors ${
                  isTeacher === (role === 'Teacher')
                    ? 'border-emerald-500 bg-emerald-50'
                    : 'border-gray-200 hover:border-emerald-300'
                }`}
                onClick={() => {
                  setIsTeacher(role === 'Teacher');
                  setFormData(prev => ({ ...prev, user_type: role.toLowerCase() }));
                  setCurrentPage(1); // Reset to first page on role change
                }}
              >
                <h3 className="text-xl font-semibold text-gray-800 text-center">{role}</h3>
                <p className="text-gray-500 text-sm text-center mt-2">
                  {role === 'Teacher' ? 'Connect with students' : 'Find qualified tutors'}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Form Fields with Animation */}
          <motion.form onSubmit={handleSignup} className="space-y-6">
            <AnimatePresence mode="wait">
              {renderPage()}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <motion.button
                type="button"
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 text-lg font-semibold py-2 px-4 rounded-xl transition-colors duration-300 disabled:opacity-50"
                variants={itemVariants}
              >
                Previous
              </motion.button>
              {currentPage < totalPages ? (
                <motion.button
                  type="button"
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white text-lg font-semibold py-2 px-4 rounded-xl transition-colors duration-300"
                  variants={itemVariants}
                  disabled={isUploading}
                >
                  Next
                </motion.button>
              ) : (
                <motion.button
                  type="submit"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white text-lg font-semibold py-2 px-4 rounded-xl transition-colors duration-300"
                  variants={itemVariants}
                  disabled={isUploading}
                >
                  Sign Up
                </motion.button>
              )}
            </div>
          </motion.form>
          <p className="text-center mt-6 text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-emerald-600 font-semibold hover:underline">
              Login here
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SignUp;