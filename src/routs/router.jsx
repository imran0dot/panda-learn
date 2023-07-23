import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Home from '../Pages/Home/Home';
import Courses from '../Pages/Courses/Courses';
import Instractors from '../Pages/Instractors/Instractors';
import ContactUs from '../Pages/Contact Us/ContactUs';
import AboutUs from '../Pages/About Us/AboutUs';
import User from '../Pages/UserLogin/User';
import Dashboard from '../Dashboard/Dashboard';
import PrivateRout from './PrivateRout';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [{
            path: "/",
            element: <Home />,
        },
        {
            path: "/classes",
            element: <Courses />
        },
        {
            path: "/instractors",
            element: <Instractors />
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
        }]
    },
    {
        path: "/dashboard",
        element: <PrivateRout> <Dashboard /> </PrivateRout>
       
    },
    {
        path: "*",
        element: <Error />
    }
])
export default router;