import React, { useState } from "react";
import { Link } from "react-router-dom";
import Joi from "joi";
import { LuUserRoundPen } from "react-icons/lu";
import { FaUserLarge } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { MdLockOutline } from "react-icons/md";
import bgImage from "../assets/R1.svg";
import SignUpImage from "../assets/R2.svg"; 



const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({});

  const schema = Joi.object({
    firstName: Joi.string().min(2).required().messages({
      "string.empty": "First name is required",
      "string.min": "First name must be at least 2 characters",
    }),
    lastName: Joi.string().min(2).required().messages({
      "string.empty": "Last name is required",
      "string.min": "Last name must be at least 2 characters",
    }),
    username: Joi.string().alphanum().min(3).required().messages({
      "string.empty": "Username is required",
      "string.alphanum": "Username must be alphanumeric",
      "string.min": "Username must be at least 3 characters",
    }),
    email: Joi.string().email({ tlds: { allow: false } }).required().messages({
      "string.empty": "Email is required",
      "string.email": "Enter a valid email address",
    }),
    password: Joi.string().min(6).required().messages({
      "string.empty": "Password is required",
      "string.min": "Password must be at least 6 characters",
    }),
    confirmPassword: Joi.string()
      .valid(Joi.ref("password"))
      .required()
      .messages({
        "any.only": "Passwords must match",
        "string.empty": "Confirm Password is required",
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
    const validation = schema.validate(formData, { abortEarly: false });

    if (validation.error) {
      const errorMessages = {};
      validation.error.details.forEach((detail) => {
        errorMessages[detail.path[0]] = detail.message;
      });
      setErrors(errorMessages);
    } else {
      console.log("Sign Up Successful!", formData);
      setErrors({});
    }
  };

  return (
    <div className=" flex items-center justify-center bg-cover h-screen w-screen"
     style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-white p-10 rounded-lg shadow-lg w-190 h-150 grid grid-cols-1 md:grid-cols-2">
      <div className="flex justify-center items-center">
          <img
            src={SignUpImage}
            alt="Login Visual"
            className="w-4/4 max-h-[500px] object-contain"
          />
        </div>
      <div className=" justify-right items-right p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">

        <div className="relative">
        <LuUserRoundPen className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black-500 text-xl" />
          <input
            type="text"
            name="firstName"
            placeholder="Enter First Name"
            className="w-full px-10 py-2 border rounded-lg"
            onChange={handleChange}
          />
            
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
          </div>
          <div className="relative">
          <LuUserRoundPen className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black-500 text-xl" />
          <input
          
            name="lastName"
            placeholder="Enter Last Name"
            type="text"
            className="w-full px-10 py-2 border rounded-lg"
            onChange={handleChange}
          />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
          </div>

          <div className="relative">
          <FaUserLarge className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black-500 text-lg" />
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            className="w-full px-10 py-2 border rounded-lg"
            onChange={handleChange}
          />
          {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
          </div>

          <div className="relative">
          <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black-500 text-xl" />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            className="w-full px-10 py-2 border rounded-lg"
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="relative">
          <IoMdLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black-500 text-xl" />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className="w-full px-10 py-2 border rounded-lg"
            onChange={handleChange}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>
          <div className="relative">
          <MdLockOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black-500 text-xl" />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full px-10 py-2 border rounded-lg"
            onChange={handleChange}
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" name="agreeToTerms" onChange={handleChange} />
            <label>I agree to all terms</label>
          </div>
          {errors.agreeToTerms && <p className="text-red-500 text-sm">{errors.agreeToTerms}</p>}

          <button className="w-full bg-red-500 text-white py-2 rounded-lg">Register</button>
        </form>

        <p className="text-center mt-4">
          Already have an account? <Link to="/LogIn" className="text-blue-500">LogIn</Link>
        </p>
      </div>
      </div>
    </div>
  );
};

export default SignUp;
