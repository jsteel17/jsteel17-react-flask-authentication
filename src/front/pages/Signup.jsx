import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {store, dispatch} = useGlobalReducer();

const handleSignup = () => {
  actions.signup(email, password)
}
  useEffect(() => {
    if (store.isSignupSuccessful) {
      navigate("/login")
    }
  }, [store.isSignupSuccessful])

  return (
    <form onSubmit={handleSignup}>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;