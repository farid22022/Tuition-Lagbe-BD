import React from "react";
import { motion } from "framer-motion";
import image from "./../../../../public/Images/undraw_educator_6dgp.svg";

const TutoringJobs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-gray-900 ">
      {/* Header Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-100px" }} // Adjust margin as needed
        transition={{ duration: 1 }}
      >
        <h3 className="text-2xl font-semibold">
          Find Your Tuition Jobs, in Your Area
        </h3>
      </motion.div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Image Section */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.img
            src={image}
            alt="Tutoring Jobs"
            className="w-full max-w-md rounded-lg shadow-2xl"
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h3
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Looking for interesting tuition jobs to excel your teaching experience?
          </motion.h3>

          <motion.p
            className="text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            If teaching jobs interest you, then you are in the right place. At
            tutorsheba.com, we often have 500+ open home tuition jobs that are
            genuine and 100% verified. Whether you are starting your career as a
            tuition teacher or an expert in your field, we can help you find your
            next big tuition job. You can search and apply to the tuition jobs
            that best fit your skills, favorable location, class, and subjects.
          </motion.p>

          <motion.button
            className="btn btn-primary btn-lg bg-white text-blue-600 hover:bg-gray-100 transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Search Tuition Jobs &rarr;
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default TutoringJobs;