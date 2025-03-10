import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'  // Global styles for your application
import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom"; 
import { StoreProvider } from './hooks/useGlobalReducer'; 
import { BackendURL } from './components/BackendURL';
import Navbar from './components/Navbar'; 
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./pages/Private";

const PrivateRoute = ({ children }) => {
    return sessionStorage.getItem("token") ? children : <Navigate to="/login" />;
};


const router = createBrowserRouter([
    { path: "/signup", element: <Signup /> },
    { path: "/login", element: <Login /> },
    { path: "/private", element: <PrivateRoute><Private /></PrivateRoute> }
]);

const Main = () => {
    if (!import.meta.env.VITE_BACKEND_URL || import.meta.env.VITE_BACKEND_URL === "") {
        return (
            <React.StrictMode>
                <BackendURL />
            </React.StrictMode>
        );
    }

    return (
        <React.StrictMode>
            <StoreProvider> 
                <Navbar /> 
                <RouterProvider router={router} />
            </StoreProvider>
        </React.StrictMode>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);