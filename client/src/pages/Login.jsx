import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
import { AuthContext } from "../context/authContext";
const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();
  const { login, currentUser } = useContext(AuthContext);
  console.log(currentUser, "<<<<<<<<<<<<<<");
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // await axios.post("/auth/login", inputs); instead use
      await login(inputs);
      navigate("/");
    } catch (error) {
      // console.log(error);
      setError(error?.response?.data);
    }
  };
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input
          type="text"
          placeholder="Username"
          name="username"
          required
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Login</button>
        {err && <p>Oops! {err}</p>}
        <span>
          Don't you have an account? <Link to="/register"> Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
