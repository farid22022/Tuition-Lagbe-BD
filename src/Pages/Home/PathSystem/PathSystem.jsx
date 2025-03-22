import React from 'react';
import { motion } from 'framer-motion';

const ProfileCreation = () => {
  const steps = [
    { 
      title: "Create Profile", 
      subtitle: "Create your profile in minutes with sign up information.",
      emoji: "📝", 
      color: "bg-blue-400" 
    },
    { 
      title: "Complete Your Profile", 
      subtitle: "Make your profile at least 80% to get test responses.",
      emoji: "✅", 
      color: "bg-green-400" 
    },
    { 
      title: "Apply For Tuition Job", 
      subtitle: "Visit 'Job Board' daily & apply for desired tuition jobs.",
      emoji: "💼", 
      color: "bg-yellow-400" 
    },
    { 
      title: "Start Tutoring", 
      subtitle: "Be confident in the first meet & start tutoring.",
      emoji: "👩🏫", 
      color: "bg-purple-400" 
    }
  ];

  return (
    <div className="min-h-screen bg-[#FBFFE6] p-4 md:p-8 flex items-center justify-center">
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
              className={`relative md:absolute w-full md:w-64 h-40 rounded-lg shadow-lg p-4 ${step.color} text-white
                max-md:mx-auto max-md:max-w-[320px] hover:shadow-xl transition-shadow`}
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
              <div className='flex gap-4 h-full'>
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
                  <h3 className="text-base md:text-lg font-semibold text-left mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-200">
                    {step.subtitle}
                  </p>
                </div>
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
  );
};

export default ProfileCreation;