import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-gray-900 text-gray-300 py-12 px-4 sm:px-8 lg:px-16 z-70">
            {/* Background Animation */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-20 animate-pulse"></div>
            </div>
            
            <div className="relative max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* About Section */}
                    <div className="col-span-2">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
                            Tuition Lagbe
                        </h3>
                        <p className="text-sm leading-relaxed">
                            Tuition Lagbe is a premier educational platform in Bangladesh connecting students with qualified tutors for 
                            academic preparation, skill development, and creative learning through home, online, batch, and crash courses. 
                            We make learning engaging, comprehensive, and accessible.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white border-b-2 border-blue-500 w-max pb-1 transition-all duration-300 hover:border-purple-500">Useful Links</h4>
                        <ul className="space-y-2">
                            {['Become A Tutor', 'Affiliate Program', 'Our Blog', 'Privacy Policy', 'Terms of Use'].map((link, index) => (
                                <motion.li key={index} whileHover={{ scale: 1.1 }}>
                                    <a href="#" className="hover:text-blue-400 transition-colors">{link}</a>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white border-b-2 border-blue-500 w-max pb-1 transition-all duration-300 hover:border-purple-500">Contact Us</h4>
                        <p>We're here to help!</p>
                        <div className="mt-4 space-y-2">
                            <a href="mailto:info@tuitionlagbe.com" className="block hover:text-blue-400 transition-colors">info@tuitionlagbe.com</a>
                            <a href="tel:09678444477" className="block hover:text-blue-400 transition-colors">Hotline: 09678-444477</a>
                            <p className="block">House-10/5, Tolahogo R/A, Section-1, Mirpur, Dhaka</p>
                        </div>
                    </div>
                </div>

                {/* App Downloads & Social Links */}
                <div className="border-t border-gray-700 pt-8 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="space-y-2">
                        <h5 className="text-white font-medium">Get Our Mobile App</h5>
                        <div className="flex gap-4">
                            <motion.a href="#" className="bg-black/20 p-2 rounded-lg hover:bg-black/30 transition" whileHover={{ scale: 1.1 }}>
                                <img src="/google-play-badge.svg" className="h-12" alt="Google Play" />
                            </motion.a>
                            <motion.a href="#" className="bg-black/20 p-2 rounded-lg hover:bg-black/30 transition" whileHover={{ scale: 1.1 }}>
                                <img src="/app-store-badge.svg" className="h-12" alt="App Store" />
                            </motion.a>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {["facebook", "twitter", "instagram"].map((platform, index) => (
                            <motion.a key={index} href="#" className="p-2 hover:text-blue-400 transition-colors" whileHover={{ scale: 1.2 }}>
                                <i className={`fab fa-${platform} text-2xl`}></i>
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 pt-8 text-center text-sm">
                    <p className="text-gray-400">
                        Copyright © 2023{new Date().getFullYear() > 2023 && `–${new Date().getFullYear()}`} Tuition Lagbe. All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
