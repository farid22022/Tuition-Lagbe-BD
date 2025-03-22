import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  FiFilter, FiSearch, FiHash, FiCalendar, FiChevronRight, 
  FiHome, FiUsers, FiMapPin, FiBook, FiClock, FiBookmark, 
  FiBookOpen, FiUser, FiDollarSign, FiX 
} from "react-icons/fi";

const AdvanceFilterLayout = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

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

  const jobListings = [
    {
      location: "Ultara, Sector -17, Dhaka",
      title: "Female Tutor Needed For Bangla Medium",
      type: "Home Tuition",
      medium: "Bangla Medium",
      days: "4 Days/Week",
      posted: "March 12, 2025",
      class: "Class 7",
      subjects: "All",
      preference: "Female",
      salary: "4,000 TK/Month",
    },
    {
      location: "Banani, Dhaka",
      title: "Math Tutor Needed for Class 9",
      type: "Home Tuition",
      medium: "English Medium",
      days: "5 Days/Week",
      posted: "March 10, 2025",
      class: "Class 9",
      subjects: "Mathematics",
      preference: "Any",
      salary: "5,500 TK/Month",
    },
    {
      location: "Gulshan, Dhaka",
      title: "English Tutor for O Level Students",
      type: "Online Tuition",
      medium: "English Medium",
      days: "3 Days/Week",
      posted: "March 5, 2025",
      class: "O Level",
      subjects: "English",
      preference: "Any",
      salary: "6,000 TK/Month",
    },
    {
      location: "Dhanmondi, Dhaka",
      title: "Science Tutor for Class 10",
      type: "Home Tuition",
      medium: "Bangla Medium",
      days: "3 Days/Week",
      posted: "March 4, 2025",
      class: "Class 10",
      subjects: "Science",
      preference: "Any",
      salary: "6,500 TK/Month",
    },
    {
      location: "Mirpur, Dhaka",
      title: "Computer Science Tutor Needed for A Level",
      type: "Home Tuition",
      medium: "English Medium",
      days: "2 Days/Week",
      posted: "March 1, 2025",
      class: "A Level",
      subjects: "Computer Science",
      preference: "Any",
      salary: "7,000 TK/Month",
    },
    {
      location: "Puran Dhaka",
      title: "Female Tutor Needed for Class 5",
      type: "Home Tuition",
      medium: "Bangla Medium",
      days: "4 Days/Week",
      posted: "February 28, 2025",
      class: "Class 5",
      subjects: "All",
      preference: "Female",
      salary: "3,500 TK/Month",
    },
    {
      location: "Sadarghat, Dhaka",
      title: "Physics Tutor for Class 12",
      type: "Home Tuition",
      medium: "English Medium",
      days: "3 Days/Week",
      posted: "February 25, 2025",
      class: "Class 12",
      subjects: "Physics",
      preference: "Any",
      salary: "8,000 TK/Month",
    },
    {
      location: "Shyamoli, Dhaka",
      title: "Biology Tutor for O Level",
      type: "Online Tuition",
      medium: "English Medium",
      days: "5 Days/Week",
      posted: "February 20, 2025",
      class: "O Level",
      subjects: "Biology",
      preference: "Any",
      salary: "5,500 TK/Month",
    },
    {
      location: "Bashundhara, Dhaka",
      title: "Chemistry Tutor for Class 8",
      type: "Home Tuition",
      medium: "Bangla Medium",
      days: "4 Days/Week",
      posted: "February 18, 2025",
      class: "Class 8",
      subjects: "Chemistry",
      preference: "Any",
      salary: "4,500 TK/Month",
    },
    {
      location: "Rampura, Dhaka",
      title: "Math Tutor for Class 6",
      type: "Online Tuition",
      medium: "Bangla Medium",
      days: "3 Days/Week",
      posted: "February 14, 2025",
      class: "Class 6",
      subjects: "Mathematics",
      preference: "Any",
      salary: "4,000 TK/Month",
    },
    {
      location: "Mohammadpur, Dhaka",
      title: "Economics Tutor for A Level",
      type: "Home Tuition",
      medium: "English Medium",
      days: "2 Days/Week",
      posted: "February 12, 2025",
      class: "A Level",
      subjects: "Economics",
      preference: "Any",
      salary: "7,500 TK/Month",
    },
    {
      location: "Tejgaon, Dhaka",
      title: "History Tutor Needed for Class 11",
      type: "Home Tuition",
      medium: "Bangla Medium",
      days: "5 Days/Week",
      posted: "February 10, 2025",
      class: "Class 11",
      subjects: "History",
      preference: "Any",
      salary: "6,000 TK/Month",
    },
    {
      location: "Savar, Dhaka",
      title: "Geography Tutor for Class 7",
      type: "Home Tuition",
      medium: "English Medium",
      days: "3 Days/Week",
      posted: "February 8, 2025",
      class: "Class 7",
      subjects: "Geography",
      preference: "Any",
      salary: "5,000 TK/Month",
    },
    {
      location: "Khilgaon, Dhaka",
      title: "Female Tutor for Class 10 English Medium",
      type: "Home Tuition",
      medium: "English Medium",
      days: "4 Days/Week",
      posted: "February 6, 2025",
      class: "Class 10",
      subjects: "English",
      preference: "Female",
      salary: "6,200 TK/Month",
    },
    {
      location: "Baridhara, Dhaka",
      title: "Computer Tutor for Class 8",
      type: "Home Tuition",
      medium: "Bangla Medium",
      days: "4 Days/Week",
      posted: "February 4, 2025",
      class: "Class 8",
      subjects: "Computer Science",
      preference: "Any",
      salary: "5,200 TK/Month",
    },
    {
      location: "Kalyanpur, Dhaka",
      title: "Chemistry Tutor for Class 11",
      type: "Home Tuition",
      medium: "English Medium",
      days: "3 Days/Week",
      posted: "February 1, 2025",
      class: "Class 11",
      subjects: "Chemistry",
      preference: "Any",
      salary: "6,500 TK/Month",
    },
    {
      location: "Badda, Dhaka",
      title: "Physics Tutor for O Level",
      type: "Online Tuition",
      medium: "English Medium",
      days: "2 Days/Week",
      posted: "January 30, 2025",
      class: "O Level",
      subjects: "Physics",
      preference: "Any",
      salary: "7,000 TK/Month",
    },
    {
      location: "Bengali Bazar, Dhaka",
      title: "Math Tutor for Class 9",
      type: "Home Tuition",
      medium: "Bangla Medium",
      days: "5 Days/Week",
      posted: "January 28, 2025",
      class: "Class 9",
      subjects: "Mathematics",
      preference: "Any",
      salary: "5,500 TK/Month",
    },
    {
      location: "Moghbazar, Dhaka",
      title: "Female Tutor Needed for O Level",
      type: "Home Tuition",
      medium: "English Medium",
      days: "3 Days/Week",
      posted: "January 26, 2025",
      class: "O Level",
      subjects: "All",
      preference: "Female",
      salary: "6,000 TK/Month",
    },
    {
      location: "Rayer Bazar, Dhaka",
      title: "Bangla Tutor for Class 10",
      type: "Home Tuition",
      medium: "Bangla Medium",
      days: "4 Days/Week",
      posted: "January 24, 2025",
      class: "Class 10",
      subjects: "Bangla",
      preference: "Any",
      salary: "4,800 TK/Month",
    },
    {
      location: "Kazipara, Dhaka",
      title: "English Tutor for Class 6",
      type: "Home Tuition",
      medium: "English Medium",
      days: "4 Days/Week",
      posted: "January 22, 2025",
      class: "Class 6",
      subjects: "English",
      preference: "Any",
      salary: "4,500 TK/Month",
    },
    {
      location: "Mirpur-10, Dhaka",
      title: "Accountancy Tutor for Class 11",
      type: "Online Tuition",
      medium: "Bangla Medium",
      days: "2 Days/Week",
      posted: "January 20, 2025",
      class: "Class 11",
      subjects: "Accountancy",
      preference: "Any",
      salary: "7,000 TK/Month",
    },
    {
      location: "Lalmatia, Dhaka",
      title: "Biology Tutor Needed for A Level",
      type: "Home Tuition",
      medium: "English Medium",
      days: "3 Days/Week",
      posted: "January 18, 2025",
      class: "A Level",
      subjects: "Biology",
      preference: "Any",
      salary: "8,000 TK/Month",
    },
    {
      location: "Mohammadpur, Dhaka",
      title: "Female Chemistry Tutor for Class 8",
      type: "Home Tuition",
      medium: "Bangla Medium",
      days: "5 Days/Week",
      posted: "January 16, 2025",
      class: "Class 8",
      subjects: "Chemistry",
      preference: "Female",
      salary: "5,500 TK/Month",
    },
    {
      location: "Khilgaon, Dhaka",
      title: "Math Tutor for Class 7",
      type: "Online Tuition",
      medium: "English Medium",
      days: "2 Days/Week",
      posted: "January 14, 2025",
      class: "Class 7",
      subjects: "Mathematics",
      preference: "Any",
      salary: "4,000 TK/Month",
    },
    {
      location: "Nikunja, Dhaka",
      title: "Social Science Tutor for Class 9",
      type: "Home Tuition",
      medium: "Bangla Medium",
      days: "3 Days/Week",
      posted: "January 12, 2025",
      class: "Class 9",
      subjects: "Social Science",
      preference: "Any",
      salary: "5,000 TK/Month",
    },
    {
      location: "Shahbagh, Dhaka",
      title: "Female Physics Tutor for Class 11",
      type: "Home Tuition",
      medium: "Bangla Medium",
      days: "4 Days/Week",
      posted: "January 10, 2025",
      class: "Class 11",
      subjects: "Physics",
      preference: "Female",
      salary: "6,000 TK/Month",
    },
    {
      location: "Kamarpara, Dhaka",
      title: "Female English Tutor for Class 6",
      type: "Home Tuition",
      medium: "English Medium",
      days: "3 Days/Week",
      posted: "January 8, 2025",
      class: "Class 6",
      subjects: "English",
      preference: "Female",
      salary: "5,200 TK/Month",
    },
  ];

  return (
    <div className="pt-20 flex flex-col md:flex-row bg-[#FBFFE6] min-h-screen relative">
      {/* Mobile Filter Toggle */}
      {isMobile && (
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="md:hidden fixed top-20 left-4 z-50 p-3 bg-white rounded-lg shadow-lg"
        >
          {isSidebarOpen ? (
            <FiX className="text-emerald-600 text-xl" />
          ) : (
            <FiFilter className="text-emerald-600 text-xl" />
          )}
        </button>
      )}

      {/* Mobile Overlay */}
      {isMobile && isSidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <motion.div
        className={`w-full md:w-72 lg:w-80 bg-white/95 backdrop-blur-lg fixed md:sticky md:top-0 h-screen z-50 shadow-xl border-r border-gray-100 ${
          isMobile ? "left-0 top-0" : ""
        }`}
        initial={{ x: isMobile ? "-100%" : 0 }}
        animate={{ 
          x: isSidebarOpen ? 0 : "-100%",
          transition: { type: 'tween', duration: 0.3 }
        }}
      >
        <div className="h-full overflow-y-auto p-6">
          <div className="flex justify-end mb-4 md:hidden">
            <FiX
              className="text-gray-500 cursor-pointer hover:text-gray-700"
              onClick={() => setIsSidebarOpen(false)}
            />
          </div>

          {/* Filter Content */}
          <h1 className="text-2xl font-bold mb-6 flex items-center gap-2 bg-gradient-to-r from-lime-600 to-purple-600 bg-clip-text text-transparent">
            <FiFilter className="text-xl text-lime-600" />
            Advance Filter
          </h1>

          <div className="space-y-8">
            {/* Search By Job ID */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-semibold mb-3 flex items-center gap-2 text-gray-700">
                <FiSearch className="text-gray-500" />
                Search By Job ID
              </h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter job id here..."
                  className="w-full p-2 pl-8 border rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                />
                <FiHash className="absolute left-2 top-3 text-gray-400" />
              </div>
            </motion.div>

            {/* Date Filter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="font-semibold mb-3 flex items-center gap-2 text-gray-700">
                <FiCalendar className="text-gray-500" />
                Search By Date
              </h2>
              <div className="space-y-2">
                {["06—7777", "07—7777"].map((date, index) => (
                  <motion.div
                    key={date}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md cursor-pointer"
                  ><h>{index}</h>
                    <FiChevronRight className="text-lime-500" />
                    <span className="text-gray-600">{date}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tuition Type Filter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="font-semibold mb-3 flex items-center gap-2 text-gray-700">
                <FiHome className="text-gray-500" />
                Tuition Type
              </h2>
              <div className="space-y-2">
                {["All Tuition", "Home Tuition", "Online Tuition"].map((type) => (
                  <motion.label
                    key={type}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-md cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-lime-600 border-gray-300 rounded focus:ring-lime-500"
                    />
                    <span className="text-gray-600">{type}</span>
                  </motion.label>
                ))}
              </div>
            </motion.div>

            {/* Tutor Preferences */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="font-semibold mb-3 flex items-center gap-2 text-gray-700">
                <FiUsers className="text-gray-500" />
                Tutor Preferences
              </h2>
              <div className="space-y-2">
                {["All", "Male", "Female"].map((pref) => (
                  <motion.label
                    key={pref}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-md cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="preference"
                      className="w-4 h-4 text-lime-600 border-gray-300 rounded-full focus:ring-lime-500"
                    />
                    <span className="text-gray-600">{pref}</span>
                  </motion.label>
                ))}
              </div>
            </motion.div>

            {/* District Filter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="font-semibold mb-3 flex items-center gap-2 text-gray-700">
                <FiMapPin className="text-gray-500" />
                Select District
              </h2>
              <div className="space-y-2">
                {["All", "Dhaka", "Chittagong", "Rajshahi"].map((district) => (
                  <motion.label
                    key={district}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-md cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-lime-600 border-gray-300 rounded focus:ring-lime-500"
                    />
                    <span className="text-gray-600">{district}</span>
                  </motion.label>
                ))}
              </div>
            </motion.div>

            {/* Medium Filter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <h2 className="font-semibold mb-3 flex items-center gap-2 text-gray-700">
                <FiBook className="text-gray-500" />
                Select Medium
              </h2>
              <div className="space-y-2">
                {["All", "Bangla Medium", "English Version", "Madrasa"].map(
                  (medium) => (
                    <motion.label
                      key={medium}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-md cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-lime-600 border-gray-300 rounded focus:ring-lime-500"
                      />
                      <span className="text-gray-600">{medium}</span>
                    </motion.label>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3">
          {jobListings.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              {/* Job Card Content (same as before) */}
              {/* ... */}
               <div className={`px-6 py-4 rounded-t-xl ${
                                job.type === "Home Tuition" ? "bg-emerald-600" : 
                                job.type === "Online Tuition" ? "bg-green-600" : "bg-teal-600"
                              }`}>
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
                                  <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                      <div className="p-2 bg-emerald-50 rounded-lg">
                                        <FiBook className="text-emerald-600 h-6 w-6" />
                                      </div>
                                      <div>
                                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Medium</p>
                                        <p className="text-base text-gray-900 font-medium">{job.medium}</p>
                                      </div>
                                    </div>
              
                                    <div className="flex items-start gap-4">
                                      <div className="p-2 bg-amber-50 rounded-lg">
                                        <FiClock className="text-amber-600 h-6 w-6" />
                                      </div>
                                      <div>
                                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Days/Week</p>
                                        <p className="text-base text-gray-900 font-medium">{job.days}</p>
                                      </div>
                                    </div>
                                  </div>
              
                                  <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                      <div className="p-2 bg-purple-50 rounded-lg">
                                        <FiBookmark className="text-purple-600 h-6 w-6" />
                                      </div>
                                      <div>
                                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Class</p>
                                        <p className="text-base text-gray-900 font-medium">{job.class}</p>
                                      </div>
                                    </div>
              
                                    <div className="flex items-start gap-4">
                                      <div className="p-2 bg-rose-50 rounded-lg">
                                        <FiDollarSign className="text-rose-600 h-6 w-6" />
                                      </div>
                                      <div>
                                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Salary</p>
                                        <p className="text-base text-gray-900 font-medium">{job.salary}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
              
                                <div className="border-t pt-6 flex flex-col xs:flex-row justify-between items-start xs:items-center gap-4">
                                  <div className="space-y-1">
                                    <p className="text-sm text-gray-500">
                                      Posted: <span className="font-medium text-gray-700">{job.posted}</span>
                                    </p>
                                    <p className="text-sm font-medium text-emerald-600">
                                      <span className="text-gray-600">Preference:</span> {job.preference}
                                    </p>
                                  </div>
                                  <button
                                    onClick={() => navigate("/job-posting", { state: { job } })}
                                    className="w-full xs:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-[1.02] shadow-sm hover:shadow-emerald-200"
                                  >
                                    Apply Now
                                  </button>
                                </div>
                              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvanceFilterLayout;