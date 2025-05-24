

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  FiFilter, FiSearch, FiHash, FiCalendar, FiChevronRight, 
  FiHome, FiUsers, FiMapPin, FiBook, FiClock, FiBookmark, 
  FiBookOpen, FiUser, FiDollarSign, FiX 
} from "react-icons/fi";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const AdvanceFilterLayout = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [jobListings, setJobListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    job_id: '',
    date: '',
    tuition_type: [],
    tutor_preference: '',
    location: [],
    medium: []
  });

  // Animation variants
  const sidebarVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: "-100%", opacity: 0 }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };

  const filterItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, type: "spring", stiffness: 200 }
    })
  };

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setIsSidebarOpen(!mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const fetchJobListings = useCallback(async () => {
    setLoading(true);
    try {
      const params = {};
      if (filters.job_id) params.job_id = filters.job_id;
      if (filters.tuition_type.length) params.tuition_type = filters.tuition_type[0];
      if (filters.tutor_preference) params.tutor_preference = filters.tutor_preference;
      if (filters.location.length) params.location = filters.location[0];
      if (filters.medium.length) params.medium = filters.medium[0];

      const response = await axiosPublic.get('/job-postings/', { params });
      console.log(response.data);
      
      // Normalize data
      const normalizedJobs = response.data.map(job => ({
        id: job.id || `job-${Math.random().toString(36).substr(2, 9)}`,
        location: job.location || 'Location not specified',
        title: job.title || 'Untitled Job',
        type: job.type || 'Home Tuition',
        medium: job.medium || 'Bangla Medium',
        days: job.days || 'Not specified',
        posted: job.created_at ? job.created_at.split('T')[0] : new Date().toISOString().split('T')[0],
        class: job.student_class || 'Not specified',
        subjects: job.subjects || 'Not specified',
        preference: job.preference || 'Any',
        salary: job.salary || 'Not specified'
      }));

      setJobListings(normalizedJobs);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch job postings');
      setJobListings([]);
    } finally {
      setLoading(false);
    }
  }, [filters]); // Dependency on filters

  useEffect(() => {
    fetchJobListings();
  }, [fetchJobListings]); // Dependency on fetchJobListings only

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters(prev => {
      if (type === 'checkbox') {
        const updatedValues = checked
          ? [...prev[name], value]
          : prev[name].filter(v => v !== value);
        return { ...prev, [name]: updatedValues };
      }
      if (type === 'radio') {
        return { ...prev, [name]: value };
      }
      return { ...prev, [name]: value };
    });
  };

  const filterByDate = (job) => {
    if (!filters.date) return true;
    return job.posted.includes(filters.date);
  };

  return (
    <div className="pt-20 flex flex-col md:flex-row bg-[#f8fafc] min-h-screen relative">
      {/* Mobile Filter Toggle */}
      {isMobile && (
        <motion.button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="md:hidden fixed top-24 left-4 z-50 p-3 bg-white rounded-xl shadow-2xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isSidebarOpen ? (
            <FiX className="text-emerald-600 text-xl" />
          ) : (
            <FiFilter className="text-emerald-600 text-xl" />
          )}
        </motion.button>
      )}

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobile && isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 z-40 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        className={`w-full md:w-80 lg:w-96 bg-white/95 backdrop-blur-lg fixed md:sticky md:top-0 h-screen z-50 shadow-2xl border-r border-gray-200 ${
          isMobile ? "left-0 top-0" : ""
        }`}
        variants={sidebarVariants}
        initial="closed"
        animate={isSidebarOpen ? "open" : "closed"}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="h-full overflow-y-auto p-6">
          <div className="flex justify-end mb-4 md:hidden">
            <FiX
              className="text-gray-500 cursor-pointer hover:text-gray-700"
              onClick={() => setIsSidebarOpen(false)}
            />
          </div>

          {/* Filter Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
          >
            <h1 className="text-2xl font-bold mb-6 flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
              <FiFilter className="text-emerald-600 text-2xl" />
              Advanced Filters
            </h1>

            {/* Search By Job ID */}
            <motion.div
              variants={filterItemVariants}
              custom={0}
              className="space-y-4"
            >
              <h2 className="font-semibold mb-3 flex items-center gap-2 text-gray-700">
                <FiSearch className="text-gray-500" />
                Search By Job ID
              </h2>
              <div className="relative">
                <input
                  type="text"
                  name="job_id"
                  value={filters.job_id}
                  onChange={handleFilterChange}
                  placeholder="Enter job id here..."
                  className="w-full p-3 pl-10 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                />
                <FiHash className="absolute left-3 top-4 text-gray-400" />
              </div>
            </motion.div>

            {/* Date Filter */}
            <motion.div
              variants={filterItemVariants}
              custom={1}
              className="space-y-4"
            >
              <h2 className="font-semibold mb-3 flex items-center gap-2 text-gray-700">
                <FiCalendar className="text-gray-500" />
                Search By Date
              </h2>
              <div className="space-y-2">
                {["2025-03", "2025-04"].map((date, index) => (
                  <motion.div
                    key={date}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                    onClick={() => setFilters(prev => ({ ...prev, date }))}
                  >
                    <FiChevronRight className="text-emerald-500" />
                    <span className="text-gray-600">{date}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Other Filters */}
            {[
              {
                title: "Tuition Type",
                icon: FiHome,
                options: ["All Tuition", "Home Tuition", "Online Tuition"],
                name: "tuition_type"
              },
              {
                title: "Tutor Preferences",
                icon: FiUsers,
                options: ["All", "Male", "Female"],
                name: "tutor_preference",
                type: "radio"
              },
              {
                title: "Select District",
                icon: FiMapPin,
                options: ["All", "Dhaka", "Chittagong", "Rajshahi"],
                name: "location"
              },
              {
                title: "Select Medium",
                icon: FiBook,
                options: ["All", "Bangla Medium", "English Version", "Madrasa"],
                name: "medium"
              }
            ].map((section, i) => (
              <motion.div
                key={section.title}
                variants={filterItemVariants}
                custom={i + 2}
                className="space-y-4"
              >
                <h2 className="font-semibold mb-3 flex items-center gap-2 text-gray-700">
                  <section.icon className="text-gray-500" />
                  {section.title}
                </h2>
                <div className="space-y-2">
                  {section.options.map((option) => (
                    <motion.label
                      key={option}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                    >
                      <input
                        type={section.type || "checkbox"}
                        name={section.name}
                        value={option === "All" ? "" : option}
                        checked={
                          section.type === "radio"
                            ? filters[section.name] === (option === "All" ? "" : option)
                            : filters[section.name].includes(option === "All" ? "" : option)
                        }
                        onChange={handleFilterChange}
                        className="w-4 h-4 text-emerald-600 border-2 border-gray-300 rounded focus:ring-emerald-500"
                      />
                      <span className="text-gray-600">{option}</span>
                    </motion.label>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8">
        {/* Loading and Error States */}
        {loading && (
          <div className="text-center text-gray-600">Loading job postings...</div>
        )}
        {error && (
          <div className="text-center text-red-500">{error}</div>
        )}

        {/* Job Cards */}
        {!loading && !error && (
          <motion.div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {jobListings
              .filter(filterByDate)
              .map((job, index) => (
                <motion.div
                  key={job.id}
                  variants={cardVariants}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden"
                  whileHover={{ y: -5 }}
                >
                  {/* Job Card Header */}
                  <div className={`px-6 py-4 ${job.type === "Home Tuition" ? "bg-emerald-600" : "bg-green-600"}`}>
                    <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center gap-2">
                      <div className="flex items-center gap-3">
                        <FiMapPin className="text-white h-5 w-5 flex-shrink-0" />
                        <span className="text-white font-medium text-sm line-clamp-1">
                          {job.location}
                        </span>
                      </div>
                      <span className="text-xs font-medium text-emerald-100 bg-white/10 px-3 py-1.5 rounded-full">
                        {job.type}
                      </span>
                    </div>
                  </div>

                  {/* Job Card Body */}
                  <div className="p-6 space-y-6">
                    <h4 className="text-xl font-semibold text-gray-900 line-clamp-2 leading-snug">
                      {job.title}
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Left Column */}
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="p-2 bg-emerald-50 rounded-lg">
                            <FiBook className="text-emerald-600 h-6 w-6" />
                          </div>
                          <div>
                            <p className="text-xs font-medium text-gray-500 uppercase">Medium</p>
                            <p className="text-base text-gray-900 font-medium">{job.medium}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="p-2 bg-amber-50 rounded-lg">
                            <FiClock className="text-amber-600 h-6 w-6" />
                          </div>
                          <div>
                            <p className="text-xs font-medium text-gray-500 uppercase">Days/Week</p>
                            <p className="text-base text-gray-900 font-medium">{job.days}</p>
                          </div>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="p-2 bg-purple-50 rounded-lg">
                            <FiBookmark className="text-purple-600 h-6 w-6" />
                          </div>
                          <div>
                            <p className="text-xs font-medium text-gray-500 uppercase">Class</p>
                            <p className="text-base text-gray-900 font-medium">{job.class}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="p-2 bg-rose-50 rounded-lg">
                            <FiDollarSign className="text-rose-600 h-6 w-6" />
                          </div>
                          <div>
                            <p className="text-xs font-medium text-gray-500 uppercase">Salary</p>
                            <p className="text-base text-gray-900 font-medium">{job.salary}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="border-t pt-6 flex flex-col xs:flex-row justify-between items-start xs:items-center gap-4">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500">
                          Posted: <span className="font-medium text-gray-700">{job.posted}</span>
                        </p>
                        <p className="text-sm font-medium text-emerald-600">
                          <span className="text-gray-600">Preference:</span> {job.preference}
                        </p>
                      </div>
                      <motion.button
                        onClick={() => navigate("/job-posting", { state: { job } })}
                        className="w-full xs:w-auto px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-500 text-white rounded-xl font-medium transition-all duration-300 flex items-center gap-2 hover:gap-3"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Apply Now
                        <FiChevronRight className="text-lg" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AdvanceFilterLayout;