
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiLock, FiMail, FiSmartphone, FiEye, FiEyeOff, FiCheck } from 'react-icons/fi';
import teacher from "./../../../public/Images/undraw_teaching_58yg.svg";
import student from "./../../../public/Images/undraw_educator_6dgp.svg";

const SignUp = () => {
    const [haveAccount, setHaveAccount] = useState(false);
    const [isTeacher, setIsTeacher] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        gender: '',
        password: '',
        confirmPassword: ''
    });

    // Animation variants
    const imageVariants = {
        float: {
            y: [0, -20, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        },
        hover: {
            scale: 1.05,
            transition: { duration: 0.3 }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                when: "beforeChildren"
            }
        },
        scale:.5
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <div className="flex items-center justify-center bg-gradient-to-br from-emerald-50 to-green-50 p-4">
            <motion.div 
                className="flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-2xl p-10 w-full"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Animated Image Section */}
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
                    className="w-full md:w-1/2 lg:scale-75"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div 
                        className="space-y-8"
                        variants={containerVariants}
                    >
                        {/* Header */}
                        <motion.div 
                            className="text-center"
                            variants={itemVariants}
                        >
                            <h2 className="text-3xl font-bold text-emerald-600 mb-3">
                                {haveAccount ? "Welcome Back!" : "Create Account"}
                            </h2>
                            <motion.p 
                                className="text-lg text-gray-600"
                                variants={itemVariants}
                            >
                                {haveAccount ? "Login to continue" : "Start your educational journey"}
                            </motion.p>
                        </motion.div>

                        {/* Role Selection */}
                        <motion.div 
                            className="grid grid-cols-2 gap-2"
                            variants={containerVariants}
                        >
                            {['Parent/Student', 'Tutor'].map((role, index) => (
                                <motion.div
                                    key={role}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 1 }}
                                    className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                                        isTeacher === !!index 
                                            ? 'border-emerald-500 bg-emerald-50 shadow-md' 
                                            : 'border-gray-200 hover:border-emerald-300'
                                    }`}
                                    onClick={() => setIsTeacher(!!index)}
                                >
                                    <h3 className="text-xl font-semibold text-gray-800 text-center">
                                        {role}
                                    </h3>
                                    <p className="text-gray-500 text-sm text-center mt-2">
                                        {index ? 'Connect with students' : 'Find qualified tutors'}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Form */}
                        <motion.form 
                            onSubmit={handleSubmit} 
                            className="space-y-6"
                            variants={containerVariants}
                        >
                            {!haveAccount && (
                                <>
                                    {/* Name Field */}
                                    <motion.div variants={itemVariants}>
                                        <label className="block text-lg font-medium text-gray-800 flex items-center">
                                            <FiUser className="mr-3 text-emerald-600 text-xl" />
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-emerald-100 text-lg"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        />
                                    </motion.div>

                                    {/* Phone Field */}
                                    <motion.div variants={itemVariants}>
                                        <label className="block text-lg font-medium text-gray-800 flex items-center">
                                            <FiSmartphone className="mr-3 text-emerald-600 text-xl" />
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            required
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-emerald-100 text-lg"
                                            placeholder="+880 1XXX XXXXXX"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                        />
                                    </motion.div>

                                    {/* Gender Selection */}
                                    <motion.div variants={itemVariants}>
                                        <label className="block text-lg font-medium text-gray-800">
                                            Gender *
                                        </label>
                                        <div className="grid grid-cols-2 gap-3">
                                            {['Male', 'Female'].map(gender => (
                                                <motion.label 
                                                    key={gender}
                                                    className={`p-3 border-2 rounded-lg flex items-center justify-center cursor-pointer transition-all ${
                                                        formData.gender === gender 
                                                            ? 'border-emerald-500 bg-emerald-50' 
                                                            : 'border-gray-200 hover:border-emerald-300'
                                                    }`}
                                                    whileHover={{ scale: 1.02 }}
                                                >
                                                    <input
                                                        type="radio"
                                                        name="gender"
                                                        value={gender}
                                                        className="hidden"
                                                        onChange={(e) => setFormData({...formData, gender: e.target.value})}
                                                    />
                                                    <span className="text-gray-700 text-lg">{gender}</span>
                                                    {formData.gender === gender && (
                                                        <FiCheck className="ml-2 text-emerald-600 text-xl" />
                                                    )}
                                                </motion.label>
                                            ))}
                                        </div>
                                    </motion.div>
                                </>
                            )}

                            {/* Email Field */}
                            <motion.div variants={itemVariants}>
                                <label className="block text-lg font-medium text-gray-800 flex items-center">
                                    <FiMail className="mr-3 text-emerald-600 text-xl" />
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    required
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-emerald-100 text-lg"
                                    placeholder="example@email.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                />
                            </motion.div>

                            {/* Password Fields */}
                            <motion.div variants={itemVariants}>
                                <label className="block text-lg font-medium text-gray-800 flex items-center">
                                    <FiLock className="mr-3 text-emerald-600 text-xl" />
                                    Password *
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        required
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-emerald-100 text-lg pr-16"
                                        placeholder="••••••••"
                                        value={formData.password}
                                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                                    />
                                    <motion.button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-gray-400 hover:text-emerald-600"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        {showPassword ? (
                                            <>
                                                <FiEyeOff className="text-xl" />
                                                <span className="text-sm">Hide</span>
                                            </>
                                        ) : (
                                            <>
                                                <FiEye className="text-xl" />
                                                <span className="text-sm">Show</span>
                                            </>
                                        )}
                                    </motion.button>
                                </div>
                            </motion.div>

                            {!haveAccount && (
                                <motion.div variants={itemVariants}>
                                    <label className="block text-lg font-medium text-gray-800 flex items-center">
                                        <FiLock className="mr-3 text-emerald-600 text-xl" />
                                        Confirm Password *
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            required
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-emerald-100 text-lg pr-16"
                                            placeholder="••••••••"
                                            value={formData.confirmPassword}
                                            onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                                        />
                                    </div>
                                </motion.div>
                            )}

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                variants={itemVariants}
                                whileHover={{ 
                                    scale: 1.02,
                                    boxShadow: "0 10px 20px rgba(5, 150, 105, 0.2)"
                                }}
                                whileTap={{ 
                                    scale: 0.98,
                                    boxShadow: "0 5px 10px rgba(5, 150, 105, 0.1)"
                                }}
                                className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white py-4 rounded-xl font-semibold text-lg transition-all shadow-lg"
                            >
                                {haveAccount ? "Login to Account" : "Create Account Now"}
                            </motion.button>
                        </motion.form>

                        {/* Form Footer */}
                        <motion.div 
                            className="text-center text-gray-600"
                            variants={itemVariants}
                        >
                            <p className="text-lg">
                                {haveAccount ? "New to our platform? " : "Already have an account? "}
                                <button
                                    onClick={() => setHaveAccount(!haveAccount)}
                                    className="text-emerald-600 font-semibold hover:underline"
                                >
                                    {haveAccount ? "Register Here" : "Login Here"}
                                </button>
                            </p>
                            <p className="mt-4 text-base">
                                By continuing, you agree to our{' '}
                                <a href="#" className="text-emerald-600 font-semibold hover:underline">Terms</a> and{' '}
                                <a href="#" className="text-emerald-600 font-semibold hover:underline">Privacy Policy</a>
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default SignUp;