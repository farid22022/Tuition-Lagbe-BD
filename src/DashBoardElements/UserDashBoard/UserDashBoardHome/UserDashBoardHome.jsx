import React from 'react';
import { FiBell, FiFileText, FiCheckCircle, FiArrowUpRight, FiLock, FiStar, FiShield, FiBarChart2, FiDollarSign, FiUserCheck, FiArrowRight ,FiBriefcase, 
  FiUsers,  
  FiArrowUp,
  FiActivity,
  FiTarget,
  FiTrendingUp,
  FiCheck,
  FiUploadCloud,
  FiRefreshCw} from 'react-icons/fi';
import image from "./../../../../public/Images/boy-with-laptop-384e8ca5.svg"
import { motion } from 'framer-motion';
const UserDashBoardHome = () => {
  return (
    <div className="max-w-7xl mt-20 mx-auto p-6 bg-gray-50 h-screen">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-gray-100 p-6 rounded-xl shadow-lg mb-8">
        {/* Left Section */}
        <div className="md:w-2/3 w-full">
          <div className="flex items-center gap-6">
            {/* Text Content */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome, MD Farid Hossen Rehad
              </h1>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We’re thrilled to have you on board! Your personalized dashboard allows you to  
                explore and apply for <strong>"Tuition Jobs"</strong> effortlessly. Begin your tutoring journey today!
              </p>
              <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-all">
                Update Profile <FiArrowUpRight className="text-lg" />
              </button>
            </div>

            {/* Profile Image */}
            <div className="shrink-0">
              <img className="w-28 h-28 rounded-full object-cover border-4 border-gray-300 shadow-md" 
                src={image} alt="Profile" />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/3 w-full text-left md:text-right mt-6 md:mt-0">
          <p className="text-sm text-gray-500">Member Since</p>
          <p className="text-lg font-semibold text-gray-900">March 22, 2025</p>
        </div>
      </div>




      {/* Membership Section */}
      <motion.div
        className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 shadow-lg mb-8 border border-gray-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          {/* Left Section */}
          <div className="flex-1">
            <div className="mb-4">
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Recommended
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Premium Membership Plan
            </h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Elevate your tutoring career with priority job matching, enhanced visibility, 
              and exclusive professional resources.
            </p>
            
            <div className="flex items-baseline gap-4 mb-6">
              <motion.div 
                className="flex flex-col"
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-4xl font-bold text-gray-900">
                  $499<span className="text-xl">/year</span>
                </span>
                <span className="text-gray-500 text-sm">
                  ($41.58/month equivalent)
                </span>
              </motion.div>
              
              <motion.button
                className="bg-gradient-to-br from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl shadow-md transition-all font-medium flex items-center gap-2"
                whileHover={{ scale: 1.02, shadow: "0 8px 20px -6px rgba(5, 150, 105, 0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                <FiCheckCircle className="text-xl" />
                Upgrade Now
              </motion.button>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <FiLock className="flex-shrink-0" />
              <span>30-day money-back guarantee • Secure payment processing</span>
            </div>
          </div>

          {/* Right Section */}
          <motion.div
            className="hidden md:block relative pl-8 border-l border-gray-200"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="space-y-5 min-w-[240px]">
              <div className="flex items-center gap-3">
                <FiStar className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Priority job matching</span>
              </div>
              <div className="flex items-center gap-3">
                <FiShield className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">Verified tutor badge</span>
              </div>
              <div className="flex items-center gap-3">
                <FiBarChart2 className="w-6 h-6 text-purple-600 flex-shrink-0" />
                <span className="text-gray-700">Advanced analytics dashboard</span>
              </div>
              <div className="flex items-center gap-3">
                <FiDollarSign className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                <span className="text-gray-700">Exclusive bonus opportunities</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Profile Completion */}
      <motion.div 
        className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <FiUserCheck className="text-blue-600" />
              Profile Strength
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Complete your profile to increase visibility
            </p>
          </div>
          <div className="bg-blue-50 px-3 py-1 rounded-full">
            <span className="text-blue-700 font-medium">15%</span>
          </div>
        </div>

        <div className="relative pt-4">
          <div className="flex justify-between text-sm font-medium text-gray-500 mb-2">
            <span>Beginner</span>
            <span>Expert</span>
          </div>
          
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
              initial={{ width: 0 }}
              animate={{ width: "15%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              3 of 20 sections completed
            </p>
            <button className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              <FiArrowRight className="ml-1" />
              Complete Profile
            </button>
          </div>
        </div>
      </motion.div>

      {/* Job Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      {/* Job Applied */}
      <motion.div 
        className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-lg border border-blue-100"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-blue-600 mb-1">Job Applied</p>
            <p className="text-3xl font-bold text-gray-800">0</p>
          </div>
          <div className="p-3 bg-blue-100 rounded-lg">
            <FiBriefcase className="w-6 h-6 text-blue-600" />
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2 text-sm text-blue-500">
          <FiArrowUp className="inline" />
          <span>0% from last month</span>
        </div>
      </motion.div>

      {/* Shortlisted */}
      <motion.div 
        className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-lg border border-green-100"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-green-600 mb-1">Shortlisted</p>
            <p className="text-3xl font-bold text-gray-800">0</p>
          </div>
          <div className="p-3 bg-green-100 rounded-lg">
            <FiUsers className="w-6 h-6 text-green-600" />
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2 text-sm text-green-500">
          <FiActivity className="inline" />
          <span>Top 30% applicants</span>
        </div>
      </motion.div>

      {/* Appointed */}
      <motion.div 
        className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl shadow-lg border border-purple-100"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-purple-600 mb-1">Appointed</p>
            <p className="text-3xl font-bold text-gray-800">0</p>
          </div>
          <div className="p-3 bg-purple-100 rounded-lg">
            <FiCheckCircle className="w-6 h-6 text-purple-600" />
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2 text-sm text-purple-500">
          <FiTarget className="inline" />
          <span>3:1 selection ratio</span>
        </div>
      </motion.div>

      {/* Success Ratio */}
      <motion.div 
        className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl shadow-lg border border-amber-100"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-amber-600 mb-1">Success Ratio</p>
            <p className="text-3xl font-bold text-gray-800">0%</p>
          </div>
          <div className="p-3 bg-amber-100 rounded-lg">
            <FiBarChart2 className="w-6 h-6 text-amber-600" />
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2 text-sm text-amber-500">
          <FiTrendingUp className="inline" />
          <span>Industry average: 15%</span>
        </div>
      </motion.div>
    </div>

      {/* Notice Board & Resume Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Notice Board */}
        <motion.div
          className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg border border-blue-100"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-blue-800 flex items-center gap-3">
              <FiBell className="w-6 h-6 text-blue-600" />
              Notice Board
            </h3>
            <span className="text-sm text-blue-500 bg-blue-100 px-3 py-1 rounded-full">
              20 Feb 2024
            </span>
          </div>
          
          <ul className="space-y-5">
            {['Prepare tutoring materials', 'Update availability schedule', 'Complete profile verification'].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ x: 5 }}
              >
                <label className="flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="hidden peer"
                    onChange={(e) => e.target.checked && e.target.parentElement.classList.add('line-through')}
                  />
                  <div className="w-5 h-5 border-2 border-blue-300 rounded-md peer-checked:bg-blue-600 peer-checked:border-blue-600 flex items-center justify-center transition-all">
                    <FiCheck className="text-white text-sm opacity-0 peer-checked:opacity-100" />
                  </div>
                </label>
                <span className="text-gray-700 peer-checked:line-through peer-checked:text-gray-400">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Resume Section */}
        <motion.div
          className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 shadow-lg border border-green-100"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-green-800 flex items-center gap-3">
              <FiFileText className="w-6 h-6 text-green-600" />
              Resume Management
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-sm text-green-500">Last updated: 2d ago</span>
            </div>
          </div>

          <div className="group relative bg-white/90 border-2 border-dashed border-green-200 rounded-xl p-6 text-center transition-all hover:border-green-400">
            <FiUploadCloud className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-2 font-medium">MyResume.pdf</p>
            <label className="cursor-pointer">
              <input type="file" className="hidden" />
              <span className="text-green-600 font-medium hover:text-green-700 flex items-center justify-center gap-2">
                <FiRefreshCw className="text-lg" />
                Update Resume
              </span>
            </label>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-green-600 mb-2">0.0</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">
                Quality Score
              </div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-green-600 mb-2">0%</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">
                Success Rate
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UserDashBoardHome;