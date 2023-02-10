import React from "react";
import "../styling/UserPage.scss";
import Logo from "../components/Logo";
import Google from "../assets/google.png";
import { Link } from "react-router-dom";

const UserPage = () => {
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
          <h1>Sign in</h1>
        </div>
        <div className="UserPage__signin-google">
          <img src={Google} alt="google" height={16} width={16} />
          <p>&nbsp; Sign in with Google</p>
        </div>
        <div className="UserPage__signin-up">
          <div className="UserPage__signin-username">
            <p>Enter you username or email address</p>
            <input type="text" placeholder="Username or email address"/>
          </div>
          <div className="UserPage__signin-password">
            <p>Enter your password</p>
            <input type="password" placeholder="Password" />
          </div>
        </div>
        <div className="UserPage__forgot-password">
          <p>Forgot Password?</p>
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
