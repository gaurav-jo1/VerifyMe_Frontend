import React from "react";
import Logo from "../components/Logo";
import "../styling/SignupPage.scss";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div className="SignupPage__container display__flex">
      <Logo />
      <div className="SingupPage__signup">
        <div className="SingupPage__signup-welcome">
          <p>Welcome to VerifyME</p>
        </div>
        <div className="SingupPage__signup-signup">
          <h1>Sign up</h1>
        </div>
        <div className="SignupPage__signup-userinfo">
          <div className="SignupPage__signup-email">
            <p>Enter you username or email address</p>
            <input type="text" />
          </div>
          <div className="SignupPage__signup_username_name">
            <div className="SignupPage__signup-userinfo_username">
              <p>Enter you username</p>
              <input type="text" />
            </div>
            <div className="SignupPage__signup-userinfo_name">
              <p>Enter you name</p>
              <input type="text" />
            </div>
          </div>
          <div className="SignupPage__signup-password">
            <p>Enter your password</p>
            <input type="password" />
          </div>
        </div>
        <div className="SignupPage__signup-button">
          <button type="submit">Sign in</button>
        </div>
        <div className="SignupPage__signup-signin">
          <p>Have an Account?</p>
          <Link to="/">Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
