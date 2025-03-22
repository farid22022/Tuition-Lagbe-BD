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

  return (
    <div className="relative py-24 bg-gradient-to-b from-[#FBFFE6] to-emerald-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
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
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              Featured In
            </span>
          </h3>
          <p className="text-lg text-gray-600">
            Recognized by leading publications
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 }
          }}
          className="py-8"
        >
          {featuredItems.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-center h-32 grayscale hover:grayscale-0 transition-all group"
              >
                <div className="relative p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all">
                  <img 
                    src={item.logo} 
                    alt={item.name} 
                    className="h-16 object-contain mx-auto transform group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 border-2 border-green-200/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Animated Border */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5 }}
          className="mx-auto mt-12 h-1 w-48 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
        />
      </div>
    </div>
  );
};

export default PressSlider;