import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("https://crispy-orbit-9766wqjpr45p3xgrj-3001.app.github.dev/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    console.log()

    const data = await response.json();
    if (response.ok) {
      sessionStorage.setItem("token", data.token);
      navigate("/private");
    } else {
      alert("Login failed");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;