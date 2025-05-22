

import { motion } from "framer-motion";
import image from "./../../../../public/Images/undraw_online-learning_tgmv.svg";

const Banner = () => {
    const divisions = [
        { code: "10001", name: "Dhaka" },
        { code: "20002", name: "Chattogram" },
        { code: "30003", name: "Rajshahi" },
        { code: "40004", name: "Khulna" },
        { code: "50005", name: "Barishal" },
        { code: "60006", name: "Sylhet" },
        { code: "70007", name: "Rangpur" },
        { code: "80008", name: "Mymensingh" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
                when: "beforeChildren"
            }
        }
    };

    const itemVariants = {
        hidden: { 
            y: 40,
            opacity: 0,
            scale: 0.95
        },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 12
            }
        }
    };

    const floatingVariants = {
        float: {
            y: ["0%", "-5%", "0%"],
            rotate: [0, 1, -1, 0],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-16 md:px-60 bg-gradient-to-br from-green-50 to-blue-50">
            {/* Text Content */}
            <motion.div 
                className="flex-1 text-center md:text-left mb-8 md:mb-0 space-y-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Title */}
                <motion.div variants={itemVariants}>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                        Discover Premier <br />
                        <motion.span 
                            className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent"
                            initial={{ backgroundPositionX: "0%" }}
                            animate={{ backgroundPositionX: "100%" }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        >
                            Tutoring Positions
                        </motion.span>
                    </h1>
                </motion.div>

                {/* Subtitle */}
                <motion.div variants={itemVariants}>
                    <h2 className="text-lg md:text-xl font-medium text-gray-600 mt-4">
                        Connect with ideal teaching opportunities in your region
                    </h2>
                </motion.div>

                {/* Form Section */}
                <motion.div 
                    variants={containerVariants}
                    className="mt-8 max-w-md mx-auto md:mx-0"
                >
                    <motion.div variants={itemVariants} className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Select Region</label>
                        <motion.div 
                            className="relative group"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <select
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl
                                        focus:outline-none focus:ring-2 focus:ring-green-500 
                                        focus:border-green-500 transition-all duration-200
                                        text-gray-700 font-medium hover:border-green-300
                                        shadow-lg bg-white"
                            >
                                <option value="" className="text-gray-400">Select your division</option>
                                {divisions.map((division) => (
                                    <motion.option
                                        key={division.code}
                                        value={division.code}
                                        className="text-gray-700"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        {division.name}
                                    </motion.option>
                                ))}
                            </select>
                            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                <motion.svg 
                                    className="w-5 h-5 text-gray-500 group-hover:text-green-600"
                                    animate={{ 
                                        rotate: [0, 15, 0],
                                        y: [0, -3, 0]
                                    }}
                                    transition={{ 
                                        duration: 1.5,
                                        repeat: Infinity
                                    }}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M19 9l-7 7-7-7" 
                                    />
                                </motion.svg>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Button */}
                    <motion.div variants={itemVariants} className="mt-6">
                        <motion.button
                            whileHover={{ 
                                y: -3,
                                scale: 1.05,
                                boxShadow: "0 10px 20px rgba(5, 150, 105, 0.2)"
                            }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="w-full md:w-auto bg-gradient-to-r from-green-600 to-green-500 
                                     text-white px-8 py-4 rounded-xl font-semibold shadow-lg
                                     flex items-center justify-center gap-2 hover:gap-3
                                     transition-all duration-200"
                        >
                            Browse Opportunities
                            <motion.svg 
                                className="w-4 h-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                whileHover={{ x: 5 }}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </motion.svg>
                        </motion.button>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Image Section */}
            <motion.div
                className="flex-1 flex justify-center"
                initial={{ opacity: 0, scale: 0.95, x: 50 }}
                animate={{ 
                    opacity: 1, 
                    scale: 1,
                    x: 0,
                    transition: { 
                        type: "spring", 
                        stiffness: 100,
                        delay: 0.5
                    } 
                }}
            >
                <motion.div
                    className="relative w-full max-w-xl p-8"
                    variants={floatingVariants}
                    animate="float"
                >
                    <motion.img
                        src={image}
                        alt="Professional Education"
                        className="w-full relative z-10 transform hover:scale-105 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                    />
                    <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-green-100 to-blue-100 blur-2xl opacity-50 z-0"
                        animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0.5, 0.6, 0.5]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity
                        }}
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Banner;