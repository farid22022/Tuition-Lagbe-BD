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

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#FBFFE6] to-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-8 bg-gradient-to-r from-green-200 to-green-300 rounded-full blur-sm"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
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

      <div className="relative z-10 min-h-[800px] flex items-center justify-center p-8">
        <div className="w-full max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                Start Your Teaching Journey
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to begin your tutoring career with us
            </p>
          </motion.div>

          {/* Steps Container */}
          <div className="relative w-full max-w-6xl mx-auto min-h-[500px] md:h-[600px]">
            {/* Diagonal Dotted Path (Desktop) */}
            <motion.svg
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full hidden md:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M 5 15 L 95 85"
                fill="none"
                stroke="#cbd5e1"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
            </motion.svg>

            {/* Vertical Line (Mobile) */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="absolute left-1/2 w-0.5 bg-gray-200 h-full hidden max-md:block"
              style={{ strokeDasharray: "4 4" }}
            />

            <div className="grid md:grid-cols-4 max-md:grid-rows-4 gap-8 md:gap-0 h-full">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ margin: "20% 0px -20% 0px" }}
                  transition={{
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 50
                  }}
                  className={`relative md:absolute w-full md:w-72 h-48 rounded-xl shadow-2xl p-6 bg-gradient-to-br ${step.color} text-white
                    max-md:mx-auto max-md:max-w-[320px] hover:shadow-2xl transition-all group`}
                  style={{
                    left: `${index * 25 + 5}%`,
                    top: `${index * 20 + 5}%`,
                    ...(window.innerWidth < 768 && {
                      left: 'auto',
                      top: 'auto',
                      position: 'relative'
                    })
                  }}
                >
                  {/* Animated Background */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute -left-20 -top-20 w-40 h-40 bg-white/10 rounded-full blur-xl animate-spin-slow" />
                    <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-white/10 rounded-full blur-xl animate-spin-slow reverse" />
                  </div>

                  <div className='flex gap-4 h-full relative z-10'>
                    <div className="flex-shrink-0">
                      <motion.span 
                        className="text-4xl"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {step.emoji}
                      </motion.span>
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-left mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-100">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                    <span className="text-xl font-bold text-gray-800">
                      {index + 1}
                    </span>
                  </div>

                  {/* Mobile Connection Dots */}
                  {index !== steps.length - 1 && (
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 md:hidden">
                      <div className="h-4 w-1 bg-gray-300 mx-auto" />
                      <div className="h-4 w-1 bg-gray-300 mx-auto mt-1" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCreation;