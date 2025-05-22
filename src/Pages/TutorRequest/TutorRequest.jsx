

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUser, FiPhone, FiBook, FiBookmark, FiMapPin, FiHelpCircle, FiArrowRight } from 'react-icons/fi';

const TutorRequest = () => {
  const formVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, type: "spring", stiffness: 120 }
    })
  };

  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        initial={{ backgroundPosition: '0% 50%' }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          transition: { duration: 20, repeat: Infinity }
        }}
        style={{
          background: 'linear-gradient(45deg, #059669, #3b82f6, #6366f1)',
          backgroundSize: '300% 300%'
        }}
      />

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-8 h-8 bg-teal-200/20 rounded-full blur-lg"
          initial={{
            x: Math.random() * 100,
            y: Math.random() * 100,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{
            x: ["0%", "20%", "0%"],
            y: ["0%", "30%", "0%"],
            rotate: 360
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}

      <div className="flex flex-col lg:flex-row relative z-10 min-h-screen">
        {/* Left Section - Form */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="w-full lg:w-1/2 p-6 md:p-12 flex items-center"
        >
          <div className="max-w-2xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-8 md:mb-12"
            >
              <motion.h1
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-600 to-indigo-600 bg-clip-text text-transparent mb-2"
              >
                Find Qualified Tutors
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-600 md:text-lg"
              >
                Connect with verified university tutors for personalized learning experiences
              </motion.p>
            </motion.div>

            <motion.form 
              className="space-y-6"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
              {/* Form Fields */}
              <motion.div variants={formVariants}>
                <label className="text-gray-700 text-sm font-medium mb-2 flex items-center gap-2">
                  <FiUser className="text-teal-600" />
                  Student Name *
                </label>
                <motion.input
                  type="text"
                  placeholder="John Doe"
                  className="w-full p-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                  whileFocus={{ scale: 1.01 }}
                />
              </motion.div>

              <motion.div variants={formVariants}>
                <label className="text-gray-700 text-sm font-medium mb-2 flex items-center gap-2">
                  <FiPhone className="text-teal-600" />
                  Contact Number *
                </label>
                <motion.input
                  type="tel"
                  placeholder="+880 1234 567890"
                  className="w-full p-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                  whileFocus={{ scale: 1.01 }}
                />
              </motion.div>

              <motion.div 
                variants={formVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {/* Education Medium */}
                <motion.div
                  whileHover={{ y: -2 }}
                  className="relative"
                >
                  <label className="text-gray-700 text-sm font-medium mb-2 flex items-center gap-2">
                    <FiBook className="text-teal-600" />
                    Education Medium *
                  </label>
                  <select className="w-full p-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 appearance-none">
                    <option>Select Medium</option>
                    <option>Bangla</option>
                    <option>English</option>
                  </select>
                  <FiArrowRight className="absolute right-4 top-9 text-gray-400 pointer-events-none" />
                </motion.div>

                {/* Grade Level */}
                <motion.div
                  whileHover={{ y: -2 }}
                  className="relative"
                >
                  <label className="text-gray-700 text-sm font-medium mb-2 flex items-center gap-2">
                    <FiBookmark className="text-teal-600" />
                    Grade Level *
                  </label>
                  <select className="w-full p-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 appearance-none">
                    <option>Select Grade</option>
                    <option>Grade 1-5</option>
                    <option>Grade 6-10</option>
                  </select>
                  <FiArrowRight className="absolute right-4 top-9 text-gray-400 pointer-events-none" />
                </motion.div>
              </motion.div>

              <motion.div 
                variants={formVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {/* District Select */}
                <motion.div
                  whileHover={{ y: -2 }}
                  className="relative"
                >
                  <label className="text-gray-700 text-sm font-medium mb-2 flex items-center gap-2">
                    <FiMapPin className="text-teal-600" />
                    Select District *
                  </label>
                  <select className="w-full p-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 appearance-none">
                    <option>Choose District</option>
                    <option>Dhaka</option>
                    <option>Chittagong</option>
                  </select>
                  <FiArrowRight className="absolute right-4 top-9 text-gray-400 pointer-events-none" />
                </motion.div>

                {/* Preferred Area */}
                <motion.div
                  whileHover={{ y: -2 }}
                  className="relative"
                >
                  <label className="text-gray-700 text-sm font-medium mb-2">
                    Preferred Area *
                  </label>
                  <select className="w-full p-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 appearance-none">
                    <option>Select Area</option>
                    <option>Central Area</option>
                    <option>Suburban Area</option>
                  </select>
                  <FiArrowRight className="absolute right-4 top-9 text-gray-400 pointer-events-none" />
                </motion.div>
              </motion.div>

              <motion.div variants={formVariants}>
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    background: 'linear-gradient(45deg, #047857, #2563eb, #4f46e5)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-teal-600 to-indigo-600 text-white py-3.5 rounded-xl font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2 text-md md:text-lg"
                >
                  Submit Request
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FiArrowRight className="text-xl" />
                  </motion.span>
                </motion.button>
              </motion.div>
            </motion.form>
          </div>
        </motion.div>

        {/* Right Section - Info */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", delay: 0.3 }}
          className="w-full lg:w-1/2 bg-gradient-to-b from-teal-50 to-indigo-50 p-6 md:p-12 flex items-center"
        >
          <div className="max-w-md mx-auto w-full">
            <motion.h2 
              className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-teal-600 to-indigo-600 bg-clip-text text-transparent mb-8 md:mb-12 flex items-center gap-3"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
            >
              <FiHelpCircle className="text-teal-500 text-2xl" />
              How It Works
            </motion.h2>

            <div className="space-y-6 md:space-y-8">
              {[
                {
                  title: "Tutor Matching Process",
                  content: "Submit your requirements and our team will match you with verified tutors based on your location, subject needs, and schedule preferences."
                },
                {
                  title: "Quality Assurance",
                  content: "All tutors undergo strict verification and qualification checks. We maintain teaching standards through regular performance reviews."
                }
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  variants={cardVariants}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ y: -5 }}
                  className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-teal-100"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 md:text-lg leading-relaxed">
                    {card.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TutorRequest;