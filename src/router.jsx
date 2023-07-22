import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import App from './App';
import Home from './Pages/Home/Home';
import Error from './Pages/Error/Error';
import User from './Pages/UserLogin/User';
import Courses from './Pages/Courses/Courses';
import Instractors from './Pages/Instractors/Instractors';
import ContactUs from './Pages/Contact Us/ContactUs';
import AboutUs from './Pages/About Us/AboutUs';
import Dashboard from './Dashboard/Dashboard';

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
        element: <Dashboard />
    },
    {
        path: "*",
        element: <Error />
    }
])
export default router;