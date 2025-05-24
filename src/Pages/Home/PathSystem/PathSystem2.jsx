
import React from "react";
import { motion } from "framer-motion";

const ProfileCreation = () => {
  const steps = [
    { 
      title: "Create Profile", 
      subtitle: "Create your profile in minutes with sign up information.",
      emoji: "📝", 
      color: "from-blue-400 to-blue-500" 
    },
    { 
      title: "Complete Your Profile", 
      subtitle: "Make your profile at least 80% to get test responses.",
      emoji: "✅", 
      color: "from-green-400 to-green-500" 
    },
    { 
      title: "Apply For Tuition Job", 
      subtitle: "Visit 'Job Board' daily & apply for desired tuition jobs.",
      emoji: "💼", 
      color: "from-yellow-400 to-yellow-500" 
    },
    { 
      title: "Start Tutoring", 
      subtitle: "Be confident in the first meet & start tutoring.",
      emoji: "👩🏫", 
      color: "from-purple-400 to-purple-500" 
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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

  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#FBFFE6] to-white overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 overflow-hidden"
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-8 bg-gradient-to-r from-green-200 to-green-300 rounded-full blur-lg opacity-50"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              x: ["0%", "20%", "0%"],
              y: ["0%", "30%", "0%"],
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

      <div className="relative z-10 min-h-[800px] flex items-center justify-center p-4 md:p-8">
        <motion.div
          className="w-full max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div
            className="text-center mb-12 md:mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                Start Your Teaching Journey
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to begin your tutoring career with us
            </p>
          </motion.div>

          {/* Steps Container */}
          <div className="relative w-full max-w-6xl mx-auto min-h-[500px] md:h-[600px]">
            {/* Animated Path */}
            <motion.svg
              className="absolute inset-0 w-full h-full hidden md:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M 5 15 L 95 85"
                fill="none"
                stroke="#cbd5e1"
                strokeWidth="2"
                strokeDasharray="4 4"
                variants={pathVariants}
                initial="hidden"
                whileInView="visible"
              />
            </motion.svg>

            <div className="grid md:grid-cols-4 max-md:grid-rows-4 gap-12 md:gap-10 h-full">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative md:absolute w-full md:w-72 h-48 rounded-2xl shadow-xl p-6 bg-gradient-to-br ${step.color} text-white
                    max-md:mx-auto max-md:max-w-[320px] hover:shadow-2xl transition-all group`}
                  style={{
                    left: `${index * 25 + 5}%`,
                    top: `${index * 20 + 5}%`,
                  }}
                  whileHover={{ y: -10 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Animated Background */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <motion.div
                      className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{
                        x: [-100, 200],
                        y: [-50, 150],
                        rotate: 45
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </div>

                  <div className='flex gap-4 h-full relative z-10'>
                    <motion.div
                      className="flex-shrink-0"
                      animate={{ rotate: [0, 15, 0] }}
                      transition={{ duration: 6, repeat: Infinity }}
                    >
                      <span className="text-4xl">{step.emoji}</span>
                    </motion.div>
                    <div className="flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-left mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-100 opacity-90">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Step Number */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.3 }}
                  >
                    <span className="text-xl font-bold text-gray-800">
                      {index + 1}
                    </span>
                  </motion.div>

                  {/* Mobile Connection */}
                  {index !== steps.length - 1 && (
                    <motion.div
                      className="absolute -bottom-8 left-1/2 -translate-x-1/2 md:hidden"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                    >
                      <div className="h-4 w-1 bg-gray-300 mx-auto animate-pulse" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfileCreation;