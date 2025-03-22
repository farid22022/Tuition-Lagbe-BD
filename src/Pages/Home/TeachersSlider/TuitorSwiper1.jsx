import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion"; // For animations
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const TutorCard = ({ tutor }) => {
  return (
    <motion.div
      className="p-6 rounded-lg shadow-lg text-center overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl bg-[#FBFFE6]"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Image Section */}
      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
        <img
          src={tutor.image || "https://via.placeholder.com/150"} // Placeholder image
          alt={tutor.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Tutor Details */}
      <h3 className="text-xl font-bold mb-2 text-gray-800">{tutor.name}</h3>
      <p className="text-gray-600 mb-2">{tutor.university}</p>
      <p className="text-gray-500 mb-4">{tutor.subject}</p>

      {/* View Details Button */}
      <motion.button
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View Details
      </motion.button>
    </motion.div>
  );
};

const tutors = [
  {
    name: "Md. Hasinur Rahman",
    university: "University of Dhaka (OU)",
    subject: "Unknown",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    name: "Mahmud Rehman",
    university: "Govt. Unsupervised College",
    subject: "Medicine",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "S M Mehrab",
    university: "Computer Science & Engineering",
    subject: "CSE",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Tanjima Akter Mukta",
    university: "CUEF",
    subject: "EEE",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Tanjima Akter Mukta",
    university: "CUEF",
    subject: "EEE",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Tanjima Akter Mukta",
    university: "CUEF",
    subject: "EEE",
    image: "https://via.placeholder.com/150",
  },
];

const TutorSwiper = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Popular Tutors</h2>
        <p className="text-center text-gray-600 mb-12 text-5xl font-bold "> 
          Here are a few of the Verified Teachers
        </p>

        {/* Swiper Slider */}
        <Swiper
          slidesPerView={1} // Show 1 slide by default
          spaceBetween={30}
          loop={true} // Infinite loop
          autoplay={{
            delay: 3000, // Auto-slide every 3 seconds
            disableOnInteraction: false, // Continue autoplay after user interaction
          }}
          pagination={{
            clickable: true, // Enable clickable pagination dots
          }}
          navigation={true} // Enable navigation arrows
          breakpoints={{
            640: {
              slidesPerView: 2, // Show 2 slides on tablets
            },
            1024: {
              slidesPerView: 3, // Show 3 slides on desktops
            },
            1280: {
              slidesPerView: 4, // Show 4 slides on large desktops
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {tutors.map((tutor, index) => (
            <SwiperSlide key={index}>
              <TutorCard tutor={tutor} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TutorSwiper;