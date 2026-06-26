import React from "react";
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { BsExclamationLg } from "react-icons/bs";
import { BiTask } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import cloudinaryImages from "../assets/cloudinary";

const Sidebar = () => {
  const linkStyle = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
      isActive
        ? "bg-white text-red-500 font-semibold"
        : "hover:bg-red-300 text-white"
    }`;
  return (
    <aside className="hidden fixed left-0 md:flex flex-col justify-between w-64 h-screen bg-red-400 text-white p-6 rounded-tr-lg top-30">
      {/* Profile Section */}
      <div>
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center mb-20">
          <img
            src={cloudinaryImages.ellipse1} 
            alt="Sundar"
            className="w-20 h-20 rounded-full mb-2 border-4 border-white"
          />
          <h2 className="font-bold text-lg">Sundar Gurung</h2>
          <p className="text-sm">sundargurung@gmail.com</p>
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-col mt-20 px-4">
          <div className="space-y-4">
          <NavLink
            to="/dashboard"                              
            className={linkStyle}
          >
            <MdDashboard />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/vital-tasks"
            className={linkStyle}
          >
            <BsExclamationLg />
            <span>Vital Task</span>
          </NavLink>

          <NavLink
            to="/my-tasks"
            className={linkStyle}
          >
            <BiTask />
            <span>My Task</span>
          </NavLink>

          <NavLink
            to="/task-categories"
            className={linkStyle}
          >
            <FaTasks />
            <span>Task Categories</span>
          </NavLink>

          <NavLink
            to="/settings"
            className={linkStyle}
          >
            <IoMdSettings />
            <span>Settings</span>
          </NavLink>

          <NavLink
            to="/help"
            className={linkStyle}
          >
            <IoMdHelpCircleOutline />
            <span>Help</span>
          </NavLink>
          </div>

          <NavLink
            to="/logout"
            className={linkStyle}
          >
          
            <LuLogOut />
            <span>Logout</span>
          </NavLink>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
