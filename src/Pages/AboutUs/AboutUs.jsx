// import React from 'react';
// import  {motion}  from 'framer-motion';
// import { FiUsers, FiTarget, FiAward, FiHeart, FiGlobe, FiBookOpen } from 'react-icons/fi';
// import farid from "./../../../public/Owners/Farid-C1sNQImq.png";
// import Raad from "./../../../public/Owners/470229533_1495206028066241_519080959017254600_n-removebg-preview.png";

// const AboutUs = () => {
//   const teamMembers = [
//     { 
//       id: 1, 
//       name: "Rezanul Haq Rad", 
//       role: "Founder & CEO", 
//       image: Raad, 
//       bio: "English major at Khulna University (Batch 22). Digital marketer with expertise in SEO, social media strategy, and brand management. Passionate about leveraging marketing strategies to create impactful educational platforms." 
//     },
//     { 
//       id: 2, 
//       name: "Md. Farid Hossen Rehad", 
//       role: "Chairman", 
//       image: farid, 
//       bio: "Full Stack Web Developer specializing in the MERN stack. Experienced in building scalable applications, AI integrations, and database systems. Also working on machine learning-based projects to enhance automation in education platforms." 
//     }
//   ];

//   const stats = [
//     { id: 1, title: "Active Students", value: "50,000+", icon: <FiUsers /> },
//     { id: 2, title: "Expert Tutors", value: "2,500+", icon: <FiTarget /> },
//     { id: 3, title: "Success Rate", value: "98%", icon: <FiAward /> },
//     { id: 4, title: "Satisfaction Rate", value: "99%", icon: <FiHeart /> },
//   ];

//   // Background icons data
//   const bgIcons = [
//     { icon: "📘", class: "text-4xl opacity-10" },
//     { icon: "🎓", class: "text-3xl opacity-10" },
//     { icon: "🧪", class: "text-4xl opacity-10" },
//     { icon: "📚", class: "text-4xl opacity-10" },
//     { icon: "🏫", class: "text-3xl opacity-10" },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50 relative overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden z-0">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             initial={{ y: -100, x: Math.random() * 100, opacity: 0 }}
//             animate={{ y: 2000, opacity: [0, 0.1, 0] }}
//             transition={{
//               duration: 15 + Math.random() * 10,
//               repeat: Infinity,
//               delay: Math.random() * 5,
//             }}
//             className="absolute"
//           >
//             <div className={bgIcons[i % bgIcons.length].class}>
//               {bgIcons[i % bgIcons.length].icon}
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Hero Section */}
//       <motion.div 
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="py-24 text-center relative z-10"
//       >
//         <div className="max-w-4xl mx-auto px-4">
//           <div className="mb-8 flex justify-center">
//             <motion.div 
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               className="bg-emerald-100 p-4 rounded-full"
//             >
//               <FiBookOpen className="text-4xl text-emerald-600" />
//             </motion.div>
//           </div>
//           <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-6">
//             Redefining Modern Education
//           </h1>
//           <p className="text-xl text-gray-600 mb-8">
//             Bridging academic excellence with innovative learning solutions for the digital age.
//           </p>
//         </div>
//       </motion.div>

//       {/* Mission Section */}
//       <div className="py-16 bg-white/50 backdrop-blur-sm relative z-10">
//         <div className="max-w-6xl mx-auto px-4">
//           <motion.div 
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             className="grid md:grid-cols-2 gap-12 items-center"
//           >
//             <div className="space-y-6">
//               <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Commitment</h2>
//               <p className="text-gray-600 text-lg leading-relaxed">
//                 At the core of our mission is a dedication to educational excellence through:
//               </p>
//               <ul className="space-y-4">
//                 {[
//                   "Cutting-edge curriculum design",
//                   "Research-backed teaching methodologies",
//                   "Holistic student development programs",
//                   "Continuous educator empowerment"
//                 ].map((item, index) => (
//                   <motion.li
//                     key={index}
//                     initial={{ x: -20 }}
//                     whileInView={{ x: 0 }}
//                     className="flex items-center gap-3 text-gray-600 bg-emerald-50 p-4 rounded-lg"
//                   >
//                     <FiGlobe className="text-emerald-600 min-w-[24px]" />
//                     <span className="font-medium">{item}</span>
//                   </motion.li>
//                 ))}
//               </ul>
//             </div>
//             <motion.div 
//               initial={{ scale: 0.9 }}
//               whileInView={{ scale: 1 }}
//               className="relative h-96 bg-gradient-to-br from-emerald-100 to-green-100 rounded-3xl overflow-hidden border-2 border-emerald-50"
//             >
//               <img 
//                 src="/path-to-education-image.jpg" 
//                 alt="Education" 
//                 className="object-cover w-full h-full"
//               />
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="py-16 relative z-10">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="grid md:grid-cols-4 gap-6">
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={stat.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-50 hover:shadow-md transition-shadow"
//               >
//                 <div className="text-4xl text-emerald-600 mb-4 flex justify-center">
//                   {stat.icon}
//                 </div>
//                 <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</h3>
//                 <p className="text-gray-600 font-medium">{stat.title}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Team Section */}
//       <div className="py-16 bg-white/50 backdrop-blur-sm relative z-10">
//         <div className="max-w-6xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Leadership Team</h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             {teamMembers.map((member, index) => (
//               <motion.div
//                 key={member.id}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-200"
//               >
//                 <div className="flex flex-col items-center p-6">
//                   <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
//                     <img 
//                       src={member.image} 
//                       alt={member.name} 
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="text-center">
//                     <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
//                     <p className="text-emerald-600 font-medium mb-4">{member.role}</p>
//                     <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
//                   </div>
//                 </div>
//                           </motion.div>
//                 ))}
//           </div>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="py-20 bg-gradient-to-r from-emerald-700 to-green-600 relative z-10">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             className="space-y-6"
//           >
//             <h2 className="text-3xl font-bold text-white mb-4">
//               Begin Your Educational Transformation
//             </h2>
//             <p className="text-white/90 text-xl mb-8">
//               Join our community of learners and educators shaping the future of education.
//             </p>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-all"
//             >
//               Start Learning Today
//             </motion.button>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;


import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiTarget, FiAward, FiHeart, FiGlobe, FiBookOpen } from 'react-icons/fi';
import farid from "./../../../public/Owners/Farid-C1sNQImq.png";
import Raad from "./../../../public/Owners/470229533_1495206028066241_519080959017254600_n-removebg-preview.png";

const AboutUs = () => {
  // ... (keep existing data arrays and imports)

    const teamMembers = [
    { 
      id: 1, 
      name: "Rezanul Haq Rad", 
      role: "Founder & CEO", 
      image: Raad, 
      bio: "English major at Khulna University (Batch 22). Digital marketer with expertise in SEO, social media strategy, and brand management. Passionate about leveraging marketing strategies to create impactful educational platforms." 
    },
    { 
      id: 2, 
      name: "Md. Farid Hossen Rehad", 
      role: "Chairman", 
      image: farid, 
      bio: "Full Stack Web Developer specializing in the MERN stack. Experienced in building scalable applications, AI integrations, and database systems. Also working on machine learning-based projects to enhance automation in education platforms." 
    }
  ];

  const stats = [
    { id: 1, title: "Active Students", value: "50,000+", icon: <FiUsers /> },
    { id: 2, title: "Expert Tutors", value: "2,500+", icon: <FiTarget /> },
    { id: 3, title: "Success Rate", value: "98%", icon: <FiAward /> },
    { id: 4, title: "Satisfaction Rate", value: "99%", icon: <FiHeart /> },
  ];

  // Background icons data
  const bgIcons = [
    { icon: "📘", class: "text-4xl opacity-10" },
    { icon: "🎓", class: "text-3xl opacity-10" },
    { icon: "🧪", class: "text-4xl opacity-10" },
    { icon: "📚", class: "text-4xl opacity-10" },
    { icon: "🏫", class: "text-3xl opacity-10" },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-100/40 to-transparent"></div>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
            initial={{
              scale: 0,
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              background: `conic-gradient(from ${Math.random() * 360}deg, #059669, #10b981, #059669)`
            }}
            animate={{
              scale: 1,
              rotate: 360,
              transition: {
                duration: 20 + Math.random() * 20,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          />
        ))}
      </motion.div>

      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
        className="py-24 text-center relative z-10"
      >
        <motion.div 
          variants={fadeInUp}
          className="max-w-4xl mx-auto px-4"
        >
          <motion.div 
            className="mb-8 flex justify-center"
            variants={floatingVariants}
            animate="float"
          >
            <div className="bg-emerald-100 p-4 rounded-full shadow-lg">
              <FiBookOpen className="text-4xl text-emerald-600" />
            </div>
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-6"
            variants={fadeInUp}
          >
            Redefining Modern Education
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 mb-8 md:text-2xl"
            variants={fadeInUp}
          >
            Bridging academic excellence with innovative learning solutions
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Mission Section */}
      <motion.section 
        className="py-16 bg-white/50 backdrop-blur-sm relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildren}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={staggerChildren}
          >
            <motion.div 
              className="space-y-6"
              variants={staggerChildren}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                variants={fadeInUp}
              >
                Our Commitment
              </motion.h2>
              <ul className="space-y-4">
                {[
                  "Cutting-edge curriculum design",
                  "Research-backed teaching methodologies",
                  "Holistic student development programs",
                  "Continuous educator empowerment"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInUp}
                    className="flex items-center gap-3 text-gray-600 bg-emerald-50 p-4 rounded-xl border border-emerald-100 hover:border-emerald-200 transition-all"
                    whileHover={{ x: 10 }}
                  >
                    <FiGlobe className="text-emerald-600 min-w-[24px] text-xl" />
                    <span className="font-medium md:text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              className="relative h-96 bg-gradient-to-br from-emerald-100 to-green-100 rounded-3xl overflow-hidden border-2 border-emerald-50 shadow-xl"
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src="/path-to-education-image.jpg" 
                alt="Education" 
                className="object-cover w-full h-full transform hover:scale-105 transition-transform"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="py-16 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-50 hover:shadow-md transition-all group"
                whileHover={{ y: -10 }}
              >
                <div className="text-4xl text-emerald-600 mb-4 flex justify-center">
                  <motion.div 
                    className="p-3 bg-emerald-50 rounded-lg"
                    whileHover={{ rotate: 15 }}
                  >
                    {stat.icon}
                  </motion.div>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</h3>
                <p className="text-gray-600 font-medium">{stat.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        className="py-16 bg-white/50 backdrop-blur-sm relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
            variants={fadeInUp}
          >
            Leadership Team
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all overflow-hidden border border-gray-200 group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex flex-col items-center p-8">
                  <motion.div 
                    className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-emerald-100 shadow-inner"
                    whileHover={{ scale: 1.1 }}
                  >
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform"
                    />
                  </motion.div>
                  <div className="text-center">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-emerald-600 font-medium mb-4">{member.role}</p>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-emerald-700 to-green-600 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Begin Your Educational Transformation
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-all flex items-center justify-center gap-3 mx-auto"
            >
              Start Learning Today
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUs;