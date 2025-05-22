

import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from 'react-icons/fi';
import googleIcon from "./../../../public/Logo/google.png";
import playStoreIcon from  "./../../../public/Logo/app.png"

const Footer = () => {
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 12
            }
        }
    };

    return (
        <footer className="relative overflow-hidden bg-gray-900 text-gray-300 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 xl:px-16 z-70">


            <motion.div className="relative max-w-7xl mx-auto">
                {/* Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
                    {/* About Section */}
                    <motion.div 
                        className="md:col-span-2 lg:col-span-2"
                        variants={itemVariants}
                    >
                        <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-600 bg-clip-text text-transparent mb-3 sm:mb-4">
                            Tuition Lagbe
                        </h3>
                        <p className="text-xs sm:text-sm leading-relaxed opacity-90">
                            Tuition Lagbe is a premier educational platform in Bangladesh connecting students with qualified tutors for 
                            academic preparation, skill development, and creative learning through home, online, batch, and crash courses. 
                            We make learning engaging, comprehensive, and accessible.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants} className="mt-4 sm:mt-0">
                        <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white border-b-2 border-blue-500 w-max pb-1 hover:border-purple-500 transition-all">
                            Useful Links
                        </h4>
                        <ul className="space-y-1 sm:space-y-2">
                            {['Become A Tutor', 'Affiliate Program', 'Our Blog', 'Privacy Policy', 'Terms of Use'].map((link, index) => (
                                <motion.li 
                                    key={index} 
                                    className="text-xs sm:text-sm"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-1 sm:gap-2">
                                        <FiArrowRight className="text-blue-400 text-xs sm:text-sm"/>
                                        {link}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div variants={itemVariants} className="mt-4 sm:mt-0">
                        <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white border-b-2 border-blue-500 w-max pb-1 hover:border-purple-500 transition-all">
                            Contact Us
                        </h4>
                        <div className="mt-2 sm:mt-4 space-y-2 sm:space-y-3">
                            <motion.a 
                                href="mailto:info@tuitionlagbe.com" 
                                className="flex items-center gap-2 hover:text-blue-400 transition-colors text-xs sm:text-sm"
                                whileHover={{ scale: 1.02 }}
                            >
                                <FiMail className="text-blue-400 flex-shrink-0"/>
                                info@tuitionlagbe.com
                            </motion.a>
                            <motion.a 
                                href="tel:09678444477" 
                                className="flex items-center gap-2 hover:text-blue-400 transition-colors text-xs sm:text-sm"
                                whileHover={{ scale: 1.02 }}
                            >
                                <FiPhone className="text-blue-400 flex-shrink-0"/>
                                09678-444477
                            </motion.a>
                            <motion.div 
                                className="flex items-start gap-2 text-xs sm:text-sm"
                                whileHover={{ scale: 1.02 }}
                            >
                                <FiMapPin className="text-blue-400 mt-0.5 flex-shrink-0"/>
                                <span className="break-words">
                                    House-10/5, Tolahogo R/A, Section-1, Mirpur, Dhaka
                                </span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* App Downloads & Social Links */}
                <motion.div 
                    className="border-t border-gray-700 pt-6 sm:pt-8 mb-6 sm:mb-8 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6"
                    variants={itemVariants}
                >
                    <div className="space-y-2 sm:space-y-3 w-full md:w-auto">
                        <h5 className="text-sm sm:text-base text-white font-medium text-center md:text-left">
                            Get Our Mobile App
                        </h5>
                        <div className="flex justify-center md:justify-start gap-3 sm:gap-4 flex-wrap">
                            <motion.a 
                                href="#" 
                                className="bg-black/20 p-1 sm:p-2 rounded-lg hover:bg-black/30 transition backdrop-blur-sm"
                                whileHover={{ scale: 1.1 }}
                            >
                                <img 
                                    src={playStoreIcon}
                                    className="h-10 sm:h-12 max-w-[120px] sm:max-w-none" 
                                    alt="Google Play" 
                                />
                            </motion.a>
                            <motion.a 
                                href="#" 
                                className="bg-black/20 p-1 sm:p-2 rounded-lg hover:bg-black/30 transition backdrop-blur-sm"
                                whileHover={{ scale: 1.1 }}
                            >
                                <img 
                                    src={googleIcon} 
                                    className="h-10 sm:h-12 max-w-[120px] sm:max-w-none" 
                                    alt="App Store" 
                                />
                            </motion.a>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center justify-center md:justify-start gap-3 sm:gap-4 w-full md:w-auto">
                        {["facebook", "twitter", "instagram", "linkedin"].map((platform, index) => (
                            <motion.a 
                                key={index} 
                                href="#"
                                className="p-1 sm:p-2 hover:text-blue-400 transition-colors text-lg sm:text-xl"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <i className={`fab fa-${platform}`}></i>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Copyright */}
                <motion.div 
                    className="border-t border-gray-700 pt-6 sm:pt-8 text-center"
                    variants={itemVariants}
                >
                    <p className="text-xs sm:text-sm text-gray-400">
                        Copyright © 2023{new Date().getFullYear() > 2023 && `–${new Date().getFullYear()}`} Tuition Lagbe. All Rights Reserved
                    </p>
                </motion.div>
            </motion.div>
        </footer>
    );
};

export default Footer;