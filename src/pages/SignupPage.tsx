import React from "react";
import Logo from "../components/Logo";
import "../styling/UserPage.scss";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div className="UserPage__container display__flex">
      <Logo />
      <div className="UserPage__signin">
        <div className="UserPage__signin-welcome">
          <p>
            Welcome to <span>VerifyME</span>
          </p>
        </div>
        <div className="UserPage__signin-signin">
          <h1>Sign up</h1>
        </div>
        <div className="UserPage__signup-up">
          <div className="UserPage__signin-username">
            <p>Enter you username or email address</p>
            <input type="text" />
          </div>
          <div className="UserPage__signup_username_name">
            <div className="UserPage__signin-username">
              <p>Enter you username</p>
              <input type="text" />
            </div>
            <div className="UserPage__signin-username">
              <p>Enter you name</p>
              <input type="text" />
            </div>
          </div>
          <div className="UserPage__signin-password">
            <p>Enter your password</p>
            <input type="password" />
          </div>
        </div>
        <div className="UserPage__login-button">
          <button type="submit">Sign un</button>
        </div>
        <div className="UserPage__link-signin">
          <p>Have an Account?</p>
          <Link to="/">Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
