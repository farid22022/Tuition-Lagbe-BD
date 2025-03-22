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

  return (
    <div className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden bg-[#FBFFE6]">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
          y,
          scale: 1.1 // Add slight scale for better mobile coverage
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content Container */}
      <div className="relative z-10 text-white p-4 md:p-8 w-full max-w-6xl mx-auto">
        {/* Heading Section */}
        <motion.div
          className="text-center mb-6 md:mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
            Find Your Subject Specialist
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl">
            Find Our Specialist to reach your dream goal
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {[
            { value: "431,454+", label: "Total Applied" },
            { value: "120,189+", label: "Total Tutors" },
            { value: "4,750+", label: "Live Jobs" },
            { value: "4.7", label: "Avg Rating" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-md"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-1">{stat.value}</h3>
              <p className="text-xs md:text-sm opacity-90">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Subject Slider */}
        <motion.div
          className="w-full max-w-4xl mx-auto px-4 md:px-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Swiper
            slidesPerView={2}
            spaceBetween={15}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            breakpoints={{
              480: {
                slidesPerView: 3,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 25
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 30
              }
            }}
            modules={[Autoplay, Navigation]}
            className="relative"
          >
            {subjects.map((subject, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-md text-center 
                             hover:bg-white/20 transition-all">
                  <h3 className="text-base md:text-lg font-semibold">{subject}</h3>
                </div>
              </SwiperSlide>
            ))}

            {/* Custom Navigation Buttons */}
            <div className="swiper-button-prev !text-white !h-8 !w-8 md:!h-10 md:!w-10" />
            <div className="swiper-button-next !text-white !h-8 !w-8 md:!h-10 md:!w-10" />
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
};

export default SubjectSpecialist;