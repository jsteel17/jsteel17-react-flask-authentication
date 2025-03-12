import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { handleSignup } from "../store";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { store, dispatch } = useGlobalReducer();

  const handleSubmit = (email, password, dispatch) => {
    handleSignup(email, password, dispatch)
  }
  useEffect(() => {
    console.log("here's the store: ", store)
    if (store.store.isSignupSuccessful) {
      navigate("/login")
    }
  }, [store.store.isSignupSuccessful])

  return (
    <div>
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(email, password, dispatch) }}>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" >Signup</button>
      </form>
    </div>
  );
};

export default Signup;