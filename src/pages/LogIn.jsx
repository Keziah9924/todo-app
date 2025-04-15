import React from "react";
import { Link } from "react-router-dom";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { BiLogoGoogle } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
import { FaUserLarge } from "react-icons/fa6";
import { IoMdLock } from "react-icons/io";
import bgImage from "../assets/R1.svg";
import logInImage from "../assets/ach31.svg"; 


const Login = () => {
  return (
    <div className=" flex items-center justify-center bg-cover w-screen h-screen" 
     style={{ backgroundImage: `url(${bgImage})` }}
     >
      <div className="bg-white p-8 rounded-lg shadow-md w-180 h-130  grid grid-cols-1 md:grid-cols-2">
      <div className=" justify-left items-left p-8">
        <h2 className="text-3xl font-bold mb-6 text-left">Sign In</h2>
        
        
        <div className="relative mb-4">
          
          <FaUserLarge className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black-500 text-sm" />
          <input 
            type="text" 
            placeholder="Enter Username" 
            className="w-2/2 p-2 pl-10 border rounded"
          />
        </div>

       
        <div className="relative mb-4">
          <IoMdLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black-500 text-xl" />
          <input 
            type="password" 
            placeholder="Enter Password" 
            className="w-2/2 p-2 pl-10 border rounded"
          />
        </div>

        
        <div className="flex items-center mb-4">
          <input type="checkbox" id="rememberMe" className="mr-2" />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>

       
        <button className="w-1/2 bg-red-500 text-white p-2 rounded">Login</button>

        
        <div className="flex justify-center space-x-4 mt-4">
      
          <p className="mt-4">Dr, Login with</p>
          <BiLogoFacebookSquare className="inline-block text-blue-600 text-2xl mx-2 mt-4 hover:text-blue-800 cursor-pointer" />
        <BiLogoGoogle className="inline-block text-red-500 text-2xl mx-2 mt-4 hover:text-red-600 cursor-pointer" />
        <RiTwitterXFill className="inline-block text-black text-2xl mx-2 mt-4 hover:text-gray-700 cursor-pointer" />

        </div>

       
        <p className="mt-4 text-center">
          Don't have an account?  
          <Link to="/SignUp" className="text-blue-500 font-bold ml-1">Create One</Link>
        </p>

      </div>
      <div className="flex justify-center items-center">
    <img
      src={logInImage}
      alt="Login Visual"
      className="w-4/4 max-h-[500px] object-contain"
    />
  </div>
      </div>
      
    </div>
    
  );
};

export default Login;
