import "./App.css";
import Navbar from "./components/Navbar";
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import {useState} from 'react';
import PrivateRouter from "./components/PrivateRouter";
function App() {
  const[isLoggedIn,setIsLoggedIn] = useState(false);
  
  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col overflow-hidden">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>}/>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/dashboard" element={
          <PrivateRouter isLoggedIn={isLoggedIn}>
            <Dashboard/>
          </PrivateRouter>
        }/>
      </Routes>
    </div>
  );
}

export default App;
