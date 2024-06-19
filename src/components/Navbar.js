import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/Logo.svg'
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className='flex gap-4 justify-between max-w-[900px] mx-auto'>
        
        <Link to='/'>
            <img src={logo} width="160px" alt='anything' height="40" loading='lazy'/>
        </Link>

        <nav>
            <ul className='flex gap-4 ' >
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

        <div className='flex gap-4'>
            { !isLoggedIn &&<Link to='/login'>
               <button>Login</button>
            </Link>
            }

            { !isLoggedIn && <Link to='/signup' 
            >
               <button>Sign Up</button>
            </Link>}

            { isLoggedIn && <Link to='/' onClick={()=>{
                setIsLoggedIn(false);
                toast.success("Logged Out");
                
            }}>
               <button>Logout</button>
            </Link>}


            { isLoggedIn && <Link to='/dashboard' onClick={()=>{
                setIsLoggedIn(false);


            }}>
               <button>Dashboard</button>
            </Link>}
        </div>
    </div>
  )
}

export default Navbar;