import React, { useContext, useEffect, useState } from "react";
import "../styling/HomePage.scss";
import Logo from "../components/Logo";
import verified from "../assets/verified.png";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

interface userinfoInterface {
  id: number;
  first_name: string;
  username: string;
  email: string;
}

const HomePage: React.FC = () => {
  const { authTokens, setLoading, callLogout } = useContext(AuthContext);

  const [userInfos, setUserInfos] = useState<userinfoInterface>();

  useEffect(() => {
    axios
      .get<userinfoInterface>("http://127.0.0.1:8000/user/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
      })
      .then((response) => {
        setUserInfos(response.data);
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="HomePage__container">
      <div className="HomePage__logo-container">
        <Logo />
      </div>
      <h1>Hello {userInfos?.first_name}</h1>
      <div className="HomePage__message-container">
        <p>You are Verified</p>
        <img src={verified} alt="" height={35} />
      </div>
      <div className="HomePage__logout">
        <button onClick={() => callLogout()}>Log out</button>
      </div>
      <div className="HomePage__userinfo-container_1">
        <p>Username:&#160; </p>
        <span>{userInfos?.username}</span>
      </div>
      <div className="HomePage__userinfo-container_2">
        <p>Email:&#160;</p> <span>{userInfos?.email}</span>
      </div>
    </div>
  );
};

export default HomePage;
