import React from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiMapPin, FiStar, FiClock, FiDollarSign, FiFilter, FiSearch, FiUsers, FiHome, FiGlobe, FiBookOpen } from 'react-icons/fi';

const TutorList = () => {
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
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 font-sans mt-20">
      {/* Sticky Sidebar */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-1/4 bg-white sticky top-0 h-screen shadow-xl p-6 border-r border-purple-100"
      >
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-8 flex items-center gap-2">
          <FiFilter className="text-purple-500" />
          Advanced Filter
        </h2>

        <div className="space-y-8">
          {/* Search By Job ID */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              <FiSearch className="text-purple-500" />
              Search By Job ID
            </label>
            <input 
              type="text" 
              placeholder="Enter job ID..." 
              className="w-full p-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          {/* Tutor Type */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
              <FiUsers className="text-purple-500" />
              Tutor Type
            </h3>
            <div className="space-y-2">
              {['All', 'Premium'].map((type) => (
                <label key={type} className="flex items-center gap-3 p-2 hover:bg-purple-50 rounded-lg cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="checkbox checkbox-sm border-purple-300 checked:bg-purple-500" 
                  />
                  <span className="text-gray-600">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Location Filters */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
              <FiMapPin className="text-purple-500" />
              Location
            </h3>
            <div className="space-y-4">
              <select className="select select-bordered w-full border-purple-200 focus:border-purple-500 focus:ring-1 focus:ring-purple-500">
                <option>All Districts</option>
                <option>Dhaka</option>
                <option>Khulna</option>
                <option>Rajshahi</option>
              </select>
              <select className="select select-bordered w-full border-purple-200 focus:border-purple-500 focus:ring-1 focus:ring-purple-500">
                <option>All Areas</option>
                <option>Area 1</option>
                <option>Area 2</option>
              </select>
            </div>
          </div>

          {/* Education Filters */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
              <FiBookOpen className="text-purple-500" />
              Education
            </h3>
            <div className="space-y-4">
              <select className="select select-bordered w-full border-purple-200 focus:border-purple-500 focus:ring-1 focus:ring-purple-500">
                <option>All Mediums</option>
                <option>English</option>
                <option>Bangla</option>
              </select>
              <select className="select select-bordered w-full border-purple-200 focus:border-purple-500 focus:ring-1 focus:ring-purple-500">
                <option>All Classes</option>
                <option>Class 1-5</option>
                <option>Class 6-10</option>
                <option>Class 11-12</option>
              </select>
            </div>
          </div>

          {/* Tuition Type */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
              <FiHome className="text-purple-500" />
              Tuition Type
            </h3>
            <div className="space-y-2">
              {['All', 'Home Tuition', 'Online'].map((type) => (
                <label key={type} className="flex items-center gap-3 p-2 hover:bg-purple-50 rounded-lg cursor-pointer">
                  <input 
                    type="radio" 
                    name="tuition-type" 
                    className="radio radio-sm border-purple-300 checked:bg-purple-500" 
                  />
                  <span className="text-gray-600">{type}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="w-3/4 p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-8 bg-white p-4 rounded-xl shadow-sm"
        >
          <p className="text-gray-600 font-medium">
            Showing <span className="text-purple-600 font-bold">1-10</span> of 
            <span className="text-purple-600 font-bold"> 1080</span> Tutors
          </p>
          <select className="select bg-white border-purple-200 focus:border-purple-500 focus:ring-1 focus:ring-purple-500">
            <option>15 per page</option>
            <option>30 per page</option>
            <option>50 per page</option>
          </select>
        </motion.div>

        {/* Tutor Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutors.map((tutor, index) => (
            <motion.div
              key={tutor.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              {/* Gradient Backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Card Content */}
              <div className="relative bg-white p-6 h-full">
                {/* Premium Badge */}
                {tutor.type === 'Premium' && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-2">
                    <FiStar className="text-yellow-300" />
                    Premium
                  </div>
                )}

                {/* Tutor Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 p-1">
                      <img 
                        src={tutor.image} 
                        alt={tutor.name} 
                        className="w-full h-full rounded-full object-cover border-2 border-white"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{tutor.name}</h3>
                    <p className="text-sm text-purple-600 flex items-center gap-1">
                      <FiBook className="text-purple-500" />
                      {tutor.university}
                    </p>
                  </div>
                </div>

                {/* Tutor Details */}
                <div className="space-y-4">
                  {/* Rating and Location */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 bg-purple-50 px-3 py-1 rounded-full">
                      <FiStar className="text-yellow-400" />
                      <span className="text-sm font-medium text-gray-700">
                        {tutor.rating} ({tutor.experience})
                      </span>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-medium text-blue-600">
                      <FiMapPin className="text-blue-500" />
                      {tutor.location}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-purple-100 pt-4">
                    {/* Availability */}
                    <div className="flex items-center gap-2 mb-2">
                      <FiClock className="text-purple-500" />
                      <span className="text-sm font-medium text-gray-600">
                        {tutor.tuitionType}
                      </span>
                    </div>
                    
                    {/* Rate */}
                    <div className="flex items-center gap-2">
                      <FiDollarSign className="text-green-500" />
                      <span className="text-sm font-medium text-gray-600">
                        Rate: <span className="text-green-600">{tutor.rate}</span>
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all flex items-center justify-center gap-2">
                    View Details
                    <FiGlobe className="text-white/80" />
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

export default TutorList;