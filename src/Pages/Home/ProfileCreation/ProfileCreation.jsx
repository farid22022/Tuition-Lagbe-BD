import React from 'react';
import { motion } from 'framer-motion';

// Animation variants for the container and items
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Stagger the animation of children
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 }, // Start hidden and slightly to the left
  visible: { opacity: 1, x: 0 }, // Animate to visible and move to the right
};

const ProfileCreation = () => {
  return (
    <motion.div
      className="flex flex-col gap-6 p-6 max-w-md mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Step 1: Create Profile */}
      <motion.div
        className="bg-gray-50 p-6 rounded-lg shadow-md"
        variants={itemVariants}
      >
        <h2 className="text-xl font-semibold mb-2">Create Profile</h2>
        <p className="text-gray-600">
          Create your profile in minutes with sign up information.
        </p>
      </motion.div>

      {/* Step 2: Complete Your Profile */}
      <motion.div
        className="bg-gray-50 p-6 rounded-lg shadow-md"
        variants={itemVariants}
      >
        <h2 className="text-xl font-semibold mb-2">Complete Your Profile</h2>
        <p className="text-gray-600">
          Make your profile at least 80% to get test responses.
        </p>
      </motion.div>

      {/* Step 3: Apply For Tuition Job */}
      <motion.div
        className="bg-gray-50 p-6 rounded-lg shadow-md"
        variants={itemVariants}
      >
        <h2 className="text-xl font-semibold mb-2">Apply For Tuition Job</h2>
        <p className="text-gray-600">
          Visit "Job Board" daily & apply for desired tuition jobs.
        </p>
      </motion.div>

      {/* Step 4: Start Tutoring */}
      <motion.div
        className="bg-gray-50 p-6 rounded-lg shadow-md"
        variants={itemVariants}
      >
        <h2 className="text-xl font-semibold mb-2">Start Tutoring</h2>
        <p className="text-gray-600">
          Be confident in the first meet & start tutoring.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ProfileCreation;