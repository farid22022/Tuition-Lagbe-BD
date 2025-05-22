// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
// import { useState } from "react";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);

//   const navItems = ["Home", "Tuition Jobs", "Tutors", "Tutor Request", "About Us","Dashboard"];

//   const getLinkPath = (item) => {
//     if (item ==="Dashboard") {
//       return "user-dashboard/dashboard";
//     }
//     if (item === "Home") return "/";
//     return `/${item.toLowerCase().replace(' ', '-')}`;
//   };

//   const navOptions = (
//     <div className="hidden lg:flex space-x-4 xl:space-x-8 items-center ">
//       {navItems.map((item) => (
//         <motion.div
//           key={item}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           transition={{ type: "spring", stiffness: 400 }}
//         >
//           <Link
//             to={getLinkPath(item)}
//             className="text-green-600 hover:text-green-500 transition-colors duration-300 relative group text-sm xl:text-base"
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//           >
//             {item}
//             <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-emerald-300 transition-all duration-300 group-hover:w-full"></span>
//           </Link>
//         </motion.div>
//       ))}
//     </div>
//   );

//   const mobileNavOptions = (
//     <div className="flex flex-col space-y-6 p-4 md:p-6 ">
//       {navItems.map((item) => (
//         <motion.div
//           key={item}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={() => setIsMenuOpen(false)}
//         >
//           <Link
//             to={getLinkPath(item)}
//             className="text-emerald-100 hover:text-emerald-50 text-lg md:text-xl"
//           >
//             {item}
//           </Link>
//         </motion.div>
//       ))}
//     </div>
//   );

//   const socialLinks = (
//     <div className="flex space-x-4 md:space-x-6 items-center">
//       <Link to ="sign-up">
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
//         >
//           Login
//         </motion.button>
//       </Link>
//     </div>
//   );

//   return (
//     <motion.header
//       className="fixed w-full top-0 z-50 backdrop-blur-lg bg-black shadow-lg border-b border-emerald-800 md:z-80"
//       initial={{ y: -100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ type: "spring", stiffness: 200, damping: 20 }}
//     >
//       <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="flex items-center space-x-2"
//           >
//             <Link
//               to="/"
//               className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-300 to-green-500 bg-clip-text text-transparent"
//             >
//               Tuition Lagbe
//             </Link>
//           </motion.div>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex flex-1 justify-center mx-4">
//             {navOptions}
//           </div>

//           {/* Social Links */}
//           <div className="hidden lg:flex">{socialLinks}</div>

//           {/* Mobile Menu Button */}
//           <div className="lg:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-green-600 hover:text-green-500 transition-colors p-2"
//             >
//               {isMenuOpen ? (
//                 <FiX className="w-6 h-6 md:w-7 md:h-7" />
//               ) : (
//                 <FiMenu className="w-6 h-6 md:w-7 md:h-7" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//             className="lg:hidden mt-2 md:mt-4 border-t border-emerald-700"
//           >
//             {mobileNavOptions}
//             <div className="flex justify-center pb-4">{socialLinks}</div>
//           </motion.div>
//         )}
//       </nav>
//     </motion.header>
//   );
// };

// export default Header;

import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navItems = ["Home", "Tuition Jobs", "Tutors", "Tutor Request", "About Us", "Dashboard"];

  const getLinkPath = (item) => {
    if (item === "Dashboard") return "user-dashboard/dashboard";
    if (item === "Home") return "/";
    return `/${item.toLowerCase().replace(' ', '-')}`;
  };

  // Animation variants
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 200,
        damping: 20,
        mass: 0.5
      }
    }
  };

  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300
      }
    })
  };

  const mobileMenuVariants = {
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.7
      }
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        type: "spring",
        bounce: 0.1,
        duration: 0.3
      }
    }
  };

  const navOptions = (
    <div className="hidden lg:flex space-x-4 xl:space-x-8 items-center">
      {navItems.map((item, i) => (
        <motion.div
          key={item}
          variants={navItemVariants}
          custom={i}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to={getLinkPath(item)}
            className={`relative px-3 py-2 text-sm xl:text-base ${
              activeLink === item 
                ? "text-emerald-400" 
                : "text-green-600 hover:text-green-500"
            } transition-colors duration-300`}
            onClick={() => setActiveLink(item)}
          >
            {item}
            {activeLink === item && (
              <motion.div 
                className="absolute bottom-0 left-0 w-full h-[2px] bg-emerald-400"
                layoutId="activeLink"
                transition={{ type: "spring", stiffness: 500 }}
              />
            )}
          </Link>
        </motion.div>
      ))}
    </div>
  );

  const mobileNavOptions = (
    <motion.div className="flex flex-col space-y-6 p-4 md:p-6 bg-black/95">
      {navItems.map((item, i) => (
        <motion.div
          key={item}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: i * 0.1, type: "spring" }}
          onClick={() => {
            setIsMenuOpen(false);
            setActiveLink(item);
          }}
        >
          <Link
            to={getLinkPath(item)}
            className={`text-lg md:text-xl ${
              activeLink === item 
                ? "text-emerald-400 font-medium" 
                : "text-emerald-100 hover:text-emerald-50"
            }`}
          >
            {item}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );

  const socialLinks = (
    <motion.div 
      className="flex space-x-4 md:space-x-6 items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Link to="sign-up">
        <motion.button
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 4px 14px rgba(16, 185, 129, 0.2)"
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2.5 rounded-lg transition-all duration-300 flex items-center gap-2"
        >
          <span>Login</span>
          <motion.div
            animate={{ x: [-2, 2, -2] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.div>
        </motion.button>
      </Link>
    </motion.div>
  );

  return (
    <motion.header
      className="fixed w-full top-0 z-50 backdrop-blur-lg bg-black/80 shadow-xl border-b border-emerald-800/30"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2"
          >
            <Link
              to="/"
              className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-300 to-green-500 bg-clip-text text-transparent"
            >
              Tuition Lagbe
              <motion.div 
                className="h-[2px] bg-emerald-400 mt-1"
                animate={{ width: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center mx-4">
            {navOptions}
          </div>

          {/* Social Links */}
          <div className="hidden lg:flex">{socialLinks}</div>

          {/* Mobile Menu Button */}
          <motion.div 
            className="lg:hidden"
            whileHover={{ scale: 1.1 }}
          >
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-green-600 hover:text-green-500 transition-colors p-2"
            >
              {isMenuOpen ? (
                <FiX className="w-6 h-6 md:w-7 md:h-7" />
              ) : (
                <FiMenu className="w-6 h-6 md:w-7 md:h-7" />
              )}
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden overflow-hidden"
            >
              {mobileNavOptions}
              <motion.div 
                className="flex justify-center pb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {socialLinks}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;