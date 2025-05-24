import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import AdvanceFilterLayout from "../Pages/AdvanceFilterLayout/AdvanceFilterLayout";
import TutorList from "../Pages/TutorList/TutorList2";
import TutorRequest from "../Pages/TutorRequest/TutorRequest";
import AboutUs from "../Pages/AboutUs/AboutUs";
import JobPosting from "../Shared/JobPosting/JobPosting";
import SignUp from "../Shared/SignUp/SignUp";
import AcademicDashboard from "../Layout/Dashboard/DashBoardRegistration";
import DashBoardRegistration from "../DashBoardElements/Registration/Registration";
import DashBoardTutoringInformation from "../DashBoardElements/TutoringLocation/DashBoardTutoringInformation";
import Dashboard from "../Layout/Dashboard/DashBoard";
import UserDashBoardHome from "../DashBoardElements/UserDashBoard/UserDashBoardHome/UserDashBoardHome";
import Login from "../Shared/Login/Login";
import TuitionForm from "../Shared/TuitionFrom/TuitionForm";
import Profile from "../components/Profile/Profile";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/tuition-jobs',
          element:<AdvanceFilterLayout></AdvanceFilterLayout>
        },
        {
          path:'tutors',
          element:<TutorList/>
        },
        {
          path:'tutor-request',
          element:<TutorRequest/>
        },
        {
          path:'about-us',
          element:<AboutUs/>
        },
        {
          path:'job-posting',
          element:<JobPosting></JobPosting>
        },
        {
          path:'sign-up',
          element:<SignUp/>
        },
        {
          path:'login',
          element:<Login/>
        },
        {
          path:'tuition-form',
          element:<TuitionForm/>
        },
        {
          path:"/profile",
          element:<Profile/>
        },
        {
          path:"/registration-dashboard",
          element:<AcademicDashboard/>,
          children:[
            {
              path:"/registration-dashboard/registration",
              element:<DashBoardRegistration/>
            },
            {
              path:"/registration-dashboard/tutoring-information",
              element:<DashBoardTutoringInformation/>
            }
          ]
        },
        {
          path:"user-dashboard",
          element:<Dashboard/>,
          children:[
            {
              path:"/user-dashboard/dashboard",
              element:<UserDashBoardHome/>
            },
            
          ]
        }
        
        
      ],
      
    },
  ]);

export default router;