// Import necessary components and functions from react-router-dom.

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route, Router
} from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/AppLayout";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./pages/Private";
import ProtectedRoute from "./components/ProtectedRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "signup", element: <Signup /> },
            { path: "login", element: <Login /> },
            { path: "private", element: <ProtectedRoute><Private /></ProtectedRoute> },
        ],
    },
]);