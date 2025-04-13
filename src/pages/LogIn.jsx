import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle, faX } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  return (
    <div className="min-h-screen flex items-left justify-left bg-red-500 grid grid-cols-2">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 text-left">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        
        
        <div className="relative mb-4">
          <FontAwesomeIcon icon={faUser} className="absolute left-3 top-3 text-gray-500" />
          <input 
            type="text" 
            placeholder="Enter Username" 
            className="w-full p-2 pl-10 border rounded"
          />
        </div>

       
        <div className="relative mb-4">
          <FontAwesomeIcon icon={faLock} className="absolute left-3 top-3 text-gray-500" />
          <input 
            type="password" 
            placeholder="Enter Password" 
            className="w-full p-2 pl-10 border rounded"
          />
        </div>

        
        <div className="flex items-center mb-4">
          <input type="checkbox" id="rememberMe" className="mr-2" />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>

       
        <button className="w-full bg-red-500 text-white p-2 rounded">Login</button>

        
        <div className="flex justify-center space-x-4 mt-4">
          <p className="mt-4">Dr, Login with</p>
          <FontAwesomeIcon icon={faFacebook} className="text-blue-600 text-2xl cursor-pointer" />
          <FontAwesomeIcon icon={faGoogle} className="text-red-500 text-2xl cursor-pointer" />
          <FontAwesomeIcon icon={faX} className="text-black text-2xl cursor-pointer" />
        </div>

       
        <p className="mt-4 text-center">
          Don't have an account?  
          <Link to="/SignUp" className="text-blue-500 font-bold ml-1">Create One</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
