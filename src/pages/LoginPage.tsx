import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import Logo from "../components/Logo";
import verifymelogo from "../assets/v-fav.png";
import jwt_decode from "jwt-decode";
import "../styling/UserPage.scss";
import LoadingScreen from "../components/LoadingScreen";
import Card from "../components/Card";
import Celebration from "../components/Celebration";

const UserPage: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [loadingScreen, setLoadingScreen] = useState<boolean>(false);
  const [warningUsername, setWarningUsername] = useState<boolean>(false);
  const [warningPassword, setWarningPassword] = useState<boolean>(false);
  const { setAuthTokens, setUser, setLoading, userCreated, setUserCreated } =
    useContext(AuthContext);

  let navigate = useNavigate();

  // console.log(error);

  const handleLogin = (e: React.FormEvent) => {
    setWarningUsername(false);
    setWarningPassword(false);
    setError(false);

    if (username && password) {
      e.preventDefault();
      setLoadingScreen(true);

      axios
        .post("http://127.0.0.1:8000/api/token/", { username, password })
        .then((response) => {
          setAuthTokens(response.data);
          setUser(jwt_decode(response.data.access));
          localStorage.setItem("authTokens", JSON.stringify(response.data));
          navigate("/");
          setLoading(true);
        })
        .catch((error) => {
          // console.log(error.message);
          if (error.message) {
            setError(true);
          }
        })
        .finally(() => {
          setLoadingScreen(false);
        });
    } else if (!username && !password) {
      setWarningUsername(true);
      setWarningPassword(true);
    } else if (!username) {
      setWarningUsername(true);
    } else if (!password) {
      setWarningPassword(true);
    }
  };

  return (
    <div>
      {loadingScreen ? (
        <LoadingScreen />
      ) : (
        <div className="UserPage__container display__flex">
          <Logo />
          {userCreated ? <Card /> : ""}
          {userCreated ? <Celebration /> : ""}
          <form className="UserPage__signin">
            <div className="UserPage__signin-welcome">
              <p>
                Welcome to <span>VerifyME</span>{" "}
              </p>
            </div>
            <div className="UserPage__signin-signin">
              <h1>Sign in</h1>
            </div>
            <div className="UserPage__signin-logo">
              <img src={verifymelogo} alt="verifymelogo" height={35} width={35} />
            </div>
            <div className="UserPage__signin-up">
              <div className="UserPage__signin-username">
                {warningUsername ? (
                  <p style={{ color: "red" }}>
                    Enter you username
                  </p>
                ) : (
                  <p>Enter you username </p>
                )}
                {warningUsername ? (
                  <input
                    type="text"
                    required
                    placeholder="Username or email address"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ border: "1px solid red" }}
                  />
                ) : (
                  <input
                    type="text"
                    required
                    placeholder="Username or email address"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                )}
              </div>
              <div className="UserPage__signin-password">
                {warningPassword ? (
                  <p style={{ color: "red" }}>Enter your password</p>
                ) : (
                  <p>Enter your password</p>
                )}

                {warningPassword ? (
                  <input
                    type="password"
                    required
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ border: "1px solid red" }}
                  />
                ) : (
                  <input
                    type="password"
                    required
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                )}
              </div>
            </div>
            <div className="UserPage__forgot-password">
              {error ? (
                <div className="UserPage_wrong-userinfo">
                  <span>Enter correct Username and Password</span>
                  <p>Forgot Password?</p>
                </div>
              ) : (
                <div className="UserPage__forgot-password-p">
                  <p>Forgot Password?</p>
                </div>
              )}
            </div>
            <div className="UserPage__login-button">
              <button type="submit" onClick={handleLogin}>
                Sign in
              </button>
            </div>
            <div className="UserPage__link-signup">
              <p>No Account?</p>
              <Link to="/signup">Sign up</Link>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserPage;
