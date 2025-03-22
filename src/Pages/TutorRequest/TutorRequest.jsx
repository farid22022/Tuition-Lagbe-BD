import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiPhone, FiBook, FiBookmark, FiMapPin, FiHelpCircle, FiArrowRight } from 'react-icons/fi';

const TutorRequest = () => {
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        initial={{ backgroundPosition: '0% 50%' }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          transition: { duration: 15, repeat: Infinity }
        }}
        style={{
          background: 'linear-gradient(45deg, #059669, #3b82f6, #6366f1)',
          backgroundSize: '300% 300%'
        }}
      />

      <div className="flex flex-col lg:flex-row relative z-10">
        {/* Left Section - Form */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center"
        >
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-8"
            >
              <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                Find Qualified Tutors
              </h1>
              <p className="text-gray-600 text-lg">
                Connect with verified university tutors for personalized learning experiences - 
                both online and in-home sessions available.
              </p>
            </motion.div>

            <motion.form 
              className="space-y-6"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
              {/* Form Fields */}
              <motion.div variants={formVariants}>
                <label className=" text-gray-700 text-sm font-medium mb-2 flex items-center gap-2">
                  <FiUser className="text-teal-600" />
                  Student Name *
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                />
              </motion.div>

              <motion.div variants={formVariants}>
                <label className=" text-gray-700 text-sm font-medium mb-2 flex items-center gap-2">
                  <FiPhone className="text-teal-600" />
                  Contact Number *
                </label>
                <input
                  type="tel"
                  placeholder="+880 1234 567890"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                />
              </motion.div>

              <motion.div 
                variants={formVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div>
                  <label className=" text-gray-700 text-sm font-medium mb-2 flex items-center gap-2">
                    <FiBook className="text-teal-600" />
                    Education Medium *
                  </label>
                  <select className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
                    <option>Select Medium</option>
                    <option>Bangla</option>
                    <option>English</option>
                  </select>
                </div>

                <div>
                  <label className=" text-gray-700 text-sm font-medium mb-2 flex items-center gap-2">
                    <FiBookmark className="text-teal-600" />
                    Grade Level *
                  </label>
                  <select className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
                    <option>Select Grade</option>
                    <option>Grade 1-5</option>
                    <option>Grade 6-10</option>
                  </select>
                </div>
              </motion.div>

              <motion.div 
                variants={formVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div>
                  <label className=" text-gray-700 text-sm font-medium mb-2 flex items-center gap-2">
                    <FiMapPin className="text-teal-600" />
                    Select District *
                  </label>
                  <select className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
                    <option>Choose District</option>
                    <option>Dhaka</option>
                    <option>Chittagong</option>
                  </select>
                </div>

                <div>
                  <label className=" text-gray-700 text-sm font-medium mb-2">
                    Preferred Area *
                  </label>
                  <select className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
                    <option>Select Area</option>
                    <option>Central Area</option>
                    <option>Suburban Area</option>
                  </select>
                </div>
              </motion.div>

              <motion.div variants={formVariants}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-teal-600 to-indigo-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  Submit Request
                  <FiArrowRight className="text-lg" />
                </motion.button>
              </motion.div>
            </motion.form>
          </div>
        </motion.div>

        {/* Right Section - Info */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
          className="hidden lg: w-1/2 bg-gradient-to-b from-teal-50 to-indigo-50 p-12"
        >
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-indigo-600 bg-clip-text text-transparent mb-8 flex items-center gap-2">
              <FiHelpCircle className="text-teal-500" />
              How It Works
            </h2>

            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.4 } }}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Tutor Matching Process
                </h3>
                <p className="text-gray-600">
                  Submit your requirements and our team will match you with verified tutors 
                  based on your location, subject needs, and schedule preferences.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.5 } }}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Quality Assurance
                </h3>
                <p className="text-gray-600">
                  All tutors undergo strict verification and qualification checks. 
                  We maintain teaching standards through regular performance reviews.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TutorRequest;