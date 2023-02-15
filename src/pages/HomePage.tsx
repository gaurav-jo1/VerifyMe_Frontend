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
  const { authTokens } = useContext(AuthContext);

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
      <div className="HomePage__userinfo-container">
        <p>Username: <span>{userInfos?.username}</span> </p>
        <p>Email: <span>{userInfos?.email}</span></p>
      </div>
    </div>
  );
};

export default HomePage;
