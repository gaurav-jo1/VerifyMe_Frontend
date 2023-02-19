import React, { useContext } from "react";
import { RxCrossCircled } from "react-icons/rx";
import forest from "../assets/forest.webp";
import "../styling/SignupCard.scss";
import { AuthContext } from "../context/AuthContext";

const SignupCard = () => {
  const { setSignupWarning } = useContext(AuthContext);
  return (
    <div className="SignupCard__container">
      <div className="SignupCard__card-container">
        <div className="SignupCard__container-cross">
          <h2 onClick={() => setSignupWarning(false)}>
            <RxCrossCircled />
          </h2>
        </div>
        <div className="SignupCard__container-content">
          <div className="SignupCard__container-img">
            <img src={forest} alt="" />
          </div>
          <div className="SignupCard__container-warning">
            <h1>Your password must contain at least 8 characters.</h1>
            <h1>
              Your password can’t be too similar to your other personal
              information.
            </h1>
            <h1>Your password can’t be entirely numeric.</h1>
            <p>😕</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupCard;
