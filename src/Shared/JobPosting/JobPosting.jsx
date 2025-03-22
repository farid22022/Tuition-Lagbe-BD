import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiMapPin, FiBook, FiUsers, FiCalendar, FiDollarSign, FiCheckCircle } from 'react-icons/fi';

const JobPosting = () => {
  const { state } = useLocation();
  const job = state?.job;
  const navigate = useNavigate();

  // Handle missing job state
  if (!job) {
    return (
      <motion.div 
        className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50 p-8 font-sans"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div 
          className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="text-center space-y-6">
            <div className="text-emerald-600 text-6xl mb-4 flex justify-center">
              <FiBook className="text-emerald-500" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">No Job Selected</h2>
            <motion.button 
              onClick={() => navigate(-1)}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium transition-all flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiArrowLeft className="text-lg" />
              Return to Job Listings
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  // Safely handle subjects data
  const subjects = Array.isArray(job.subjects) 
    ? job.subjects 
    : typeof job.subjects === 'string'
    ? job.subjects.split(',') 
    : [];

  // Job details with fallback values
  const jobDetails = [
    { icon: FiMapPin, label: "Location", value: job.location || 'Not specified' },
    { icon: FiBook, label: "Medium", value: job.medium || 'Not specified' },
    { icon: FiUsers, label: "Class", value: job.class || 'Not specified' },
    { icon: FiCheckCircle, label: "Preference", value: job.preference || 'Not specified' },
    { icon: FiCalendar, label: "Days/Week", value: job.days || 'Not specified' },
    { icon: FiDollarSign, label: "Salary", value: job.salary || 'Not specified' },
  ];

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50 p-8 font-sans"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Job Header Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-8">
          <motion.button
            onClick={() => navigate(-1)}
            className="mb-6 flex items-center gap-2 text-emerald-100 hover:text-white transition-colors"
            whileHover={{ x: -5 }}
          >
            <FiArrowLeft className="text-lg" />
            <span className="font-medium">Back to Jobs</span>
          </motion.button>
          
          <motion.h1 
            className="text-3xl font-bold mb-2"
            initial={{ x: -30 }}
            animate={{ x: 0 }}
          >
            {job.title || 'Untitled Job Posting'}
          </motion.h1>
          <div className="flex items-center gap-4 text-emerald-100">
            <span className="text-sm">Job ID: #{job.id || 'N/A'}</span>
            <span className="text-sm">•</span>
            <span className="text-sm">Posted: {job.posted || 'Date not available'}</span>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="p-8">
          {/* Job Details Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {jobDetails.map((detail, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-4 bg-emerald-50 rounded-xl"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="p-2 bg-white rounded-lg shadow-sm text-emerald-600">
                  <detail.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-slate-600 mb-1">{detail.label}</h3>
                  <p className="text-lg font-semibold text-slate-800">{detail.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Subjects Section */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Subjects</h3>
            <div className="flex flex-wrap gap-2">
              {subjects.length > 0 ? (
                subjects.map((subject, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium"
                  >
                    {subject.trim()}
                  </span>
                ))
              ) : (
                <span className="text-gray-500">No subjects specified</span>
              )}
            </div>
          </motion.div>

          {/* Requirements Section */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Requirements</h3>
            <div className="prose text-slate-700">
              {job.requirements || 'No specific requirements listed'}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-between border-t pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              onClick={() => navigate(-1)}
              className="px-6 py-3 text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-2"
              whileHover={{ x: -5 }}
            >
              <FiArrowLeft className="text-lg" />
              Browse Other Jobs
            </motion.button>
            
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white rounded-xl font-semibold transition-all flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiCheckCircle className="text-lg" />
              Apply Now
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default JobPosting;