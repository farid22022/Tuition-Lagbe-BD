
// export default Dashboard;
import { useState } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FiCheckSquare, 
  FiSquare, 
  FiMenu,
  FiX,
  FiFilm,
  FiLogOut
} from "react-icons/fi";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { path: "/dashboard", icon: <FiCheckSquare />, label: "Dashboard",  },
    { path: "/dashboard/tuition-jobs", icon: <FiCheckSquare />, label: "Tuition Jobs",  },
    { path: "/dashboard/profile", icon: <FiCheckSquare />, label: "My Profile",  },
    { path: "/dashboard/history", icon: <FiSquare />, label: "Tutoring History",  },
    { path: "/dashboard/payment", icon: <FiSquare />, label: "My Payment",  },
    { path: "/dashboard/confirmation", icon: <FiSquare />, label: "Confirmation Letter",  },
    { path: "/dashboard/affiliate", icon: <FiCheckSquare />, label: "Affiliate Partner",  },
    { path: "/dashboard/membership", icon: <FiSquare />, label: "Membership Plan",  },
    { path: "/dashboard/premium", icon: <FiSquare />, label: "Premium Request",  },
    { path: "/dashboard/verification", icon: <FiSquare />, label: "Verification Request",  },
    { path: "/dashboard/batches", icon: <FiSquare />, label: "My Batches",  },
    { path: "/dashboard/community", icon: <FiSquare />, label: "Join Community",  },
    { path: "/dashboard/settings", icon: <FiSquare />, label: "Settings",  }
  ];

  return (
    <div className="flex h-screen mt-20 bg-gray-50">
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-14 left-2 z-50 p-2 bg-slate-800 text-white rounded-lg"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen || <FiMenu size={24} />  }
      </button>

      {/* Dashboard Sidebar */}
      <div
        className={`w-64 bg-slate-900 flex flex-col justify-between fixed md:relative h-full transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} z-40`}
      >
        {/* Close Button for Mobile */}
        <div className="md:hidden absolute top-4 right-4">
          <FiX
            className="text-white cursor-pointer"
            onClick={() => setIsSidebarOpen(false)}
          />
        </div>

        <div>
          <div className="p-6 border-b border-slate-700">
            <h2 className="text-white font-semibold text-lg">MD Farid Hossen</h2>
            <p className="text-slate-400 text-sm mt-1">Tutor ID : AII927B</p>
          </div>
          
          <nav className="p-4 space-y-2">
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) => 
                  `flex items-center p-3 rounded-lg transition-colors text-sm
                  ${isActive ? 'bg-blue-600 text-white' : 
                  `${item.completed ? 'text-slate-200' : 'text-slate-400'} hover:bg-slate-700`}`
                }
                onClick={() => setIsSidebarOpen(false)}
              >
                <span className="mr-3">
                  {item.completed ? <FiCheckSquare className="inline" /> : <FiSquare className="inline" />}
                </span>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="p-4 border-t border-slate-700">
          <button className="w-full flex items-center text-slate-300 hover:text-white p-3 rounded-lg transition-colors">
            <FiFilm className="mr-3" />
            Watch Tutorial
          </button>
          <button className="w-full flex items-center text-slate-300 hover:text-white p-3 rounded-lg transition-colors">
            <FiLogOut className="mr-3" />
            Logout
          </button>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="flex-1 overflow-y-auto p-8 md:ml-64">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Outlet />
        </motion.div>
      </div>

      {/* Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0  bg-black/50 md:hidden z-30"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;