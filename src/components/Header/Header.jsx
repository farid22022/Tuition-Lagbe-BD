

import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiUser, FiLogOut, FiGrid, FiLogIn } from "react-icons/fi";
import { useState, useContext } from "react";
import { AuthContext } from "./../../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navItems = ["Home", "Tuition Jobs", "Tutors", "Tutor Request", "About Us"];

  const getLinkPath = (item) => {
    if (item === "Home") return "/";
    if (item === "Tutor Request") return "/tuition-form";
    return `/${item.toLowerCase().replace(" ", "-")}`;
  };

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        mass: 0.5,
      },
    },
  };

  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
      },
    }),
  };

  const mobileMenuVariants = {
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.7,
      },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        type: "spring",
        bounce: 0.1,
        duration: 0.3,
      },
    },
  };

  const dropdownVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    closed: {
      opacity: 0,
      y: -10,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  const handleLogout = async () => {
    await logOut();
    setIsDropdownOpen(false);
  };

  const navOptions = (
    <div className="hidden lg:flex space-x-4 xl:space-x-8 items-center mb-6">
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
    <motion.div className="flex flex-col space-y-6 p-4 md:p-6 bg-black/95 mb-10 rounded-lg shadow-lg">
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

  const dropdownMenu = (
    <motion.div
      variants={dropdownVariants}
      initial="closed"
      animate={isDropdownOpen ? "open" : "closed"}
      className="absolute top-16 right-4 w-48 bg-black/95 rounded-lg shadow-xl p-4 z-50"
    >
      <Link
        to="/profile"
        onClick={() => setIsDropdownOpen(false)}
        className="flex items-center space-x-3 text-emerald-100 hover:text-emerald-400 py-2 px-3 rounded-lg transition-colors"
      >
        <FiUser className="w-5 h-5" />
        <span>Profile</span>
      </Link>
      <Link
        to="/user-dashboard/dashboard"
        onClick={() => setIsDropdownOpen(false)}
        className="flex items-center space-x-3 text-emerald-100 hover:text-emerald-400 py-2 px-3 rounded-lg transition-colors"
      >
        <FiGrid className="w-5 h-5" />
        <span>Dashboard</span>
      </Link>
      <button
        onClick={handleLogout}
        className="flex items-center space-x-3 text-emerald-100 hover:text-red-400 py-2 px-3 rounded-lg transition-colors w-full text-left"
      >
        <FiLogOut className="w-5 h-5" />
        <span>Logout</span>
      </button>
    </motion.div>
  );

  const userProfile = user ? (
    <div className="relative">
      <motion.img
        src={user.image || "https://via.placeholder.com/40"}
        alt={user.first_name}
        className="w-10 h-10 rounded-full object-cover border-2 border-emerald-400 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      />
      <AnimatePresence>
        {isDropdownOpen && dropdownMenu}
      </AnimatePresence>
    </div>
  ) : (
    <Link to="/login">
      <motion.button
        whileHover={{
          scale: 1.05,
          boxShadow: "0 4px 14px rgba(16, 185, 129, 0.2)",
        }}
        whileTap={{ scale: 0.95 }}
        className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2.5 rounded-lg transition-all duration-300 flex items-center gap-2"
      >
        <FiLogIn className="w-5 h-5" />
        <span>Login</span>
      </motion.button>
    </Link>
  );

  const mobileUserProfile = user ? (
    <div className="relative flex flex-col items-center space-y-4 p-4">
      <motion.img
        src={user.image || "https://via.placeholder.com/40"}
        alt={user.first_name}
        className="w-12 h-12 rounded-full object-cover border-2 border-emerald-400 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      />
      <span className="text-emerald-100 font-medium">{user.first_name}</span>
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            variants={dropdownVariants}
            initial="closed"
            animate={isDropdownOpen ? "open" : "closed"}
            className="w-full bg-black/95 rounded-lg shadow-xl p-4"
          >
            <Link
              to="/profile"
              onClick={() => {
                setIsDropdownOpen(false);
                setIsMenuOpen(false);
              }}
              className="flex items-center space-x-3 text-emerald-100 hover:text-emerald-400 py-2 px-3 rounded-lg transition-colors"
            >
              <FiUser className="w-5 h-5" />
              <span>Profile</span>
            </Link>
            <Link
              to="/user-dashboard/dashboard"
              onClick={() => {
                setIsDropdownOpen(false);
                setIsMenuOpen(false);
              }}
              className="flex items-center space-x-3 text-emerald-100 hover:text-emerald-400 py-2 px-3 rounded-lg transition-colors"
            >
              <FiGrid className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
            <button
              onClick={() => {
                handleLogout();
                setIsMenuOpen(false);
              }}
              className="flex items-center space-x-3 text-emerald-100 hover:text-red-400 py-2 px-3 rounded-lg transition-colors w-full text-left"
            >
              <FiLogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  ) : (
    <Link to="/login">
      <motion.button
        whileHover={{
          scale: 1.05,
          boxShadow: "0 4px 14px rgba(16, 185, 129, 0.2)",
        }}
        whileTap={{ scale: 0.95 }}
        className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg transition-all duration-300 w-full text-center flex items-center justify-center gap-2"
      >
        <FiLogIn className="w-5 h-5" />
        <span>Login</span>
      </motion.button>
    </Link>
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
          <div className="hidden lg:flex flex-1 justify-center mx-4">{navOptions}</div>

          {/* User Profile / Login (Desktop) */}
          <div className="hidden lg:flex">{userProfile}</div>

          {/* Mobile Menu Button */}
          <motion.div className="lg:hidden" whileHover={{ scale: 1.1 }}>
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
                {mobileUserProfile}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;