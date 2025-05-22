

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const PeopleLoveUs = () => {
  // ... testimonials data remains the same

      const testimonials = {
        parents: [
          {
            name: "Sadia Naznin",
            role: "Mother to Grade 4 Student",
            testimonial: "Tutorsheba has many exceptional and dedicated tutors. My child has improved significantly in studies, and I highly recommend it to other parents.",
            image: "https://i.ibb.co/4ZQzYDJ/parent1.jpg",
          },
          {
            name: "Md. Rahman",
            role: "Father to Grade 7 Student",
            testimonial: "Finding a reliable tutor was a challenge until we found Tutorsheba. Now, my son enjoys his studies more than ever.",
            image: "https://i.ibb.co/XYZ123/parent2.jpg",
          },
          {
            name: "Farhana Islam",
            role: "Mother to Grade 10 Student",
            testimonial: "Tutorsheba's platform helped my daughter get the best guidance for her board exams. Highly satisfied!",
            image: "https://i.ibb.co/ABC456/parent3.jpg",
          },
        ],
        tutors: [
          {
            name: "Tafsiruzzaman",
            role: "Mathematics Teacher",
            testimonial: "I have been using Tutorsheba since 2019, and it has greatly helped me connect with students efficiently.",
            image: "https://i.ibb.co/6RJ3M8H/tutor1.jpg",
          },
          {
            name: "Ayesha Karim",
            role: "Physics Teacher",
            testimonial: "Teaching on Tutorsheba has been an amazing experience. I can reach students from different backgrounds and help them succeed.",
            image: "https://i.ibb.co/DEF789/tutor2.jpg",
          },
          {
            name: "Rafiq Hossain",
            role: "English Tutor",
            testimonial: "I love the flexibility Tutorsheba provides. I can manage my schedule and help students improve their language skills at the same time.",
            image: "https://i.ibb.co/GHI012/tutor3.jpg",
          },
        ],
        affiliates: [
          {
            name: "Mehedi Hasan",
            role: "Student | Affiliate Partner",
            testimonial: "I work as an affiliate partner in the Tuition Terminal in addition to my studies. The platform is amazing for both students and affiliates.",
            image: "https://i.ibb.co/4ZQzYDJ/affiliate1.jpg",
            stats: {
              role: "Affiliate",
              status: "Active",
              since: "2023",
            },
          },
          {
            name: "Nusrat Jahan",
            role: "Marketing Affiliate",
            testimonial: "Joining Tutorsheba as an affiliate has been a great opportunity. I get to promote education while earning incentives.",
            image: "https://i.ibb.co/JKL345/affiliate2.jpg",
            stats: {
              role: "Affiliate",
              status: "Active",
              since: "2022",
            },
          },
          {
            name: "Tanvir Ahmed",
            role: "University Student | Affiliate Marketer",
            testimonial: "Tutorsheba’s affiliate program is a great way to earn and help spread quality education. The platform is well-structured and easy to use.",
            image: "https://i.ibb.co/MNO678/affiliate3.jpg",
            stats: {
              role: "Affiliate",
              status: "Active",
              since: "2021",
            },
          },
        ],
      };

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

  const SlideContent = ({ testimonial }) => (
    <motion.div
      className="bg-white p-8 rounded-2xl shadow-xl relative overflow-hidden group hover:shadow-2xl transition-shadow"
      variants={itemVariants}
      whileHover={{ y: -10 }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute -left-20 -top-20 w-40 h-40 bg-green-100 rounded-full blur-xl animate-spin-slow" />
        <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-green-100 rounded-full blur-xl animate-spin-slow reverse" />
      </div>

      <motion.div
        className="w-24 h-24 mx-auto mb-6 rounded-full border-4 border-white shadow-lg overflow-hidden relative"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/20 to-transparent" />
      </motion.div>

      <motion.svg
        className="w-12 h-12 text-green-500 absolute top-6 left-6 opacity-20"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4 }}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M10 7L8 11H11V17H5V11L7 7H10M18 7L16 11H19V17H13V11L15 7H18Z" />
      </motion.svg>

      <motion.p
        className="text-gray-700 mb-4 text-lg leading-relaxed font-medium relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {testimonial.testimonial}
      </motion.p>

      <motion.div 
        className="border-t border-green-200/30 pt-4 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h4 className="text-xl font-bold text-gray-800">{testimonial.name}</h4>
        <p className="text-green-600 font-medium">{testimonial.role}</p>
      </motion.div>
    </motion.div>
  );

  const ProfileCard = ({ testimonial }) => (
    <motion.div
      className="bg-white p-8 rounded-2xl shadow-xl relative overflow-hidden group hover:shadow-2xl transition-shadow"
      variants={itemVariants}
      whileHover={{ y: -10 }}
    >
      <motion.div
        className="w-24 h-24 mx-auto mb-6 rounded-full border-4 border-white overflow-hidden"
        animate={{ rotate: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
      </motion.div>

      <motion.h3
        className="text-xl font-bold text-center text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {testimonial.name}
      </motion.h3>
      
      <motion.p
        className="text-green-600 text-center mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {testimonial.role}
      </motion.p>

      <motion.p
        className="text-gray-700 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {testimonial.testimonial}
      </motion.p>

      <motion.div
        className="grid grid-cols-3 gap-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {Object.entries(testimonial.stats).map(([key, value]) => (
          <div key={key}>
            <p className="text-sm text-gray-600 capitalize">{key}</p>
            <p className="font-semibold text-green-600">{value}</p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );

  return (
    <div className="relative py-20 overflow-hidden bg-gradient-to-b from-green-50 to-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 opacity-20"
      >
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-48 h-48 bg-green-200/10 rounded-full blur-xl"
            initial={{ x: 0, y: 0 }}
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

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              Voices of Success
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto font-medium"
            variants={itemVariants}
          >
            Join thousands of educators, parents, and affiliates shaping the future of learning
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Parents Section */}
          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-2xl font-bold text-gray-800 mb-8 pl-4 border-l-4 border-green-500 relative"
              variants={itemVariants}
            >
              Parent Experiences
              <div className="absolute left-0 -bottom-2 w-8 h-1 bg-green-500 rounded-full" />
            </motion.h3>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              autoplay={{ delay: 5000 }}
              pagination={{ 
                clickable: true, 
                el: ".parent-pagination",
                bulletClass: "swiper-pagination-bullet !bg-green-200 !w-3 !h-3",
                bulletActiveClass: "!bg-green-600 !w-4 !h-4"
              }}
              navigation={{ 
                nextEl: ".parent-next", 
                prevEl: ".parent-prev",
                disabledClass: "opacity-30"
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="relative group"
            >
              {testimonials.parents.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <SlideContent testimonial={testimonial} />
                </SwiperSlide>
              ))}
              <div className="parent-next absolute right-0 top-1/2 -translate-y-1/2 z-10 !w-12 !h-12 bg-white shadow-lg rounded-full flex items-center justify-center cursor-pointer hover:bg-green-50 transition-colors hover:scale-110">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="parent-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 !w-12 !h-12 bg-white shadow-lg rounded-full flex items-center justify-center cursor-pointer hover:bg-green-50 transition-colors hover:scale-110">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <div className="parent-pagination mt-8 flex justify-center gap-2" />
            </Swiper>
          </motion.div>

          {/* Tutors Section */}
          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-2xl font-bold text-gray-800 mb-8 pl-4 border-l-4 border-green-500 relative"
              variants={itemVariants}
            >
              Educator Insights
              <div className="absolute left-0 -bottom-2 w-8 h-1 bg-green-500 rounded-full" />
            </motion.h3>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              autoplay={{ delay: 5500 }}
              pagination={{ 
                clickable: true, 
                el: ".tutor-pagination",
                bulletClass: "swiper-pagination-bullet !bg-green-200 !w-3 !h-3",
                bulletActiveClass: "!bg-green-600 !w-4 !h-4"
              }}
              navigation={{ 
                nextEl: ".tutor-next", 
                prevEl: ".tutor-prev",
                disabledClass: "opacity-30"
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="relative group"
            >
              {testimonials.tutors.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <SlideContent testimonial={testimonial} />
                </SwiperSlide>
              ))}
              <div className="tutor-next absolute right-0 top-1/2 -translate-y-1/2 z-10 !w-12 !h-12 bg-white shadow-lg rounded-full flex items-center justify-center cursor-pointer hover:bg-green-50 transition-colors hover:scale-110">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="tutor-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 !w-12 !h-12 bg-white shadow-lg rounded-full flex items-center justify-center cursor-pointer hover:bg-green-50 transition-colors hover:scale-110">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <div className="tutor-pagination mt-8 flex justify-center gap-2" />
            </Swiper>
          </motion.div>

          {/* Affiliates Section */}
          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-2xl font-bold text-gray-800 mb-8 pl-4 border-l-4 border-green-500 relative"
              variants={itemVariants}
            >
              Affiliate Partners
              <div className="absolute left-0 -bottom-2 w-8 h-1 bg-green-500 rounded-full" />
            </motion.h3>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              autoplay={{ delay: 6000 }}
              modules={[Autoplay]}
              className="relative"
            >
              {testimonials.affiliates.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <ProfileCard testimonial={testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PeopleLoveUs;