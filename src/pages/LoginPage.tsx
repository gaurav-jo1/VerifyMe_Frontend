import React from "react";
import "../styling/LoginPage.scss";
import Logo from "../components/Logo";
import Google from "../assets/google.png";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="LoginPage__container display__flex">
      <Logo />
      <div className="LoginPage__signin">
        <div className="LoginPage__signin-welcome">
          <p>
            Welcome to <span>VerifyME</span>
          </p>
        </div>
        <div className="LoginPage__signin-signin">
          <h1>Sign in</h1>
        </div>
        <div className="LoginPage__signin-google">
          <img src={Google} alt="google" height={16} width={16} />
          <p>&nbsp; Sign in with Google</p>
        </div>
        <div className="LoginPage__signin-up">
          <div className="LoginPage__signin-username">
            <p>Enter you username or email address</p>
            <input type="text" placeholder="Username or email address"/>
          </div>
          <div className="LoginPage__signin-password">
            <p>Enter your password</p>
            <input type="password" placeholder="Password" />
          </div>
        </div>
        <div className="LoginPage__forgot-password">
          <p>Forgot Password?</p>
        </div>
        <div className="LoginPage__login-button">
          <button type="submit">Sign in</button>
        </div>
        <div className="LoginPage__link-signup">
          <p>No Account?</p>
          <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
