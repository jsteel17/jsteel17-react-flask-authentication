import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Private = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem("token");
        console.log(token)
        if (!token) {console.log("hitting this")
            navigate("/login");
        }
        getData(token)
    }, []);
    const getData = async (token) => {
        try {
            const res = await fetch("/api/private", { headers: { Authorization: `Bearer ${token}`,"Content-Type": "application/json" } })
            const data = await res.json()
            setUser(data.user)
        }
            catch (error)
                {console.log(error.message)
                    navigate("/login")};
    }
    return <div>{user ? `Welcome ${user.email}` : "Loading..."}</div>;
};

export default Private;