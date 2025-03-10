import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Private = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if (!token) return navigate("/login");

        fetch("/api/private", { headers: { Authorization: `Bearer ${token}` } })
            .then((res) => res.json())
            .then((data) => setUser(data.user))
            .catch(() => navigate("/login"));
    }, [navigate]);

    return <div>{user ? `Welcome ${user.email}` : "Loading..."}</div>;
};

export default Private;