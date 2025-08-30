import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Joi from "joi";
import { LuUserRoundPen } from "react-icons/lu";
import { FaUserLarge } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { MdLockOutline } from "react-icons/md";
import AuthBackDrop from "../components/AuthBackDrop";
import InputBox from "../components/InputBox";
import FormItem from "../components/FormItem"; 
import cloudinaryImages from "../assets/cloudinary"; // ✅ Import Cloudinary links

const SignUp = () => {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");

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
    console.log("You clicked Register", formData);
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
      navigate("/LogIn");
      setSuccessMessage("Registration successful! Redirecting to login...");
    }
  };

  return (
    <>
      <AuthBackDrop />
      <div className="bg-white z-10 p-10 rounded-lg shadow-lg w-[90%] h-auto grid grid-cols-1 md:grid-cols-2">
        {/* LEFT SIDE - IMAGE */}
        <div className="flex justify-center items-center">
          <img
            src={cloudinaryImages.R2} // ✅ Cloudinary signup image
            alt="Sign Up Visual"
            className="w-4/4 max-h-[400px] object-contain"
          />
        </div>

        {/* SUCCESS MESSAGE */}
        {successMessage && (
          <div className="bg-green-100 border border-green-300 text-green-800 px-4 py-2 rounded mb-4 text-sm">
            {successMessage}
          </div>
        )}

        {/* RIGHT SIDE - FORM */}
        <div className="justify-right items-right p-8">
          <h2 className="text-2xl font-bold text-left mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <FormItem
              name={"firstName"}
              placeholder={"Enter First Name"}
              Icon={LuUserRoundPen}
              error={errors.firstName}
              handleChange={handleChange}
            />
            <FormItem
              name={"lastName"}
              placeholder={"Enter Last Name"}
              Icon={LuUserRoundPen}
              error={errors.lastName}
              handleChange={handleChange}
            />
            <FormItem
              name={"username"}
              placeholder={"Enter Username"}
              Icon={FaUserLarge}
              error={errors.username}
              handleChange={handleChange}
            />
            <FormItem
              name={"email"}
              type={"email"}
              placeholder={"Enter Email"}
              Icon={MdEmail}
              error={errors.email}
              handleChange={handleChange}
            />
            <FormItem
              name={"password"}
              type={"password"}
              placeholder={"Enter Password"}
              Icon={IoMdLock}
              error={errors.password}
              handleChange={handleChange}
            />
            <FormItem
              name={"confirmPassword"}
              type={"password"}
              placeholder={"Confirm Password"}
              Icon={MdLockOutline}
              error={errors.confirmPassword}
              handleChange={handleChange}
            />

            <div className="flex items-center gap-2">
              <input type="checkbox" name="agreeToTerms" onChange={handleChange} />
              <label>I agree to all terms</label>
            </div>
            {errors.agreeToTerms && (
              <p className="text-red-500 text-sm">{errors.agreeToTerms}</p>
            )}

            <button
              type="submit"
              className="w-1/2 bg-red-500 text-white py-2 rounded-lg"
            >
              Register
            </button>
          </form>

          <p className="text-left mt-4">
            Already have an account?{" "}
            <Link to="/" className="text-blue-500">
              LogIn
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
