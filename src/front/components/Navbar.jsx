import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const Navbar = () => {
    const {store, dispatch} = useGlobalReducer();

    const handleLogout = () => {
        dispatch({type: "LOGOUT"});
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