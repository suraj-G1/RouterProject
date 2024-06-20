import React from "react";
import frameImage from "../assets/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import {FcGoogle} from 'react-icons/fc'
const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {
  return (
    <div className="flex justify-between w-8/12 max-w[1160px] py-12  gap-y-0 mx-auto">
      <div className="w-8/12 max-w-[400px]">
        <h1 className="text-[1.75rem] font-semibold text-richblack-5 leading-[2.3rem]">{title}</h1>
        <p className="flex flex-col gap-1 text-[1.125rem] leading-[1.625rem] mt-4">
          <span className="text-richblack-100">{desc1}</span>
          <span className="text-blue-100 italic">{desc2}</span>
        </p>

        {formtype === "signup" ? <SignupForm setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}
        <div className="flex  w-full items-center gap-x-2 my-4">
          <div className="bg-richblack-700 w-full h-[1px]"></div>
          <p className="text-richblack-700 font-medium leading-[1.375rem]">OR</p>
          <div className="bg-richblack-700 w-full h-[1px]"></div>
        </div>
        <button  className="w-full flex justify-center items-center rounded-[8px] font-medium
         text-richblack-100 border border-richblack-100 px-[10px] py-[6px] gap-x-2 mt-4">
            <FcGoogle/>
          <p>Sign Up With Google</p>
        </button>
      </div>

      <div className="relative w-8/12 max-w-[400px] mt-4">
        <img className="" src={frameImage} alt="Pattern" height="558px" width="504px" loading="lazy"/>
        <img className=" absolute -top-4 right-4" src={image} alt="Pattern" height="558px" width="504px" loading="lazy"/>
      </div>
    </div>
  );
};

export default Template;
