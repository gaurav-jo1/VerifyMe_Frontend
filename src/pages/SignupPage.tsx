import React from "react";
import Logo from "../components/Logo";
import "../styling/LoginPage.scss";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div className="LoginPage__container display__flex">
      <Logo />
      <div className="LoginPage__signin LoginPage__signup">
        <div className="LoginPage__signin-welcome">
          <p>Welcome to <span>VerifyME</span></p>
        </div>
        <div className="LoginPage__signin-signin">
          <h1>Sign up</h1>
        </div>
        <div className="LoginPage__signup-up">
          <div className="LoginPage__signin-username">
            <p>Enter you username or email address</p>
            <input type="text" />
          </div>
          <div className="SignupPage__signup_username_name">
            <div className="LoginPage__signin-username">
              <p>Enter you username</p>
              <input type="text" />
            </div>
            <div className="LoginPage__signin-username">
              <p>Enter you name</p>
              <input type="text" />
            </div>
          </div>
          <div className="LoginPage__signin-password">
            <p>Enter your password</p>
            <input type="password" />
          </div>
        </div>
        <div className="LoginPage__login-button">
          <button type="submit">Sign un</button>
        </div>
        <div className="LoginPage__link-signup">
          <p>Have an Account?</p>
          <Link to="/">Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
