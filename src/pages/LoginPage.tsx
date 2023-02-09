import React from "react";
import "../styling/LoginPage.scss";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="LoginPage__container">
      <Logo />
      <div className="LoginPage__signin">
        <div className="LoginPage__signin-welcome">
          <p>Welcome to VerifyME</p>
        </div>
        <div className="LoginPage__signin-signin">
          <h1>Sign in</h1>
        </div>
        <div className="LoginPage__signin-google">
          <p>Sign in with Google</p>
        </div>
        <div className="LoginPage__signin-up">
          <div className="LoginPage__signin-username">
            <p>Enter you username or email address</p>
            <input type="text" />
          </div>
          <div className="LoginPage__signin-password">
            <p>Enter your password</p>
            <input type="password" />
          </div>
        </div>
        <div className="LoginPage__forgot-password">
          <p>Forgot Password</p>
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
