import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/Logo.svg'
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className='flex justify-between items-center w-8/12 max-w-[1160px] py-4 mx-auto'>
        
        <Link to='/'>
            <img src={logo} width="160px" alt='anything' height="40" loading='lazy'/>
        </Link>

        <nav>
            <ul className='flex gap-x-6 text-richblack-100 ' >
                <li>
                    <Link to='/'>Home</Link>
                </li>

                <li>
                    <Link to='/'>About</Link>
                </li>

                <li>
                    <Link to='/'>Contact</Link>
                </li>
            </ul>
        </nav>

        <div className='flex items-center gap-x-4'>
            { !isLoggedIn &&<Link to='/login'>
               <button className='bg-richblack-800 text-richblack-100  py-[6px] px-[10px] rounded-[8px] border-richblack-700'>Login</button>
            </Link>
            }

            { !isLoggedIn && <Link to='/signup' 
            >
               <button className='bg-richblack-800 text-richblack-100  py-[6px] px-[10px] rounded-[8px] border-richblack-700'>Sign Up</button>
            </Link>}

            { isLoggedIn && <Link to='/' onClick={()=>{
                setIsLoggedIn(false);
                toast.success("Logged Out");
                
            }}>
               <button className='bg-richblack-800 text-richblack-100  py-[6px] px-[10px] rounded-[8px] border-richblack-700'>Logout</button>
            </Link>}


            { isLoggedIn && <Link to='/dashboard' onClick={()=>{
                setIsLoggedIn(false);


            }}>
               <button className='bg-richblack-800 text-richblack-100  py-[6px] px-[10px] rounded-[8px] border-richblack-700'>Dashboard</button>
            </Link>}
        </div>
    </div>
  )
}

export default Navbar;