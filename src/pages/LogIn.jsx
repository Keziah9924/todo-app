import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Joi from "joi";
import { Link } from "react-router-dom";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { BiLogoGoogle } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
import { FaUserLarge } from "react-icons/fa6";
import { IoMdLock } from "react-icons/io";
import AuthBackDrop from "../components/AuthBackDrop";
import logInImage from "../assets/ach31.svg"; 
import InputBox from "../components/InputBox";
import FormItem from "../components/FormItem"; 


const LogIn = () => {
  const navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState("");

  const [formData, setFormData] = useState({
      username: "",
      password: "",
      agreeToTerms: false,
    });

    const [errors, setErrors] = useState({});

    const schema = Joi.object({
    username: Joi.string().alphanum().min(3).required().messages({
          "string.empty": "Username is required",
          "string.alphanum": "Username must be alphanumeric",
          "string.min": "Username must be at least 3 characters",
        }),
        password: Joi.string().min(6).required().messages({
              "string.empty": "Password is required",
              "string.min": "Password must be at least 6 characters",
            }),
            agreeToTerms: Joi.boolean().valid(true).messages({
                  "any.only": "You must agree to the terms",
                }),
              });
              const handleChange = (e) => {
                const { name, value, type, checked } = e.target;
                setFormData({
                  ...formData,
                  [name]: type === "checkbox" ? checked : value,
                });
              };

              const handleSubmit = (e) => {
                e.preventDefault();
                console.log(formData)
                const validation = schema.validate(formData, { abortEarly: false });
            
                if (validation.error) {
                  const errorMessages = {};
                  validation.error.details.forEach((detail) => {
                    errorMessages[detail.path[0]] = detail.message;
                  });
                  setErrors(errorMessages);
                } else {
                  console.log("Login Successful!", formData);
                  setErrors({});
                  navigate("/Dashboard");
                  setSuccessMessage("Login successful! Redirecting to Dashboard...");
                }
              };


  return (
  <>
  <AuthBackDrop/>
  {successMessage && (
  <div className="bg-green-100 border border-green-300 text-green-800 px-4 py-2 rounded mb-4 text-sm">
    {successMessage}
  </div>
)}
      <div className="bg-white z-10 p-8 rounded-lg shadow-md w-14/15 h-auto  grid grid-cols-1 md:grid-cols-2">
      <div className=" justify-left items-left p-8">
        <h2 className="text-3xl font-bold mb-6 text-left">Sign In</h2>
         <form onSubmit={handleSubmit} className="space-y-4">
        <FormItem name={"username"} placeholder={"Enter Username"} Icon={FaUserLarge} error={errors.username} handleChange={handleChange} />
        <FormItem name={"password"} type={"password"} placeholder={"Enter Password"} Icon={IoMdLock} error={errors.password} handleChange={handleChange} />

        
        <div className="flex items-center mb-4">
          <input type="checkbox" id="rememberMe" className="mr-2" name="agreeToTerms" onChange={handleChange}/>
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
          {errors.agreeToTerms && <p className="text-red-500 text-sm">{errors.agreeToTerms}</p>}

       
        <button type="submit" className="w-1/2 bg-red-500 text-white p-2 rounded">Login</button>
        </form>
        
        <div className="flex justify-left space-x-4 mt-4">
      
          <p className="mt-4">Dr, Login with</p>
          <BiLogoFacebookSquare className="inline-block text-blue-600 text-2xl mx-2 mt-4 hover:text-blue-800 cursor-pointer" />
        <BiLogoGoogle className="inline-block text-red-500 text-2xl mx-2 mt-4 hover:text-red-600 cursor-pointer" />
        <RiTwitterXFill className="inline-block text-black text-2xl mx-2 mt-4 hover:text-gray-700 cursor-pointer" />

        </div>

       
        <p className="mt-4 text-left">
          Don't have an account?  
          <Link to="/SignUp" className="text-blue-500 font-bold ml-1">Create One</Link>
        </p>

      </div>
      <div className="flex justify-center items-center">
    <img
      src={logInImage}
      alt="Login Visual"
      className="w-5/6 max-h-[400px] object-contain"
    />
  </div>
      </div>
      
      </>
    
  );
};

export default LogIn;
