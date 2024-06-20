import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
const SignupForm = (props) => {
    let setIsLoggedIn = props.setIsLoggedIn;
    const navigate = useNavigate();
    const[accountType,setAccountType] = useState("student");
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",

  });

  const [showPassword, setShowPassword] = useState(false);
  const[showConfirmPassword,setShowConfirmPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }
  function submitHandler(event){
    event.preventDefault();
    if(formData.password !== formData.confirmPassword){
        toast.error("Password Not Matched");
        return;
    }
    toast.success("Account Created");
    setIsLoggedIn(true);
    navigate('/dashboard');

  }
  return (
    <div>
      <div className="flex bg-richblack-800 gap-x-1 my-1 p-1 max-w-max rounded-full">
        <button 
        className={`${accountType ==="student"?
        "bg-richblack-900 text-richblack-5" :
        "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
        onClick={()=>setAccountType("student")} 
        
        >Student</button>
        <button 
        className={`${accountType ==="instructor"?
        "bg-richblack-900 text-richblack-5" :
        "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
        onClick={()=>setAccountType("instructor")}
        
        >Instructor</button>
      </div>

      <form onSubmit={submitHandler}  className="flex flex-col w-full">
        <div className="flex justify-between gap-x-4 mt-3">
          <label>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              placeholder="Enter First Name"
              value={formData.firstname}
              name="firstname"
              onChange={changeHandler}
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px] shadow-sm'
            ></input>
          </label>

          <label>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              Last Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              placeholder="Enter Last Name"
              value={formData.lastname}
              name="lastname"
              onChange={changeHandler}

              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px] shadow-sm'
            ></input>
          </label>
        </div>

        <div className="w-full mt-3">
          <label>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              Email Address <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="email"
              placeholder="Enter Email Address"
              value={formData.email}
              name="email"
              onChange={changeHandler}
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px] shadow-sm'
            ></input>
          </label>
        </div>
        <div className="flex justify-between gap-x-4 mt-3">

          <label className="relative">
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              placeholder="Create Password"
              value={formData.password}
              name="password"
              onChange={changeHandler}
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px] shadow-sm'
            ></input>
            <span onClick={() => setShowPassword((prev) => !prev)} className='absolute right-3 cursor-pointer top-[38px]'>
              {showPassword ? <AiOutlineEye fontFamily={34} fill='#AFB2BF'/> : <AiOutlineEyeInvisible fontFamily={34} fill='#AFB2BF'/>}
            </span>
          </label>

          <label className="relative">
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              Confirm Password <sup text-pink-200>*</sup>
            </p>
            <input
              required
              type={showConfirmPassword?"text":"password"}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              name="confirmPassword"
              onChange={changeHandler}
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px] shadow-sm'
            ></input>
            <span onClick={() => setShowConfirmPassword((prev) => !prev)} className='absolute right-3 cursor-pointer top-[38px]'>
              {showConfirmPassword ? <AiOutlineEye fontFamily={34} fill='#AFB2BF'/> : <AiOutlineEyeInvisible fontFamily={34} fill='#AFB2BF' />}
            </span>
          </label>
        </div>

        <button className='bg-yellow-50 rounded-[8px] py-[8px] px-[12px] font-medium text-black mt-4'>Create Account</button>
      </form>
    </div>
  );
};

export default SignupForm;
