import React from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import {useState} from 'react';
import {Link} from 'react-router-dom'

const LoginForm = () => {
    const [formData,setFormData] = useState({email:"" , password:""});
    const[showPassword,setShowPassword] = new useState(false);
    function changeHandler(event){
        setFormData((prev)=>({
            ...prev,
            [event.target.name]:event.target.value

        }))

    }
  return (
    <form>
        <label>
            <p>Email Address <sup>*</sup></p>

            <input required type='email' value={formData.email} name='email' placeholder='Enter email address' onChange={changeHandler}></input>
        </label>

        <label>
            <p>Password <sup>*</sup></p>
            <input required type={showPassword?("text"):("password")} name='password' value={formData.password} placeholder='Enter password' onChange={changeHandler}></input>
            <span onClick={()=>setShowPassword((prev)=> !prev)}>
                {showPassword ? (<AiOutlineEye/>) : <AiOutlineEyeInvisible/>}
            </span>
            <Link to=''>Forgot Password</Link>
        </label>

        <button> Sign In</button>

    </form>
  )
}

export default LoginForm