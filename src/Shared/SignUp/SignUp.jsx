

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FiUser, FiLock, FiMail, FiSmartphone, FiEye, FiEyeOff, FiCheck, FiBook, FiMapPin, FiHome
} from 'react-icons/fi';
import teacher from "./../../../public/Images/undraw_teaching_58yg.svg";
import student from "./../../../public/Images/undraw_educator_6dgp.svg";

const SignUp = () => {
    const [isTeacher, setIsTeacher] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        age: '',
        institution: '',
        image_url: '',
        user_type: 'teacher',
        experience: '',
        subjects: '',
        location: '',
        preferred_subjects: '',
        student_class: '',
        address: '',
    });

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };


    const handleSignup = async (e) => {
    e.preventDefault();
    
    // 1. Explicitly determine user_type from state
    const user_type = isTeacher ? 'teacher' : 'guardian';

    // 2. Prepare data with proper type conversions
    const postData = {
        user: {
            ...formData,
            age: formData.age ? parseInt(formData.age) : null,
            user_type: user_type, // Direct state-derived value
            password: formData.password // Ensure password exists
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

    // 3. Debugging log
    console.log('Final Submission Data:', JSON.stringify(postData, null, 2));

    try {
        const response = await fetch('http://127.0.0.1:8000/api/signup/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postData),
        });

        const responseData = await response.json();
        
        if (!response.ok) {
            console.error('Backend validation errors:', responseData);
            alert(`Signup failed: ${responseData.message || 'Unknown error'}`);
            return;
        }
        
        alert("Signup successful!");
        } catch (error) {
            console.error("Network error:", error);
            alert("Network error. Please try again.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-emerald-50 to-green-50 p-4">
            <motion.div
                className="flex flex-col md:flex-row items-center  rounded-3xl p-10 w-full max-w-6xl"
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
                                }}
                            >
                                <h3 className="text-xl font-semibold text-gray-800 text-center">
                                    {role}
                                </h3>
                                <p className="text-gray-500 text-sm text-center mt-2">
                                    {role === 'Teacher'
                                        ? 'Connect with students'
                                        : 'Find qualified tutors'}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Form Fields */}
                    <motion.form onSubmit={handleSignup} className="space-y-4">
                        {/* Common Fields */}
                        <motion.div variants={itemVariants}>
                            <label className="block text-lg font-medium text-gray-800 flex items-center">
                                <FiUser className="mr-3 text-emerald-600 text-xl" />
                                Full Name
                            </label>
                            <input
                                required
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-lg"
                                placeholder="John Doe"
                            />
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <motion.div variants={itemVariants}>
                                <label className="block text-lg font-medium text-gray-800 flex items-center">
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
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <label className="block text-lg font-medium text-gray-800 flex items-center">
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
                                    placeholder="+880 1XXX XXXXXX"
                                />
                            </motion.div>
                        </div>

                        <motion.div variants={itemVariants}>
                            <label className="block text-lg font-medium text-gray-800 flex items-center">
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
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <motion.div variants={itemVariants}>
                                <label className="block text-lg font-medium text-gray-800 flex items-center">
                                    <FiUser className="mr-3 text-emerald-600 text-xl" />
                                    Age
                                </label>
                                <input
                                    required
                                    type="number"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-lg"
                                    placeholder="Enter your age"
                                />
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <label className="block text-lg font-medium text-gray-800 flex items-center">
                                    <FiBook className="mr-3 text-emerald-600 text-xl" />
                                    Institution
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="institution"
                                    value={formData.institution}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-lg"
                                    placeholder="Your institution"
                                />
                            </motion.div>
                        </div>

                        {/* Conditional Fields */}
                        {isTeacher ? (
                            <>
                                <motion.div variants={itemVariants}>
                                    <label className="block text-lg font-medium text-gray-800 flex items-center">
                                        <FiMapPin className="mr-3 text-emerald-600 text-xl" />
                                        Location
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-lg"
                                        placeholder="Your location"
                                    />
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <label className="block text-lg font-medium text-gray-800 flex items-center">
                                        <FiBook className="mr-3 text-emerald-600 text-xl" />
                                        Subjects
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        name="subjects"
                                        value={formData.subjects}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-lg"
                                        placeholder="Subjects you teach"
                                    />
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <label className="block text-lg font-medium text-gray-800 flex items-center">
                                        <FiUser className="mr-3 text-emerald-600 text-xl" />
                                        Experience
                                    </label>
                                    <textarea
                                        required
                                        name="experience"
                                        value={formData.experience}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-lg"
                                        placeholder="Your teaching experience"
                                    />
                                </motion.div>
                            </>
                        ) : (
                            <>
                                <motion.div variants={itemVariants}>
                                    <label className="block text-lg font-medium text-gray-800 flex items-center">
                                        <FiBook className="mr-3 text-emerald-600 text-xl" />
                                        Preferred Subjects
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        name="preferred_subjects"
                                        value={formData.preferred_subjects}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-lg"
                                        placeholder="Subjects you want"
                                    />
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <label className="block text-lg font-medium text-gray-800 flex items-center">
                                        <FiUser className="mr-3 text-emerald-600 text-xl" />
                                        Student Class
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        name="student_class"
                                        value={formData.student_class}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-lg"
                                        placeholder="e.g., Class 7"
                                    />
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <label className="block text-lg font-medium text-gray-800 flex items-center">
                                        <FiHome className="mr-3 text-emerald-600 text-xl" />
                                        Address
                                    </label>
                                    <textarea
                                        required
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-lg"
                                        placeholder="Full address"
                                    />
                                </motion.div>
                            </>
                        )}

                        <motion.button
                            type="submit"
                            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white text-lg font-semibold py-3 rounded-xl transition-colors duration-300"
                            variants={itemVariants}
                        >
                            Sign Up
                        </motion.button>
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

