

import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiMapPin, FiStar, FiDollarSign, FiFilter, FiSearch, FiUsers, FiHome, FiGlobe, FiBookOpen, FiX, FiAward, FiBriefcase } from 'react-icons/fi';
import useAxiosPublic from './../../Hooks/useAxiosPublic';
import { AuthContext } from './../../providers/AuthProvider';

const TutorList = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    search: '',
    location: '',
    subjects: '',
    educationLevel: [],
    experience: '',
    tutorStatus: 'All Tutors',
  });
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchTutors = async () => {
      setLoading(true);
      try {
        const params = {};
        if (filters.location) params.location = filters.location;
        if (filters.subjects) params.subjects = filters.subjects;

        const response = await axiosPublic.get('/tutors/', { params });
        
        // Data normalization and validation
        const normalizedTutors = response.data.map(tutor => ({
          id: tutor.id || 'unknown-id',
          name: tutor.first_name || 'Unnamed Tutor',
          image: tutor.image || '/default-avatar.png',
          university: tutor.university || 'Education not specified',
          location: tutor.location || 'Location not specified',
          experience: tutor.experience || 'Experience not specified',
          rate: tutor.rate || 'Rate not specified',
          rating: Math.min(Math.max(tutor.rating || 0, 0), 5),
          subjects: Array.isArray(tutor.subjects) 
            ? tutor.subjects.filter(Boolean) 
            : [],
          educationLevel: Array.isArray(tutor.educationLevel)
            ? tutor.educationLevel.filter(Boolean)
            : [],
        }));

        setTutors(normalizedTutors);
        setError(null);
      } catch (err) {
        setError(err.response?.data?.error || 'Failed to fetch tutors');
        setTutors([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTutors();
  }, [filters.location, filters.subjects, axiosPublic]);

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters(prev => {
      if (type === 'checkbox') {
        const updatedLevels = checked
          ? [...prev.educationLevel, value]
          : prev.educationLevel.filter(level => level !== value);
        return { ...prev, educationLevel: updatedLevels };
      }
      return { ...prev, [name]: value };
    });
  };

  const handleSearch = (e) => {
    setFilters(prev => ({ ...prev, search: e.target.value }));
  };

  const filterTutors = (tutor) => {
    const searchLower = filters.search.toLowerCase();
    const nameMatch = tutor.name?.toLowerCase().includes(searchLower);
    const subjectMatch = (tutor.subjects || [])
      .some(subject => subject?.toLowerCase().includes(searchLower));
    
    return filters.search === '' || nameMatch || subjectMatch;
  };

  return (
    <div className="mt-20 flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50/30 font-sans relative">
      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed top-6 left-6 z-50 p-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
      >
        {isSidebarOpen ? 
          <FiX className="text-emerald-600 w-6 h-6" /> : 
          <FiFilter className="text-emerald-600 w-6 h-6" />
        }
      </button>

      {/* Filters Sidebar */}
      <motion.div 
        className={`sticky w-full md:w-80 bg-white/95 backdrop-blur-xl md:sticky top-0 h-screen shadow-2xl p-8 border-r border-emerald-100 z-40 transform transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
          <FiFilter className="text-emerald-600" />
          Refine Search
        </h2>
        
        <div className="space-y-8">
          <div className="relative">
            <input 
              type="text" 
              name="search"
              value={filters.search}
              onChange={handleSearch}
              placeholder="Search tutors..." 
              className="w-full px-4 py-3 text-base border-2 border-emerald-100 rounded-xl focus:border-emerald-500 bg-white focus:ring-2 focus:ring-emerald-100 transition-all"
            />
            <FiSearch className="absolute right-4 top-4 text-emerald-400" />
          </div>

          {[
            { 
              title: "Tutor Status", 
              icon: FiAward,
              options: ['All Tutors', 'Verified Only', 'Premium Tutors'],
              type: 'radio',
              name: 'tutorStatus'
            },
            {
              title: "Location Preferences",
              icon: FiMapPin,
              content: (
                <div className="space-y-4">
                  <select 
                    name="location"
                    value={filters.location}
                    onChange={handleFilterChange}
                    className="w-full px-4 py-3 border-2 border-emerald-100 rounded-xl text-slate-700 focus:border-emerald-500 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSI2IiB2aWV3Qm94PSIwIDAgMjQgNiI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTIgNi41TDYuNzEgMS4yMSA1LjI5IDIuNjMgMTIgOS41bDYuNzEtNC44NkwxOC43MSAxLjIxIDEyIDYuNVoiLz48L3N2Zz4=')] bg-no-repeat bg-[right_1rem_center] bg-[length:1.5rem]"
                  >
                    <option value="">Select District</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Khulna">Khulna</option>
                  </select>
                </div>
              )
            },
            {
              title: "Education Level",
              icon: FiBookOpen,
              content: (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    {['Primary', 'Secondary', 'College', 'University'].map((level) => (
                      <label key={level} className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg border-2 border-emerald-100 has-[:checked]:border-emerald-500 has-[:checked]:bg-emerald-500/5 cursor-pointer">
                        <input 
                          type="checkbox" 
                          name="educationLevel"
                          value={level}
                          checked={filters.educationLevel.includes(level)}
                          onChange={handleFilterChange}
                          className="checkbox checkbox-sm border-2 border-emerald-300 checked:border-emerald-500 checked:bg-emerald-500" 
                        />
                        <span className="text-sm font-medium text-slate-700">{level}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )
            },
            {
              title: "Experience Level",
              icon: FiBriefcase,
              content: (
                <div className="space-y-3">
                  {['1-3 Years', '4-6 Years', '7+ Years'].map((exp) => (
                    <label key={exp} className="flex items-center gap-3 p-3 hover:bg-emerald-50 rounded-lg cursor-pointer">
                      <input 
                        type="radio" 
                        name="experience"
                        value={exp}
                        checked={filters.experience === exp}
                        onChange={handleFilterChange}
                        className="radio radio-sm border-2 border-emerald-300 checked:border-emerald-500 checked:bg-emerald-500" 
                      />
                      <span className="text-sm text-slate-700">{exp}</span>
                    </label>
                  ))}
                </div>
              )
            }
          ].map((section, idx) => (
            <div key={idx} className="space-y-5">
              <h3 className="text-base font-semibold text-slate-800 flex items-center gap-3">
                <section.icon className="text-emerald-600 w-5 h-5 flex-shrink-0" />
                {section.title}
              </h3>
              {section.content || (
                <div className="space-y-3">
                  {section.options?.map(option => (
                    <label key={option} className="flex items-center gap-3 p-3 hover:bg-emerald-50 rounded-lg cursor-pointer">
                      <input 
                        type={section.type} 
                        name={section.name}
                        value={option}
                        checked={filters[section.name] === option}
                        onChange={handleFilterChange}
                        className={`${section.type} ${section.type}-sm border-2 border-emerald-300 checked:border-emerald-500 checked:bg-emerald-500`}
                      />
                      <span className="text-sm text-slate-700">{option}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Main Content Area */}
      <div className="flex-1 p-6 md:p-8">
        {/* Content Header */}
        <div className="mb-8 bg-white rounded-2xl shadow-sm p-6 border border-emerald-100">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-800 mb-2">Find Qualified Tutors</h1>
              <p className="text-slate-600">Showing {tutors.filter(filterTutors).length} verified tutors in your area</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-600">Sort by:</span>
              <select 
                name="sort"
                onChange={handleFilterChange}
                className="px-4 py-2 border-2 border-emerald-100 rounded-xl bg-white text-slate-700 focus:border-emerald-500"
              >
                <option value="relevance">Relevance</option>
                <option value="rating">Rating</option>
                <option value="experience">Experience</option>
              </select>
            </div>
          </div>
        </div>

        {/* Loading and Error States */}
        {loading && (
          <div className="text-center text-slate-600">Loading tutors...</div>
        )}
        {error && (
          <div className="text-center text-red-500">{error}</div>
        )}

        {/* Tutor Cards Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutors.filter(filterTutors).map((tutor) => (
              <motion.div
                key={tutor.id}
                whileHover={{ y: -5 }}
                className="group relative bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all border border-emerald-100 overflow-hidden"
              >
                {tutor.rating >= 4.8 && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-400 to-amber-500 text-white px-4 py-1 text-xs font-bold uppercase tracking-wide transform translate-x-2 translate-y-3 rotate-45 shadow-md">
                    <FiStar className="inline mr-2 -mt-1" />
                    Premium
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-100 to-green-100 p-1 shadow-inner">
                        <img 
                          src={tutor.image} 
                          alt={tutor.first_name} 
                          className="w-full h-full rounded-xl object-cover border-2 border-white"
                          onError={(e) => {
                            e.target.src = '/default-avatar.png';
                          }}
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1 shadow-md">
                        <FiStar className="text-amber-300" />
                        {tutor.rating.toFixed(1)}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-800">{tutor.name}</h3>
                      <p className="text-sm text-emerald-600 mt-1 flex items-center gap-2">
                        <FiBook className="flex-shrink-0" />
                        <span className="line-clamp-1">{tutor.university}</span>
                      </p>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-slate-600 bg-emerald-50 px-3 py-1 rounded-full">
                        <FiMapPin className="text-emerald-500" />
                        {tutor.location}
                      </span>
                      <span className="text-slate-600">
                        <FiBriefcase className="inline mr-1 text-emerald-500" />
                        {tutor.experience}
                      </span>
                    </div>

                    <div className="border-t border-emerald-100 pt-5">
                      <div className="mb-4">
                        <h4 className="text-xs font-semibold text-slate-500 uppercase mb-2">Subjects</h4>
                        <div className="flex flex-wrap gap-2">
                          {tutor.subjects.map((subject, idx) => (
                            <span 
                              key={`${tutor.id}-${subject}-${idx}`}
                              className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full font-medium border border-emerald-100"
                            >
                              {subject}
                            </span>
                          ))}
                          {tutor.subjects.length === 0 && (
                            <span className="text-slate-400 text-xs">No subjects listed</span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-slate-500 mb-1">Hourly Rate</p>
                          <p className="text-lg font-bold text-emerald-600">
                            <FiDollarSign className="inline mr-1 -mt-1" />
                            {tutor.rate}
                          </p>
                        </div>
                        <button className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-xl text-sm font-semibold hover:from-emerald-600 hover:to-green-600 transition-all flex items-center gap-2 shadow-sm hover:shadow-md">
                          View Profile
                          <FiGlobe className="text-white/90" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TutorList;