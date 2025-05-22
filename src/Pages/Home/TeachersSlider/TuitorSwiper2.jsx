

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion, useInView, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


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
const TutorCard = ({ tutor, index }) => {

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        delay: index * 0.15
      }
    },
    hover: {
      y: -15,
      scale: 1.02,
      boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.2)"
    }
  };

  return (
    <motion.div
      className="p-6 md:p-8 rounded-2xl shadow-lg text-center overflow-hidden relative bg-white group"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      whileHover="hover"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-emerald-50/20 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      {/* Image Container */}
      <motion.div
        className="w-28 h-28 md:w-32 md:h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-green-50 relative"
        whileHover={{ rotate: 5, scale: 1.05 }}
      >
        <img
          src={tutor.image}
          alt={tutor.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/20 to-transparent" />
      </motion.div>

      {/* Tutor Details */}
      <motion.h3 
        className="text-xl md:text-2xl font-bold mb-3 text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {tutor.name}
      </motion.h3>
      
      <motion.p 
        className="text-green-600 mb-3 font-medium flex items-center justify-center gap-2 text-sm md:text-base"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg>
        {tutor.university}
      </motion.p>

      <motion.p 
        className="text-gray-600 mb-6 px-4 text-xs md:text-sm font-medium bg-green-50/50 py-2 rounded-full inline-block backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {tutor.subject}
      </motion.p>

      {/* View Details Button */}
      <motion.button
        className="bg-gradient-to-br from-green-600 to-emerald-500 text-white px-6 py-2.5 md:px-8 md:py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center gap-2 mx-auto hover:gap-3 text-sm md:text-base"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        View Profile
        <svg 
          className="w-4 h-4 transition-transform group-hover:translate-x-1"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </motion.button>
    </motion.div>
  );
};

const TutorSwiper = () => {
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <div className="bg-gradient-to-b from-green-50/30 to-white/50 py-16 md:py-24 relative overflow-hidden">
      {/* Animated background pattern */}
      <motion.div 
        className="absolute inset-0 opacity-5 [mask-image:linear-gradient(to_bottom,transparent,white)]"
        initial={{ scale: 1 }}
        animate={{ scale: 1.02 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "linear"
        }}
      >
        <div className="absolute inset-0 bg-[url('/pattern.svg')]" />
      </motion.div>

      <div className="container mx-auto px-4 xl:px-0 relative">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Meet Our <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">Expert Educators</span>
          </h2>
          <p className="text-gray-600 md:text-lg max-w-2xl mx-auto">
            Discover Bangladesh's most qualified and verified teaching professionals
          </p>
        </motion.div>

        {/* Swiper Container */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.custom-pagination',
              bulletClass: 'swiper-pagination-bullet !bg-green-500/30 !w-2.5 !h-2.5 !mx-1.5 !transition-all',
              bulletActiveClass: '!opacity-100 !bg-emerald-600 !w-3.5 !h-3.5'
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="relative pb-16"
          >
            {tutors.map((tutor, index) => (
              <SwiperSlide key={index}>
                <TutorCard tutor={tutor} index={index} />
              </SwiperSlide>
            ))}

            {/* Custom Navigation */}
            <div className="swiper-button-prev !text-emerald-600/80 hover:!text-emerald-700 !scale-75 md:!scale-100 !top-[45%] !w-12 !h-12 backdrop-blur-sm !rounded-full !border !border-emerald-100" />
            <div className="swiper-button-next !text-emerald-600/80 hover:!text-emerald-700 !scale-75 md:!scale-100 !top-[45%] !w-12 !h-12 backdrop-blur-sm !rounded-full !border !border-emerald-100" />
          </Swiper>

          {/* Custom Pagination */}
          <div className="custom-pagination flex justify-center gap-1.5 mt-10 md:mt-12" />
        </motion.div>
      </div>
    </div>
  );
};
export default TutorSwiper;