// import { useContext, useState } from "react";
// import { AuthContext } from "./../../providers/AuthProvider";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Profile = () => {
//   const { user, updateUserProfile, loading } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     first_name: user?.first_name || "",
//     image: null,
//   });
//   const [preview, setPreview] = useState(user?.image || "");
//   const [errors, setErrors] = useState({});
//   const [submitting, setSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "image" && files[0]) {
//       const file = files[0];
//       if (file.size > 5 * 1024 * 1024) { // 5MB limit
//         setErrors((prev) => ({ ...prev, image: "Image size must be less than 5MB" }));
//         return;
//       }
//       setFormData((prev) => ({ ...prev, image: file }));
//       setPreview(URL.createObjectURL(file));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//     setErrors((prev) => ({ ...prev, [name]: "" }));
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.first_name.trim()) {
//       newErrors.first_name = "Name is required";
//     }
//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formErrors = validateForm();
//     if (Object.keys(formErrors).length > 0) {
//       setErrors(formErrors);
//       return;
//     }

//     setSubmitting(true);
//     try {
//       await updateUserProfile(formData.first_name, formData.image);
//       toast.success("Profile updated successfully!", {
//         position: "top-right",
//         autoClose: 3000,
//       });
//       setTimeout(() => navigate("/user-dashboard/dashboard"), 2000);
//     } catch (error) {
//       const errorMsg = error.error || "Failed to update profile";
//       toast.error(errorMsg, {
//         position: "top-right",
//         autoClose: 3000,
//       });
//       setErrors({ non_field: errorMsg });
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-emerald-50/90">
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ repeat: Infinity, duration: 1 }}
//           className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full"
//         />
//       </div>
//     );
//   }

//   if (!user) {
//     navigate("/login");
//     return null;
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50/90 pt-24 pb-12 px-4">
//       <motion.div
//         className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl p-8"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, type: "spring" }}
//       >
//         <h1 className="text-3xl font-bold text-center text-emerald-600 mb-8">
//           Your Profile
//         </h1>

//         <div className="flex flex-col items-center mb-8">
//           <motion.img
//             src={preview || "https://via.placeholder.com/120"}
//             alt={user.first_name}
//             className="w-32 h-32 rounded-full object-cover border-4 border-emerald-400 mb-4"
//             whileHover={{ scale: 1.05 }}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//           />
//           <h2 className="text-xl font-semibold text-gray-800">{user.first_name}</h2>
//           <p className="text-gray-600">{user.phone}</p>
//         </div>

//         {errors.non_field && (
//           <motion.p
//             className="text-red-500 text-center mb-6 text-sm"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//           >
//             {errors.non_field}
//           </motion.p>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Name
//             </label>
//             <motion.input
//               type="text"
//               name="first_name"
//               value={formData.first_name}
//               onChange={handleChange}
//               className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 transition-all ${
//                 errors.first_name ? "border-red-500" : "border-gray-300"
//               }`}
//               placeholder="Enter your name"
//               whileFocus={{ scale: 1.02 }}
//             />
//             {errors.first_name && (
//               <p className="text-red-500 text-xs mt-1">{errors.first_name}</p>
//             )}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Profile Image
//             </label>
//             <input
//               type="file"
//               name="image"
//               accept="image/*"
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg border-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-emerald-100 file:text-emerald-700 hover:file:bg-emerald-200"
//             />
//             {errors.image && (
//               <p className="text-red-500 text-xs mt-1">{errors.image}</p>
//             )}
//           </div>

//           <motion.button
//             type="submit"
//             disabled={submitting}
//             className={`w-full py-3 bg-emerald-500 text-white rounded-lg font-semibold ${
//               submitting ? "opacity-50 cursor-not-allowed" : "hover:bg-emerald-600"
//             } transition-all`}
//             whileHover={{ scale: submitting ? 1 : 1.05 }}
//             whileTap={{ scale: submitting ? 1 : 0.95 }}
//           >
//             {submitting ? "Updating..." : "Update Profile"}
//           </motion.button>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default Profile;
import { useContext, useState } from "react";
import { AuthContext } from "./../../providers/AuthProvider";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const { user, updateUserProfile, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: user?.first_name || "",
    password: "",
    location: user?.location || "",
    image: null,
  });
  const [preview, setPreview] = useState(user?.image || "");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files[0]) {
      const file = files[0];
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, image: "Image size must be less than 5MB" }));
        return;
      }
      setFormData((prev) => ({ ...prev, image: file }));
      setPreview(URL.createObjectURL(file));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const uploadToImageBB = async (file) => {
    const apiKey = "757ec57b5f8a618a06dabaafb680a399"; // Replace with your ImageBB API key
    const formData = new FormData();
    formData.append("image", file);
    try {
      const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        return data.data.url;
      } else {
        throw new Error("Image upload failed");
      }
    } catch (error) {
      throw new Error("Failed to upload image to ImageBB",error);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.first_name.trim()) {
      newErrors.first_name = "Name is required";
    }
    if (formData.password && formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setSubmitting(true);
    try {
      let imageUrl = user?.image || "";
      if (formData.image) {
        imageUrl = await uploadToImageBB(formData.image);
      }

      await updateUserProfile(formData.first_name, formData.password, formData.location, imageUrl);
      toast.success("Profile updated successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
      setTimeout(() => navigate("/user-dashboard/dashboard"), 2000);
    } catch (error) {
      const errorMsg = error.error || "Failed to update profile";
      toast.error(errorMsg, {
        position: "top-right",
        autoClose: 3000,
      });
      setErrors({ non_field: errorMsg });
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-emerald-50/90">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50/90 pt-24 pb-12 px-4">
      <motion.div
        className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h1 className="text-3xl font-bold text-center text-emerald-600 mb-8">
          Your Profile
        </h1>

        <div className="flex flex-col items-center mb-8">
          <motion.img
            src={preview || "https://via.placeholder.com/120"}
            alt={user.first_name}
            className="w-32 h-32 rounded-full object-cover border-4 border-emerald-400 mb-4"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
          <h2 className="text-xl font-semibold text-gray-800">{user.first_name}</h2>
          <p className="text-gray-600">{user.phone}</p>
        </div>

        {errors.non_field && (
          <motion.p
            className="text-red-500 text-center mb-6 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {errors.non_field}
          </motion.p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <motion.input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 transition-all ${
                errors.first_name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your name"
              whileFocus={{ scale: 1.02 }}
            />
            {errors.first_name && (
              <p className="text-red-500 text-xs mt-1">{errors.first_name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <motion.input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 transition-all ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter new password (optional)"
              whileFocus={{ scale: 1.02 }}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <motion.input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 transition-all border-gray-300"
              placeholder="Enter your location (e.g., Dhaka, Bangladesh)"
              whileFocus={{ scale: 1.02 }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Profile Image
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg border-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-emerald-100 file:text-emerald-700 hover:file:bg-emerald-200"
            />
            {errors.image && (
              <p className="text-red-500 text-xs mt-1">{errors.image}</p>
            )}
          </div>

          <motion.button
            type="submit"
            disabled={submitting}
            className={`w-full py-3 bg-emerald-500 text-white rounded-lg font-semibold ${
              submitting ? "opacity-50 cursor-not-allowed" : "hover:bg-emerald-600"
            } transition-all`}
            whileHover={{ scale: submitting ? 1 : 1.05 }}
            whileTap={{ scale: submitting ? 1 : 0.95 }}
          >
            {submitting ? "Updating..." : "Update Profile"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Profile;