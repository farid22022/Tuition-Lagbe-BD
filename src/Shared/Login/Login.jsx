import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { 
                duration: 0.5,
                staggerChildren: 0.1,
                when: "beforeChildren"
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:8000/api/login/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: formData.email.toLowerCase().trim(), // Normalize email
                    password: formData.password
                })
            });

            const data = await response.json();
            
            if (response.ok) {
                // Successful login handling
            } else {
                alert(data.detail || 'Invalid email or password');
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('Connection error. Please try again.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-emerald-50 to-green-50 p-4">
            <motion.div
                className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="text-center" variants={itemVariants}>
                    <h2 className="text-3xl font-bold text-emerald-600 mb-2">Welcome Back</h2>
                    <p className="text-lg text-gray-600">Continue your educational journey</p>
                </motion.div>

                <motion.form onSubmit={handleLogin} className="space-y-6 mt-8">
                    <motion.div variants={itemVariants}>
                        <label className="block text-lg font-medium text-gray-800 flex items-center">
                            <FiMail className="mr-3 text-emerald-600 text-xl" />
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={e => setFormData({...formData, email: e.target.value})}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-lg mt-2"
                            placeholder="your@email.com"
                            required
                        />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <label className="block text-lg font-medium text-gray-800 flex items-center">
                            <FiLock className="mr-3 text-emerald-600 text-xl" />
                            Password
                        </label>
                        <div className="relative mt-2">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={e => setFormData({...formData, password: e.target.value})}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-lg pr-10"
                                placeholder="Enter your password"
                                required
                            />
                            <div
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-3 text-xl text-gray-500 cursor-pointer"
                            >
                                {showPassword ? <FiEyeOff /> : <FiEye />}
                            </div>
                        </div>
                    </motion.div>

                    <motion.button
                        type="submit"
                        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white text-lg font-semibold py-3 rounded-xl transition-colors duration-300"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Sign In
                    </motion.button>
                </motion.form>

                <motion.p className="text-center mt-6 text-gray-600" variants={itemVariants}>
                    Don't have an account?{' '}
                    <a 
                        href="/sign-up" 
                        className="text-emerald-600 font-semibold hover:underline"
                    >
                        Create Account
                    </a>
                </motion.p>
            </motion.div>
        </div>
    );
};

export default Login;