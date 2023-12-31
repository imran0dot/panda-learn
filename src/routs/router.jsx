import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Home from '../Pages/Home/Home';
import Courses from '../Pages/Courses/Courses';
import Instructors from '../Pages/Instructors/Instructors';
import ContactUs from '../Pages/Contact Us/ContactUs';
import AboutUs from '../Pages/About Us/AboutUs';
import User from '../Pages/UserLogin/User';
import Dashboard from '../Dashboard/Dashboard';
import PrivateRout from './PrivateRout';
import Users from '../Dashboard/Pages/Users';
import Error from '../Pages/Error/Error';
import AddCourse from "../Dashboard/Pages/AddCourse";
import Instructor from "../Pages/Instructors/Instructor";
import Course from "../Pages/Courses/Course";
import MyClasses from "../Dashboard/Pages/MyClasses";
import PaymentHistory from "../Dashboard/Pages/PaymentHistory";
import AllCourses from "../Dashboard/Pages/AllCourses";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Cart from "../Pages/Cart/Cart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [{
            path: "/",
            element: <Home />,
        },
        {
            path: "/courses",
            element: <Courses />
        },
        {
            path: "/course/:id",
            element: <PrivateRout><Course /></PrivateRout>
        },
        {
            path: "/instractors",
            element: <Instructors />,
        },
        {
            path: "/instructor/:id",
            element: <Instructor />,
        },
        {
            path: "/contact-us",
            element: <ContactUs />
        },
        {
            path: "/about-us",
            element: <AboutUs />
        },
        {
            path: "/login",
            element: <User />
        },
        {
            path: "/cart",
            element: <Cart />
        },
        {
            path: "/check-out",
            element: <CheckOut />
        }]
    },
    {
        path: "/dashboard",
        element: <PrivateRout> <Dashboard /> </PrivateRout>,
        children: [
            {
                path: "/dashboard/users",
                element: <Users />,
            },
            {
                path: "/dashboard/add-new-course",
                element: <AddCourse />,
            },
            {
                path: "/dashboard/my-classes",
                element: <MyClasses />
            },
            {
                path: "/dashboard/payment-history",
                element: <PaymentHistory />,
            },
            {
                path: "/dashboard/all-courses",
                element: <AllCourses />,
            }
        ]
    },
    {
        path: "*",
        element: <Error />
    }
])
export default router;