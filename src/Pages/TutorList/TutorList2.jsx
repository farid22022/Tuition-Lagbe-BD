import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiMapPin, FiStar, FiDollarSign, FiFilter, FiSearch, FiUsers, FiHome, FiGlobe, FiBookOpen, FiX, FiAward, FiBriefcase } from 'react-icons/fi';

const TutorList = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
    const tutors = [
      {
        id: 1,
        name: "Tanzim Tahsin Esha",
        university: "Khulna University (KU)",
        location: "Khulna",
        subjects: ["Mathematics", "Physics"],
        rating: 4.9,
        experience: "5 years",
        rate: "500 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 2,
        name: "Dr. Emily Johnson",
        university: "Dhaka University (DU)",
        location: "Dhaka",
        subjects: ["Biology", "Chemistry"],
        rating: 4.8,
        experience: "8 years",
        rate: "600 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 3,
        name: "Alif Hassan",
        university: "Khulna University (KU)",
        location: "Khulna",
        subjects: ["Mathematics", "Computer Science"],
        rating: 4.7,
        experience: "4 years",
        rate: "450 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 4,
        name: "Sumaiya Islam",
        university: "North South University (NSU)",
        location: "Dhaka",
        subjects: ["English", "Literature"],
        rating: 4.6,
        experience: "6 years",
        rate: "550 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 5,
        name: "Ahsan Mahmud",
        university: "BRAC University",
        location: "Dhaka",
        subjects: ["Physics", "Chemistry"],
        rating: 4.9,
        experience: "7 years",
        rate: "700 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 6,
        name: "Fahim Riaz",
        university: "University of Science & Technology (UST)",
        location: "Chittagong",
        subjects: ["Mathematics", "Statistics"],
        rating: 4.5,
        experience: "3 years",
        rate: "400 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 7,
        name: "Amina Akter",
        university: "Bangladesh University of Engineering and Technology (BUET)",
        location: "Dhaka",
        subjects: ["Mathematics", "Economics"],
        rating: 4.8,
        experience: "9 years",
        rate: "750 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 8,
        name: "Sabbir Hossain",
        university: "Dhaka University (DU)",
        location: "Dhaka",
        subjects: ["Chemistry", "Biochemistry"],
        rating: 4.7,
        experience: "5 years",
        rate: "600 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 9,
        name: "Rana Islam",
        university: "Jahangirnagar University",
        location: "Savar",
        subjects: ["Mathematics", "Statistics"],
        rating: 4.6,
        experience: "6 years",
        rate: "550 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 10,
        name: "Shanta Hossain",
        university: "Khulna University (KU)",
        location: "Khulna",
        subjects: ["English", "History"],
        rating: 4.9,
        experience: "5 years",
        rate: "500 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 11,
        name: "Mokha Binte Shams",
        university: "University of Dhaka",
        location: "Dhaka",
        subjects: ["Psychology", "Philosophy"],
        rating: 4.8,
        experience: "4 years",
        rate: "600 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 12,
        name: "Sakib Ali",
        university: "University of Chittagong",
        location: "Chittagong",
        subjects: ["Physics", "Engineering Mechanics"],
        rating: 4.7,
        experience: "6 years",
        rate: "650 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 13,
        name: "Laili Akter",
        university: "Jahangirnagar University",
        location: "Savar",
        subjects: ["Political Science", "Sociology"],
        rating: 4.8,
        experience: "3 years",
        rate: "550 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 14,
        name: "Ishraq Alam",
        university: "Bangladesh University of Engineering and Technology (BUET)",
        location: "Dhaka",
        subjects: ["Mathematics", "Engineering"],
        rating: 5.0,
        experience: "10 years",
        rate: "800 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 15,
        name: "Shamima Sultana",
        university: "Rajshahi University",
        location: "Rajshahi",
        subjects: ["Bangla", "Literature"],
        rating: 4.7,
        experience: "5 years",
        rate: "500 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 16,
        name: "Ahmed Zaman",
        university: "Khulna University of Engineering and Technology (KUET)",
        location: "Khulna",
        subjects: ["Mathematics", "Electrical Engineering"],
        rating: 4.8,
        experience: "6 years",
        rate: "700 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 17,
        name: "Fatima Rashid",
        university: "University of Dhaka",
        location: "Dhaka",
        subjects: ["Economics", "Business Studies"],
        rating: 4.6,
        experience: "4 years",
        rate: "600 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 18,
        name: "Samiul Hassan",
        university: "BRAC University",
        location: "Dhaka",
        subjects: ["Statistics", "Data Science"],
        rating: 4.9,
        experience: "7 years",
        rate: "650 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 19,
        name: "Sharmin Akter",
        university: "North South University (NSU)",
        location: "Dhaka",
        subjects: ["English", "Language Arts"],
        rating: 4.7,
        experience: "6 years",
        rate: "550 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 20,
        name: "Sultan Mahmud",
        university: "University of Chittagong",
        location: "Chittagong",
        subjects: ["Computer Science", "Programming"],
        rating: 4.8,
        experience: "8 years",
        rate: "750 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 21,
        name: "Ayesha Nasrin",
        university: "Rajshahi University",
        location: "Rajshahi",
        subjects: ["Psychology", "Social Work"],
        rating: 4.7,
        experience: "5 years",
        rate: "600 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 22,
        name: "Habibur Rahman",
        university: "Shahjalal University of Science and Technology (SUST)",
        location: "Sylhet",
        subjects: ["Mathematics", "Engineering"],
        rating: 4.9,
        experience: "9 years",
        rate: "800 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 23,
        name: "Rifat Hasan",
        university: "Dhaka University (DU)",
        location: "Dhaka",
        subjects: ["Bangla", "History"],
        rating: 4.6,
        experience: "4 years",
        rate: "550 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 24,
        name: "Mushfika Binte Zahir",
        university: "Khulna University (KU)",
        location: "Khulna",
        subjects: ["Statistics", "Mathematics"],
        rating: 4.8,
        experience: "5 years",
        rate: "650 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 25,
        name: "Ratul Islam",
        university: "Chittagong University",
        location: "Chittagong",
        subjects: ["Computer Science", "Mathematics"],
        rating: 4.7,
        experience: "7 years",
        rate: "700 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 26,
        name: "Sadia Sultana",
        university: "BRAC University",
        location: "Dhaka",
        subjects: ["English", "Sociology"],
        rating: 4.9,
        experience: "6 years",
        rate: "650 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 27,
        name: "Tariq Bin Zia",
        university: "Bangladesh University of Engineering and Technology (BUET)",
        location: "Dhaka",
        subjects: ["Civil Engineering", "Mathematics"],
        rating: 4.8,
        experience: "8 years",
        rate: "750 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 28,
        name: "Hafiza Akter",
        university: "Shahjalal University of Science and Technology (SUST)",
        location: "Sylhet",
        subjects: ["English", "Business Studies"],
        rating: 4.7,
        experience: "5 years",
        rate: "600 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 29,
        name: "Zubair Rahman",
        university: "Khulna University of Engineering and Technology (KUET)",
        location: "Khulna",
        subjects: ["Mechanical Engineering", "Physics"],
        rating: 4.9,
        experience: "10 years",
        rate: "800 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 30,
        name: "Minhajul Islam",
        university: "University of Dhaka",
        location: "Dhaka",
        subjects: ["Mathematics", "Data Science"],
        rating: 4.8,
        experience: "6 years",
        rate: "700 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 31,
        name: "Asma Nazreen",
        university: "Rajshahi University",
        location: "Rajshahi",
        subjects: ["Chemistry", "Physics"],
        rating: 4.7,
        experience: "5 years",
        rate: "550 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 32,
        name: "Mohammad Ruhul Amin",
        university: "University of Chittagong",
        location: "Chittagong",
        subjects: ["Accounting", "Economics"],
        rating: 4.6,
        experience: "7 years",
        rate: "600 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 33,
        name: "Rahel Mollah",
        university: "BRAC University",
        location: "Dhaka",
        subjects: ["English", "Language Arts"],
        rating: 4.8,
        experience: "5 years",
        rate: "650 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 34,
        name: "Tanvir Ahmed",
        university: "Bangladesh University of Engineering and Technology (BUET)",
        location: "Dhaka",
        subjects: ["Architecture", "Mathematics"],
        rating: 4.7,
        experience: "6 years",
        rate: "700 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 35,
        name: "Samar Sultana",
        university: "University of Dhaka",
        location: "Dhaka",
        subjects: ["Statistics", "Sociology"],
        rating: 4.9,
        experience: "8 years",
        rate: "750 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 36,
        name: "Rabeya Begum",
        university: "North South University (NSU)",
        location: "Dhaka",
        subjects: ["Philosophy", "Psychology"],
        rating: 4.6,
        experience: "5 years",
        rate: "500 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 37,
        name: "Salahuddin Ahmed",
        university: "Khulna University (KU)",
        location: "Khulna",
        subjects: ["Electrical Engineering", "Physics"],
        rating: 4.8,
        experience: "7 years",
        rate: "750 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 38,
        name: "Muneeb Khan",
        university: "Dhaka University (DU)",
        location: "Dhaka",
        subjects: ["Mechanical Engineering", "Mathematics"],
        rating: 4.9,
        experience: "9 years",
        rate: "800 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 39,
        name: "Mehdi Hasan",
        university: "Jahangirnagar University",
        location: "Savar",
        subjects: ["Environmental Science", "Physics"],
        rating: 4.8,
        experience: "5 years",
        rate: "650 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 40,
        name: "Alina Rahman",
        university: "Rajshahi University",
        location: "Rajshahi",
        subjects: ["Bangla", "Literature"],
        rating: 4.7,
        experience: "4 years",
        rate: "500 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 41,
        name: "Tahsin Fariha",
        university: "Khulna University (KU)",
        location: "Khulna",
        subjects: ["Sociology", "Political Science"],
        rating: 4.9,
        experience: "6 years",
        rate: "700 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 42,
        name: "Nashit Noor",
        university: "BRAC University",
        location: "Dhaka",
        subjects: ["Philosophy", "Psychology"],
        rating: 4.6,
        experience: "4 years",
        rate: "600 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 43,
        name: "Habib Mahmud",
        university: "Shahjalal University of Science and Technology (SUST)",
        location: "Sylhet",
        subjects: ["Geography", "History"],
        rating: 4.7,
        experience: "5 years",
        rate: "650 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 44,
        name: "Mujahidul Islam",
        university: "Jahangirnagar University",
        location: "Savar",
        subjects: ["Biology", "Chemistry"],
        rating: 4.8,
        experience: "6 years",
        rate: "700 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 45,
        name: "Afifa Rahman",
        university: "Dhaka University (DU)",
        location: "Dhaka",
        subjects: ["Geography", "History"],
        rating: 4.9,
        experience: "8 years",
        rate: "750 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 46,
        name: "Tanvir Haque",
        university: "Rajshahi University",
        location: "Rajshahi",
        subjects: ["Mathematics", "Computer Science"],
        rating: 4.6,
        experience: "3 years",
        rate: "500 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 47,
        name: "Nazia Begum",
        university: "Shahjalal University of Science and Technology (SUST)",
        location: "Sylhet",
        subjects: ["Computer Science", "Mathematics"],
        rating: 4.7,
        experience: "6 years",
        rate: "650 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 48,
        name: "Rahel Alam",
        university: "University of Chittagong",
        location: "Chittagong",
        subjects: ["Chemistry", "Physics"],
        rating: 4.8,
        experience: "7 years",
        rate: "750 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 49,
        name: "Tariq Zahir",
        university: "Bangladesh University of Engineering and Technology (BUET)",
        location: "Dhaka",
        subjects: ["Mathematics", "Engineering"],
        rating: 4.6,
        experience: "5 years",
        rate: "600 TK/hour",
        image: "https://via.placeholder.com/96x96"
      },
      {
        id: 50,
        name: "Mokha Rahman",
        university: "North South University (NSU)",
        location: "Dhaka",
        subjects: ["Economics", "Business Studies"],
        rating: 4.7,
        experience: "6 years",
        rate: "650 TK/hour",
        image: "https://via.placeholder.com/96x96"
      }
    ];

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

      {/* Enhanced Filters Sidebar */}
      <motion.div 
        className={`sticky w-full md:w-80 bg-white/95 backdrop-blur-xl  md:sticky top-0 h-screen  shadow-2xl p-8 border-r border-emerald-100 z-40 transform transition-transform duration-300 ${
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
              type: 'radio'
            },
            {
              title: "Location Preferences",
              icon: FiMapPin,
              content: (
                <div className="space-y-4">
                  <select className="w-full px-4 py-3 border-2 border-emerald-100 rounded-xl text-slate-700 focus:border-emerald-500 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJjdXJyZW50Q29sb3IiPjxwYXRoIGQ9Ik03LjQxIDguNTlMMTIgMTMuMTdsNC41OS00LjU4TDE4IDkuNWwtNiA2LTYtNnoiLz48L3N2Zz4=')] bg-no-repeat bg-[right_1rem_center] bg-[length:1.5rem]">
                    <option>Select District</option>
                    <option>Dhaka</option>
                    <option>Khulna</option>
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
              <p className="text-slate-600">Showing 50+ verified tutors in your area</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-600">Sort by:</span>
              <select className="px-4 py-2 border-2 border-emerald-100 rounded-xl bg-white text-slate-700 focus:border-emerald-500">
                <option>Relevance</option>
                <option>Rating</option>
                <option>Experience</option>
              </select>
            </div>
          </div>
        </div>

        {/* Enhanced Tutor Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutors.map((tutor) => (
            <motion.div
              key={tutor.id}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all border border-emerald-100 overflow-hidden"
            >
              {/* Premium Ribbon */}
              {tutor.rating >= 4.8 && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-400 to-amber-500 text-white px-4 py-1 text-xs font-bold uppercase tracking-wide transform translate-x-2 translate-y-3 rotate-45 shadow-md">
                  <FiStar className="inline mr-2 -mt-1" />
                  Premium
                </div>
              )}

              <div className="p-6">
                {/* Profile Header */}
                <div className="flex items-start gap-5 mb-6">
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-100 to-green-100 p-1 shadow-inner">
                      <img 
                        src={tutor.image} 
                        alt={tutor.name} 
                        className="w-full h-full rounded-xl object-cover border-2 border-white"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1 shadow-md">
                      <FiStar className="text-amber-300" />
                      {tutor.rating}
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

                {/* Details Section */}
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
                            key={idx}
                            className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full font-medium border border-emerald-100"
                          >
                            {subject}
                          </span>
                        ))}
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
      </div>
    </div>
  );
};

export default TutorList;