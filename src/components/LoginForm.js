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
    <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-3'>
        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address <sup className='text-pink-200'>*</sup></p>

            <input required type='email' value={formData.email} name='email' placeholder='Enter email address'
             onChange={changeHandler}
             className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px] shadow-sm'
             ></input>
        </label>

        <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Password <sup className='text-pink-200'>*</sup></p>
            <input required type={showPassword?("text"):("password")} name='password' value={formData.password} placeholder='Enter password' onChange={changeHandler} 
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px] shadow-sm'
            ></input>
            <span onClick={()=>setShowPassword((prev)=> !prev)} className='absolute right-3 cursor-pointer top-[43px]'>
                {showPassword ? (<AiOutlineEye fontFamily={34} fill='#AFB2BF'/>) : <AiOutlineEyeInvisible fontFamily={34} fill='#AFB2BF'/>}

            </span>
            <Link className='w-full ml-auto text-xs text-blue-100 '>Forgot Password</Link>
        </label>

        <button className='bg-yellow-50 rounded-[8px] py-[8px] px-[12px] font-medium text-black'> Sign In</button>

    </form>
  )
}

export default LoginForm