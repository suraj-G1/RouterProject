import React from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'

const LoginForm = (props) => {
    let setIsLoggedIn = props.setIsLoggedIn;
    const [formData,setFormData] = useState({email:"" , password:""});
    const navigate = useNavigate();
    const[showPassword,setShowPassword] = new useState(false);
    function changeHandler(event){
        setFormData((prev)=>({
            ...prev,
            [event.target.name]:event.target.value

        }))

    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
        
    }
  return (
    <form onSubmit={submitHandler} className='flex flex-col gap-4'>
        <label>
            <p>Email Address <sup>*</sup></p>

            <input required type='email' value={formData.email} name='email' placeholder='Enter email address' onChange={changeHandler}></input>
        </label>

        <label className='relative flex flex-col'>
            <p>Password <sup>*</sup></p>
            <input required type={showPassword?("text"):("password")} name='password' value={formData.password} placeholder='Enter password' onChange={changeHandler}></input>
            <span onClick={()=>setShowPassword((prev)=> !prev)}>
                {showPassword ? (<AiOutlineEye/>) : <AiOutlineEyeInvisible/>}
            </span>
            <Link >Forgot Password</Link>
        </label>

        <button className='bg-yellow-50 rounded-md py-2 px-4 font-bold'> Sign In</button>

    </form>
  )
}

export default LoginForm