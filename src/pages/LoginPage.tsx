import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import Logo from "../components/Logo";
import Google from "../assets/google.png";
import jwt_decode from "jwt-decode";
import "../styling/UserPage.scss";

const UserPage:React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>('');
  const { setAuthTokens, setUser,setLoading } = useContext(AuthContext);
  let navigate = useNavigate();

  console.log(username)
  console.log(password)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    axios.post('http://127.0.0.1:8000/api/token/', { username, password })
    .then(response => {
      console.log(response.data);
      setAuthTokens(response.data.data);
      setUser(jwt_decode(response.data.data.access));
      localStorage.setItem("authTokens", JSON.stringify(response.data.data));
      navigate("/");
      setLoading(true)
    })
  }

  return (
    <div className="UserPage__container display__flex">
      <Logo />
      <div className="UserPage__signin">
        <div className="UserPage__signin-welcome">
          <p> Welcome to <span>VerifyME</span> </p>
        </div>
        <div className="UserPage__signin-signin">
          <h1>Sign in</h1>
        </div>
        <div className="UserPage__signin-google">
          <img src={Google} alt="google" height={16} width={16} />
          <p>&nbsp; Sign in with Google</p>
        </div>
        <div className="UserPage__signin-up">
          <div className="UserPage__signin-username">
            <p>Enter you username or email address</p>
            <input type="text" placeholder="Username or email address" value={username} onChange={(e) => setUsername(e.target.value)} required/>
          </div>
          <div className="UserPage__signin-password">
            <p>Enter your password</p>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          </div>
        </div>
        <div className="UserPage__forgot-password">
          <p>Forgot Password?</p>e
        </div>
        <div className="UserPage__login-button">
          <button type="submit" onClick={handleLogin}>Sign in</button>
        </div>
        <div className="UserPage__link-signup">
          <p>No Account?</p>
          <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
