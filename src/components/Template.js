import React from "react";
import frameImage from "../assets/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {
  return (
    <div className="flex w-8/12 mx-auto mt-8 justify-between">
      <div className="flex flex-col  gap-4">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="flex flex-col gap-1">
          <span>{desc1}</span>
          <span className="text-blue-600">{desc2}</span>
        </p>

        {formtype === "signup" ? <SignupForm setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}
        <div className="flex items-center gap-[4px]">
          <div className="bg-black w-full h-[2px]"></div>
          <p className="text-black font-bold">OR</p>
          <div className="bg-black w-full h-[2px]"></div>
        </div>
        <button>
          <p>Sign Up With Google</p>
        </button>
      </div>

      <div className="relative">
        <img className="z-20 top-1 left-1" src={frameImage} alt="Pattern" height="558px" width="504px" loading="lazy"/>
        <img className=" absolute z-100 top-0 rounded-3xl" src={image} alt="Pattern" height="558px" width="504px" loading="lazy"/>
      </div>
    </div>
  );
};

export default Template;
