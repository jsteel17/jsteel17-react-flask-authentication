// Import necessary components and functions from react-router-dom.

import {
    createBrowserRouter,
    Route, Outlet
} from "react-router-dom";
// import { createBrowserRouter } from "react-router-dom";
// import Layout from "./pages/Layout";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./pages/Private";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";

const Layout = () => (
        <>
            <Navbar />
            <Outlet />
        </>
);

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "", element: <Home /> },
            { path: "signup", element: <Signup /> },
            { path: "login", element: <Login /> },
            { path: "private", element: <ProtectedRoute><Private /></ProtectedRoute> },
        ],
    },
]);