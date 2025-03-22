import { NavLink, Outlet } from "react-router-dom";
import { FiUserPlus, FiMapPin, FiBookOpen, FiHome } from "react-icons/fi";

const Dashboard = () => {
    return (
        <div className="grid grid-cols-1 mt-20">
            {/* Dashboard Sidebar */}
            <div className="  flex flex-row shadow-xl text-center justify-center items-center">
                
                
                <nav className="flex p-4 space-x-2 ">
                    <NavLink
                        to="/registration-dashboard/registration"
                        className={({ isActive }) => 
                            `flex items-center px-4 py-3 rounded-lg transition-colors duration-200
                            ${isActive ? 
                                'bg-green-600 text-white' : 
                                'text-slate-300 hover:bg-slate-700 hover:text-white'}`
                        }
                    >
                        <FiUserPlus className="w-5 h-5 mr-3" />
                        Registration
                    </NavLink>

                    <NavLink
                        to="/registration-dashboard/tutoring-information"
                        className={({ isActive }) => 
                            `flex items-center px-4 py-3 rounded-lg transition-colors duration-200
                            ${isActive ? 
                                'bg-green-600 text-white' : 
                                'text-slate-300 hover:bg-slate-700 hover:text-white'}`
                        }
                    >
                        <FiMapPin className="w-5 h-5 mr-3" />
                        Tutoring Location
                    </NavLink>

                    <NavLink
                        to="/registration-dashboard/education-information"
                        className={({ isActive }) => 
                            `flex items-center px-4 py-3 rounded-lg transition-colors duration-200
                            ${isActive ? 
                                'bg-green-600 text-white' : 
                                'text-slate-300 hover:bg-slate-700 hover:text-white'}`
                        }
                    >
                        <FiBookOpen className="w-5 h-5 mr-3" />
                        Education Information
                    </NavLink>
                </nav>
            </div>

            {/* Dashboard Content */}
            <div className="flex-1 overflow-y-auto px-8 py-6">
                <div className="max-w-4xl mx-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;