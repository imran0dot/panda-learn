import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import App from './App';
import Home from './Pages/Home/Home';
import Error from './Pages/Error/Error';
import User from './Pages/UserLogin/User';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [{
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: <User />
        }]
    },{
        path: "*",
        element: <Error />
    }
])
export default router;