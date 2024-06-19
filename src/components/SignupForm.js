import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
const SignupForm = (props) => {
    let setIsLoggedIn = props.setIsLoggedIn;
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

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
    setIsLoggedIn(false);
    navigate('/dashboard');

  }
  return (
    <div>
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        <div>
          <label>
            <p>
              First Name <sup>*</sup>
            </p>
            <input
              required
              type="text"
              placeholder="Enter First Name"
              value={formData.firstname}
              name="firstname"
              onChange={changeHandler}
            ></input>
          </label>

          <label>
            <p>
              Last Name <sup>*</sup>
            </p>
            <input
              required
              type="text"
              placeholder="Enter Last Name"
              value={formData.lastname}
              name="lastname"
              onChange={changeHandler}
            ></input>
          </label>
        </div>

        <div>
          <label>
            <p>
              Email Address <sup>*</sup>
            </p>
            <input
              required
              type="email"
              placeholder="Enter Email Address"
              value={formData.email}
              name="email"
              onChange={changeHandler}
            ></input>
          </label>

          <label>
            <p>
              Password <sup>*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              placeholder="Create Password"
              value={formData.password}
              name="password"
              onChange={changeHandler}
            ></input>
            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </span>
          </label>

          <label>
            <p>
              Confirm Password <sup>*</sup>
            </p>
            <input
              required
              type="text"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              name="confirmPassword"
              onChange={changeHandler}
            ></input>
            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </span>
          </label>
        </div>

        <button>Create Account</button>
      </form>
    </div>
  );
};

export default SignupForm;
