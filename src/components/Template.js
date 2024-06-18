import React from "react";
import frameImage from "../assets/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>
          <span>{desc1}</span>
          <span>{desc2}</span>
        </p>

        {formtype === "signup" ? <SignupForm /> : <LoginForm />}
        <div>
          <div></div>
          <p>OR</p>
          <div></div>
        </div>
        <button>
          <p>Sign Up With Google</p>
        </button>
      </div>

      <div>
        <img src={frameImage} alt="Pattern" height="558px" width="504px" loading="lazy"/>
        <img src={image} alt="Pattern" height="558px" width="504px" loading="lazy"/>
      </div>
    </div>
  );
};

export default Template;
