

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/autoplay';

const PressSlider = () => {
  const featuredItems = [
    { name: 'The Daily Star', logo: '/path/to/daily-star-logo.png' },
    { name: 'Dhaka Tribune', logo: '/path/to/dhaka-tribune-logo.png' },
    { name: 'Bangladesh Post', logo: '/path/to/bangladesh-post-logo.png' },
    { name: 'Business Standard', logo: '/path/to/business-standard-logo.png' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12
      }
    }
  };

  return (
    <div className="relative py-24 bg-gradient-to-b from-[#FBFFE6] to-emerald-50 overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 overflow-hidden"
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-48 h-48 bg-green-200/10 rounded-full blur-xl"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              rotate: 360
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-4 relative z-10"
      >
        {/* Header Section */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            initial={{ backgroundPositionX: "0%" }}
            animate={{ backgroundPositionX: "100%" }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage: "linear-gradient(90deg, #16a34a, #10b981, #16a34a)",
              backgroundSize: "200% auto",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}
          >
            Featured In
          </motion.h3>
          <motion.p
            className="text-lg md:text-xl text-gray-600"
            variants={itemVariants}
          >
            Recognized by leading publications
          </motion.p>
        </motion.div>

        {/* Swiper Container */}
        <motion.div variants={itemVariants}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 40 },
              1024: { slidesPerView: 3, spaceBetween: 50 },
              1280: { slidesPerView: 4, spaceBetween: 60 }
            }}
            className="py-8"
          >
            {featuredItems.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  variants={itemVariants}
                  className="flex items-center justify-center h-32 md:h-40 grayscale hover:grayscale-0 transition-all group"
                  whileHover={{ y: -10 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="relative p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-md hover:shadow-xl transition-all w-full max-w-xs mx-auto">
                    <motion.div
                      className="h-16 w-full relative"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", delay: index * 0.1 }}
                    >
                      <img 
                        src={item.logo} 
                        alt={item.name} 
                        className="h-full w-full object-contain mx-auto transform group-hover:scale-105 transition-transform p-2"
                      />
                    </motion.div>
                    <div className="absolute inset-0 border-2 border-green-200/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Animated Border */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, type: "spring" }}
          className="mx-auto mt-12 h-1.5 w-48 bg-gradient-to-r from-green-400 via-emerald-500 to-green-400 rounded-full"
        />
      </motion.div>
    </div>
  );
};

export default PressSlider;