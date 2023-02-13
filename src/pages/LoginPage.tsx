import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Logo from "../components/Logo";
import Google from "../assets/google.png";
import "../styling/UserPage.scss";

const UserPage = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const { setAuthTokens, setUser,setLoading } = useContext(AuthContext);
  let navigate = useNavigate();

  console.log(userInput)
  console.log(userPassword)

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
            <input type="text" placeholder="Username or email address" value={userInput} onChange={(e) => setUserInput(e.target.value)} required/>
          </div>
          <div className="UserPage__signin-password">
            <p>Enter your password</p>
            <input type="password" placeholder="Password" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} required/>
          </div>
        </div>
        <div className="UserPage__forgot-password">
          <p>Forgot Password?</p>e
        </div>
        <div className="UserPage__login-button">
          <button type="submit">Sign in</button>
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
