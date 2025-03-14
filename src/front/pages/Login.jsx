import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { handleLogin } from "../store";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { store, dispatch } = useGlobalReducer();

  const handleSubmit = async () => {
    handleLogin(email, password, dispatch)
    console.log(sessionStorage.getItem("token"))
  };
  useEffect(() => {
    console.log("here's the store: ", store)
    if (store.store.token) {
      console.log("Token exists in state:", store.store.token);
    }
  }, [])

  return (
    <form onSubmit={(e) => { e.preventDefault(); handleSubmit(email, password, dispatch) }}>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
      {store.store.token ? (
        <Link to="/private">
          <button type="submit">Login</button>
        </Link>
      ) : (
        <button type="submit">Login</button>
      )}
    </form>
  );
};

export default Login;