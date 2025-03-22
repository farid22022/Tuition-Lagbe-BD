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

    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-20 ">

            <motion.div 
                className="flex-1 text-center md:text-left mb-8 md:mb-0 space-y-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight"
                >
                    Discover Premier <br />
                    <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                        Tutoring Positions
                    </span>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-lg md:text-xl font-medium text-gray-600 mt-4"
                >
                    Connect with ideal teaching opportunities in your region
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-8 max-w-md mx-auto md:mx-0"
                >
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Select Region</label>
                        <div className="relative group">
                            <select
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                                        focus:outline-none focus:ring-2 focus:ring-green-500 
                                        focus:border-green-500 transition-all duration-200
                                        text-gray-700 font-medium hover:border-green-400
                                        shadow-sm"
                            >
                                <option value="" className="text-gray-400">Select your division</option>
                                {divisions.map((division) => (
                                    <option
                                        key={division.code}
                                        value={division.code}
                                        className="text-gray-700"
                                    >
                                        {division.name} Division
                                    </option>
                                ))}
                            </select>
                            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                <svg 
                                    className="w-5 h-5 text-gray-500 group-hover:text-green-600 transition-colors"
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M19 9l-7 7-7-7" 
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="mt-6 w-full md:w-auto bg-green-600 hover:bg-green-700 text-white 
                                 px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-md
                                 transition-all duration-200"
                    >
                        Browse Opportunities
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Image Section */}
            <motion.div
                className="flex-1 flex justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <motion.img
                    src={image}
                    alt="Professional Education"
                    className="w-full max-w-xl p-8"
                    animate={{
                        y: [0, -10, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </motion.div>
        </div>
    );
};

export default Banner;