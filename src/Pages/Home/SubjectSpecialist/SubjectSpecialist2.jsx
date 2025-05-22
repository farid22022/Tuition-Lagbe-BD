// import React from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import image from "./../../../../public/paralex/iask-ai-image (31).png";

// const SubjectSpecialist = () => {
//   const { scrollYProgress } = useScroll();
//   const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

//   const subjects = [
//     "Math", "Science", "English", "Bangla", "ICT", 
//     "Physics", "Chemistry", "Biology", "History", "Geography"
//   ];

//   return (
//     <div className="relative min-h-[600px] md:min-h-[800px] flex items-center justify-center overflow-hidden bg-emerald-900">
//       {/* Parallax Background with Gradient Mask */}
//       <motion.div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: `url(${image})`,
//           y,
//           scale: 1.15
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/60 to-emerald-900/90" />
//       </motion.div>

//       {/* Floating Particles */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(12)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-2 h-2 bg-emerald-400/30 rounded-full"
//             initial={{
//               x: Math.random() * 100,
//               y: Math.random() * 100,
//               scale: Math.random() * 0.5 + 0.5
//             }}
//             animate={{
//               y: [0, 100, 0],
//               x: [0, 50, 0],
//               rotate: 360
//             }}
//             transition={{
//               duration: Math.random() * 8 + 4,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }}
//           />
//         ))}
//       </div>

//       {/* Content Container */}
//       <div className="relative z-10 text-white p-4 md:p-8 w-full max-w-7xl mx-auto">
//         {/* Animated Heading Section */}
//         <motion.div
//           className="text-center mb-12 md:mb-16"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <motion.h2
//             className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-300 to-white bg-clip-text text-transparent"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//           >
//             Expert Subject Specialists
//           </motion.h2>
//           <motion.div
//             className="h-1 w-24 bg-emerald-400 mx-auto rounded-full"
//             initial={{ scaleX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             transition={{ duration: 1, delay: 0.4 }}
//           />
//           <motion.p
//             className="text-lg md:text-xl lg:text-2xl mt-6 opacity-90 max-w-2xl mx-auto"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.6 }}
//           >
//             Connect with certified professionals to achieve academic excellence
//           </motion.p>
//         </motion.div>

//         {/* Animated Statistics Grid */}
//         <motion.div
//           className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-16"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ staggerChildren: 0.2 }}
//         >
//           {[
//             { value: "431,454+", label: "Total Applications" },
//             { value: "120,189+", label: "Verified Tutors" },
//             { value: "4,750+", label: "Active Positions" },
//             { value: "4.9/5", label: "Average Rating" }
//           ].map((stat, index) => (
//             <motion.div
//               key={index}
//               initial={{ scale: 0.8, opacity: 0 }}
//               whileInView={{ scale: 1, opacity: 1 }}
//               whileHover={{ y: -5 }}
//               transition={{ type: "spring", stiffness: 300 }}
//               className="bg-white/5 p-4 md:p-6 rounded-xl backdrop-blur-lg border border-emerald-400/20 hover:border-emerald-400/40 transition-all"
//             >
//               <h3 className="text-2xl md:text-3xl font-bold mb-2 text-emerald-300">
//                 {stat.value}
//               </h3>
//               <p className="text-sm md:text-base opacity-90">{stat.label}</p>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Enhanced Subject Slider */}
//         <motion.div
//           className="w-full max-w-6xl mx-auto"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//         >
//           <Swiper
//             slidesPerView={2}
//             spaceBetween={20}
//             loop={true}
//             autoplay={{
//               delay: 2500,
//               disableOnInteraction: false,
//             }}
//             navigation={{
//               prevEl: '.swiper-button-prev',
//               nextEl: '.swiper-button-next',
//             }}
//             breakpoints={{
//               480: { slidesPerView: 3 },
//               768: { slidesPerView: 4 },
//               1024: { slidesPerView: 5 },
//             }}
//             modules={[Autoplay, Navigation]}
//             className="relative group"
//           >
//             {subjects.map((subject, index) => (
//               <SwiperSlide key={index}>
//                 <motion.div
//                   className="bg-white/5 p-4 rounded-xl backdrop-blur-lg border border-emerald-400/20 hover:border-emerald-400/40 transition-all cursor-pointer"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <div className="flex flex-col items-center gap-3">
//                     <div className="w-12 h-12 bg-emerald-400/10 rounded-full flex items-center justify-center">
//                       <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
//                       </svg>
//                     </div>
//                     <h3 className="text-lg font-semibold text-center">{subject}</h3>
//                   </div>
//                 </motion.div>
//               </SwiperSlide>
//             ))}

//             {/* Custom Navigation */}
//             <div className="swiper-button-prev !text-emerald-300 !h-10 !w-10 hover:!scale-125 transition-transform" />
//             <div className="swiper-button-next !text-emerald-300 !h-10 !w-10 hover:!scale-125 transition-transform" />
//           </Swiper>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default SubjectSpecialist;

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import image from "./../../../../public/paralex/iask-ai-image (31).png";

const SubjectSpecialist = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const subjects = [
    "Math", "Science", "English", "Bangla", "ICT", 
    "Physics", "Chemistry", "Biology", "History", "Geography"
  ];

  const particleVariants = {
    float: {
      y: [0, -100, 0],
      x: [0, 50, 0],
      transition: {
        duration: Math.random() * 8 + 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const statVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 12 }
    }
  };

  return (
    <div className="relative min-h-[600px] md:min-h-[800px] flex items-center justify-center overflow-hidden bg-emerald-900">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
          y,
          scale: 1.15
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/95 via-emerald-900/70 to-emerald-900/95" />
      </motion.div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-emerald-400/30 rounded-full"
            variants={particleVariants}
            initial="float"
            animate="float"
            custom={i}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              scale: Math.random() * 0.5 + 0.5
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-white p-4 md:p-8 w-full max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-300 to-white bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Expert Subject Specialists
          </motion.h2>
          
          <motion.div
            className="h-1 w-24 bg-emerald-400 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          
          <motion.p
            className="text-lg md:text-xl lg:text-2xl mt-6 opacity-90 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Connect with certified professionals to achieve academic excellence
          </motion.p>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
        >
          {[
            { value: "431,454+", label: "Total Applications" },
            { value: "120,189+", label: "Verified Tutors" },
            { value: "4,750+", label: "Active Positions" },
            { value: "4.9/5", label: "Average Rating" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={statVariants}
              whileHover={{ y: -8 }}
              className="bg-white/5 p-4 md:p-6 rounded-xl backdrop-blur-lg border border-emerald-400/20 hover:border-emerald-400/40 transition-all"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-emerald-300">
                {stat.value}
              </h3>
              <p className="text-sm md:text-base opacity-90">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Subject Slider */}
        <motion.div
          className="w-full max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            breakpoints={{
              480: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            modules={[Autoplay, Navigation]}
            className="relative group"
          >
            {subjects.map((subject, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="bg-white/5 p-4 rounded-xl backdrop-blur-lg border border-emerald-400/20 hover:border-emerald-400/40 transition-all cursor-pointer"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", delay: index * 0.1 }}
                >
                  <div className="flex flex-col items-center gap-3">
                    <motion.div 
                      className="w-12 h-12 bg-emerald-400/10 rounded-full flex items-center justify-center"
                      whileHover={{ rotate: 15 }}
                    >
                      <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </motion.div>
                    <h3 className="text-lg font-semibold text-center">{subject}</h3>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}

            {/* Navigation Arrows */}
            <div className="swiper-button-prev !text-emerald-300 !h-12 !w-12 hover:!scale-125 !transition-transform !bg-emerald-900/30 !backdrop-blur-sm !rounded-lg" />
            <div className="swiper-button-next !text-emerald-300 !h-12 !w-12 hover:!scale-125 !transition-transform !bg-emerald-900/30 !backdrop-blur-sm !rounded-lg" />
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
};

export default SubjectSpecialist;