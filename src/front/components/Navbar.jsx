import { useActionState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Context from "../hooks/useGlobalReducer"
import { useContext } from "react";

const Navbar = () => {
    // const navigate = useNavigate();

    // const handleLogout = () => {
    //     sessionStorage.removeItem("token");
    //     navigate("/login");
    // };
    const {store, actions} = useContext(Context);

    const handleLogout = () => {
        actions.logout();
        window.location.href = "/";
    }

    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/private">Private</Link></li>
                <li>
                    <button onClick={handleLogout}>Logout</button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;