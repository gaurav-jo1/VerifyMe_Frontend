import React, { useContext } from "react";
import { RxCrossCircled } from "react-icons/rx";
import "../styling/Card.scss";
import { AuthContext } from "../context/AuthContext";
import nature from "../assets/nature.png";

const Card: React.FC = () => {
  const { setUserCreated } = useContext(AuthContext);
  return (
    <div className="Card__background">
      <div className="Card__container">
        <div className="Card__container-cross">
          <h2 onClick={() => setUserCreated(false)}>
            <RxCrossCircled />
          </h2>
        </div>
        <div className="Card__container-created">
          <div className="Card__container-created_img">
            <img src={nature} alt="" />
          </div>
        </div>
        <div className="Card__container-created_text">
          <div className="Card__container-message">
            <h1>Your Account is Created</h1>
            <h2>😄</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
