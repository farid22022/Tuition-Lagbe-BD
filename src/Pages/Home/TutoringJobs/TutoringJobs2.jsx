import React from "react";
import { motion } from "framer-motion";
import image from "./../../../../public/Images/undraw_educator_6dgp.svg";

const TutoringJobs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-[#f8fafc]">
      {/* Header Section */}
      <motion.div
        className="text-center mb-16 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Discover Premium{" "}
          <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
            Teaching Opportunities
          </span>{" "}
          in Your Region
        </h3>
        <div className="h-1 w-24 bg-green-500 mx-auto rounded-full" />
      </motion.div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-7xl mx-auto">
        {/* Image Section */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.img
            src={image}
            alt="Professional Tutoring"
            className="w-full max-w-xl rounded-xl "
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="flex-1 text-center md:text-left space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Elevate Your Teaching Career with Verified Tutoring Positions
          </motion.h3>

          <motion.p
            className="text-lg text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Join Bangladesh's most trusted tutoring platform with 500+ authenticated 
            teaching opportunities. Whether you're beginning your educational journey 
            or are an experienced educator, find positions that align perfectly with your:
          </motion.p>

          <motion.ul
            className="grid grid-cols-2 gap-4 text-left text-gray-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {['Subject Expertise', 'Preferred Location', 'Grade Levels', 'Schedule Flexibility'].map((item) => (
              <li key={item} className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>

          <motion.button
            className="mt-8 bg-gradient-to-r from-green-600 to-emerald-500 text-white 
                     px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg
                     transition-all duration-300 hover:scale-[1.02] flex items-center gap-2 mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Explore Current Openings
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default TutoringJobs;