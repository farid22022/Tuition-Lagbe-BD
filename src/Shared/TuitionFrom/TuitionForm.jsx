import React, { useState, useContext } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  MdLocationOn,
  MdTitle,
  MdSchool,
  MdEvent,
  MdPeople,
  MdAttachMoney,
  MdMenuBook,
  MdWork,
} from "react-icons/md";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import ScrumBoard from "./../../../public/Images/undraw_scrum-board_uqku.svg";

const TuitionForm = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const [formData, setFormData] = useState({
    location: "",
    title: "",
    type: "Home Tuition",
    medium: "Bangla Medium",
    days: "",
    student_class: "",
    subjects: "",
    preference: "Any",
    salary: "",
  });
  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.02 },
  };

  const svgVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        delay: 0.5,
      },
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.days.trim()) newErrors.days = "Days per week is required";
    if (!formData.student_class.trim())
      newErrors.student_class = "Class is required";
    if (!formData.subjects.trim()) newErrors.subjects = "Subjects are required";
    if (
      !formData.salary.trim() ||
      !/^\d{1,3}(,\d{3})*\s*TK\/(Month|Week)$/.test(formData.salary)
    ) {
      newErrors.salary = 'Salary must be in format like "4,000 TK/Month"';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setSubmissionStatus({
        type: "error",
        message: "Please log in to post a job.",
      });
      return;
    }

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const token = localStorage.getItem("access-token");
    console.log("Token before submit:", token); // Debug token
    if (!token) {
      setSubmissionStatus({
        type: "error",
        message: "No authentication token found. Please log in again.",
      });
      return;
    }

    try {
      const response = await axiosPublic.post("/job-postings/", formData);
      if (response.status !== 201) {
        throw new Error("Failed to post job");
      }

      setSubmissionStatus({
        type: "success",
        message: "Job posted successfully!",
      });
      setTimeout(() => navigate("/job-postings"), 2000);
    } catch (err) {
      const errorMessage = err.response?.data?.detail || err.message || "Failed to post job. Please try again.";
      setSubmissionStatus({
        type: "error",
        message: errorMessage.includes("<!DOCTYPE html>")
          ? "Server error: Please check the backend logs."
          : errorMessage,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50/90 pt-20 pb-12 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-emerald-100/40 to-blue-100/30"
        style={{ y: yBg }}
        animate={{
          background: [
            "linear-gradient(45deg, #f0fdfa 0%, #ecfeff 100%)",
            "linear-gradient(135deg, #ecfeff 0%, #f0fdfa 100%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="bg-transparent rounded-[2rem] p-10 border border-gray-100/60 backdrop-blur-lg relative z-10 flex flex-col lg:flex-row justify-between"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="w-full lg:w-1/2 lg:pr-12">
            <h1 className="text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Fill Up The Form For Getting Tuition
            </h1>

            {submissionStatus && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-8 p-4 rounded-xl flex items-center gap-3 font-serif font-extrabold ${
                  submissionStatus.type === "success"
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-red-50 text-red-700"
                }`}
              >
                <span>{submissionStatus.message}</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div variants={itemVariants} whileHover="hover">
                  <label className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <MdLocationOn className="text-emerald-600 text-xl shrink-0" />
                    Location
                  </label>
                  <motion.input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Enter full address"
                    className={`w-full p-3.5 border-2 rounded-xl focus:ring-4 ${
                      errors.location
                        ? "border-red-500 ring-red-100"
                        : "border-gray-200 ring-emerald-100"
                    } transition-all duration-200 placeholder-gray-400`}
                    whileFocus={{ scale: 1.01 }}
                  />
                  {errors.location && (
                    <motion.p className="text-red-500 text-xs mt-2 pl-1">
                      {errors.location}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div variants={itemVariants} whileHover="hover">
                  <label className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <MdTitle className="text-emerald-600 text-xl shrink-0" />
                    Tuition Title
                  </label>
                  <motion.input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="e.g., Mathematics Tutor Needed"
                    className={`w-full p-3.5 border-2 rounded-xl focus:ring-4 ${
                      errors.title
                        ? "border-red-500 ring-red-100"
                        : "border-gray-200 ring-emerald-100"
                    } transition-all duration-200 placeholder-gray-400`}
                    whileFocus={{ scale: 1.01 }}
                  />
                  {errors.title && (
                    <motion.p className="text-red-500 text-xs mt-2 pl-1">
                      {errors.title}
                    </motion.p>
                  )}
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div variants={itemVariants} whileHover="hover">
                  <label className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <MdWork className="text-emerald-600 text-xl shrink-0" />
                    Tuition Type
                  </label>
                  <motion.select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full p-3.5 border-2 border-gray-200 rounded-xl focus:ring-4 ring-emerald-100 appearance-none bg-select-arrow"
                    whileFocus={{ scale: 1.01 }}
                  >
                    <option value="Home Tuition">Home Tuition</option>
                    <option value="Online Tuition">Online Tuition</option>
                  </motion.select>
                </motion.div>

                <motion.div variants={itemVariants} whileHover="hover">
                  <label className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <MdSchool className="text-emerald-600 text-xl shrink-0" />
                    Education Medium
                  </label>
                  <motion.select
                    name="medium"
                    value={formData.medium}
                    onChange={handleChange}
                    className="w-full p-3.5 border-2 border-gray-200 rounded-xl focus:ring-4 ring-emerald-100 appearance-none bg-select-arrow"
                    whileFocus={{ scale: 1.01 }}
                  >
                    <option value="Bangla Medium">Bangla Medium</option>
                    <option value="English Medium">English Medium</option>
                    <option value="English Version">English Version</option>
                    <option value="Madrasa">Madrasa</option>
                  </motion.select>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div variants={itemVariants} whileHover="hover">
                  <label className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <MdEvent className="text-emerald-600 text-xl shrink-0" />
                    Schedule
                  </label>
                  <motion.input
                    type="text"
                    name="days"
                    value={formData.days}
                    onChange={handleChange}
                    placeholder="e.g., 4 Days/Week"
                    className={`w-full p-3.5 border-2 rounded-xl focus:ring-4 ${
                      errors.days
                        ? "border-red-500 ring-red-100"
                        : "border-gray-200 ring-emerald-100"
                    } transition-all duration-200 placeholder-gray-400`}
                    whileFocus={{ scale: 1.01 }}
                  />
                  {errors.days && (
                    <motion.p className="text-red-500 text-xs mt-2 pl-1">
                      {errors.days}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div variants={itemVariants} whileHover="hover">
                  <label className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <MdPeople className="text-emerald-600 text-xl shrink-0" />
                    Student Class
                  </label>
                  <motion.input
                    type="text"
                    name="student_class"
                    value={formData.student_class}
                    onChange={handleChange}
                    placeholder="e.g., Class 9-10"
                    className={`w-full p-3.5 border-2 rounded-xl focus:ring-4 ${
                      errors.student_class
                        ? "border-red-500 ring-red-100"
                        : "border-gray-200 ring-emerald-100"
                    } transition-all duration-200 placeholder-gray-400`}
                    whileFocus={{ scale: 1.01 }}
                  />
                  {errors.student_class && (
                    <motion.p className="text-red-500 text-xs mt-2 pl-1">
                      {errors.student_class}
                    </motion.p>
                  )}
                </motion.div>
              </div>

              <motion.div variants={itemVariants} whileHover="hover">
                <label className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  <MdMenuBook className="text-emerald-600 text-xl shrink-0" />
                  Subjects Required
                </label>
                <motion.input
                  type="text"
                  name="subjects"
                  value={formData.subjects}
                  onChange={handleChange}
                  placeholder="List subjects (e.g., Physics, Chemistry)"
                  className={`w-full p-3.5 border-2 rounded-xl focus:ring-4 ${
                    errors.subjects
                      ? "border-red-500 ring-red-100"
                      : "border-gray-200 ring-emerald-100"
                  } transition-all duration-200 placeholder-gray-400`}
                  whileFocus={{ scale: 1.01 }}
                />
                {errors.subjects && (
                  <motion.p className="text-red-500 text-xs mt-2 pl-1">
                    {errors.subjects}
                  </motion.p>
                )}
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div variants={itemVariants} whileHover="hover">
                  <label className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <MdAttachMoney className="text-emerald-600 text-xl shrink-0" />
                    Salary Offer
                  </label>
                  <motion.input
                    type="text"
                    name="salary"
                    value={formData.salary}
                    onChange={handleChange}
                    placeholder="e.g., 5,000 TK/Month"
                    className={`w-full p-3.5 border-2 rounded-xl focus:ring-4 ${
                      errors.salary
                        ? "border-red-500 ring-red-100"
                        : "border-gray-200 ring-emerald-100"
                    } transition-all duration-200 placeholder-gray-400`}
                    whileFocus={{ scale: 1.01 }}
                  />
                  {errors.salary && (
                    <motion.p className="text-red-500 text-xs mt-2 pl-1">
                      {errors.salary}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div
                  className="flex items-end justify-end"
                  variants={itemVariants}
                >
                  <motion.button
                    type="submit"
                    className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:gap-3 shadow-xl hover:shadow-emerald-100/50 transition-all"
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 15px 25px rgba(5, 150, 105, 0.15)",
                    }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Post Opportunity
                    <MdWork className="text-xl" />
                  </motion.button>
                </motion.div>
              </div>
            </form>
          </div>

          <motion.div
            className="hidden lg:flex w-1/2 items-center justify-center pl-12"
            variants={svgVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.img
              src={ScrumBoard}
              alt="Education board illustration"
              className="w-full h-auto max-w-[600px]"
              animate={{
                y: [-10, 10, -10],
                rotate: [-3, 3, -3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                yoyo: Infinity,
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-10 h-10 bg-emerald-100/40 rounded-lg"
            initial={{
              scale: 0,
              x: Math.random() * 1000,
              y: Math.random() * 1000,
              rotate: Math.random() * 180,
            }}
            animate={{
              scale: [0, 1, 0],
              rotate: [0, 180],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default TuitionForm;