

import React from "react";
import { motion } from "framer-motion";
import image from "./../../../../public/Images/undraw_educator_6dgp.svg";

const TutoringJobs = () => {
  const listItems = ['Subject Expertise', 'Preferred Location', 'Grade Levels', 'Schedule Flexibility'];
  
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
    hidden: { 
      y: 30,
      opacity: 0,
      scale: 0.95
    },
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

  const floatingVariants = {
    float: {
      y: ["0%", "-3%", "0%"],
      rotate: [0, 0.5, -0.5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 lg:px-12 bg-[#f8fafc] overflow-hidden">
      {/* Header Section */}
      <motion.div
        className="text-center mb-12 md:mb-16 lg:mb-20 max-w-4xl mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ margin: "-100px", once: true }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 20
        }}
      >
        <motion.h3
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight"
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          transition={{ type: "spring", delay: 0.2 }}
        >
          Discover Premium{" "}
          <motion.span
            className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent"
            initial={{ backgroundPositionX: "0%" }}
            animate={{ backgroundPositionX: "100%" }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            Teaching Opportunities
          </motion.span>{" "}
          in Your Region
        </motion.h3>
        
        <motion.div
          className="h-1 w-24 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </motion.div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 max-w-7xl mx-auto w-full">
        {/* Image Section */}
        <motion.div
          className="flex-1 w-full max-w-xl lg:max-w-2xl relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.2
          }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-green-100 to-emerald-100 blur-2xl opacity-50 -z-10"
            variants={floatingVariants}
            animate="float"
          />
          <motion.img
            src={image}
            alt="Professional Tutoring"
            className="w-full rounded-2xl "
            variants={floatingVariants}
            animate="float"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="flex-1 w-full max-w-2xl space-y-6 md:space-y-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.4
          }}
        >
          <motion.h3
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight"
            variants={itemVariants}
          >
            Elevate Your Teaching Career with Verified Tutoring Positions
          </motion.h3>

          <motion.p
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
            variants={itemVariants}
          >
            Join Bangladesh's most trusted tutoring platform with 500+ authenticated 
            teaching opportunities. Whether you're beginning your educational journey 
            or are an experienced educator, find positions that align perfectly with your:
          </motion.p>

          <motion.ul
            className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-gray-700"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {listItems.map((item) => (
              <motion.li
                key={item}
                className="flex items-center space-x-3 p-3 md:p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                variants={itemVariants}
                whileHover={{ y: -3 }}
              >
                <svg
                  className="w-6 h-6 text-emerald-500 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base md:text-lg">{item}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            variants={itemVariants}
            className="pt-4"
          >
            <motion.button
              className="w-full md:w-auto bg-gradient-to-r from-green-600 to-emerald-500 text-white 
                       px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl
                       transition-all duration-300 flex items-center justify-center gap-3
                       group transform hover:scale-[1.02]"
              whileHover={{ 
                boxShadow: "0 10px 20px rgba(5, 150, 105, 0.2)",
                x: 5
              }}
              whileTap={{ scale: 0.98 }}
            >
              <svg
                className="w-6 h-6 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span>Explore Current Openings</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TutoringJobs;