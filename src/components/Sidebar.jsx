import React from "react";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { BsExclamationLg } from "react-icons/bs";
import { BiTask } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import cloudinaryImages from "../assets/cloudinary";

const Sidebar = () => {
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
        <nav className="space-y-4 mt-19 px-4">
          <Link
            to=""
            onClick={(e) => e.preventDefault()}
            className="flex items-center gap-3 bg-white text-red-500 cursor-pointer px-4 py-2 rounded-lg font-semibold"
          >
            <MdDashboard />
            <span>Dashboard</span>
          </Link>

          <Link
            to=""
            onClick={(e) => e.preventDefault()}
            className="flex items-center gap-3 px-4 py-2 hover:bg-red-300 cursor-pointer rounded-lg"
          >
            <BsExclamationLg />
            <span>Vital Task</span>
          </Link>

          <Link
            to=""
            onClick={(e) => e.preventDefault()}
            className="flex items-center gap-3 px-4 py-2 hover:bg-red-300 cursor-pointer rounded-lg"
          >
            <BiTask />
            <span>My Task</span>
          </Link>

          <Link
            to=""
            onClick={(e) => e.preventDefault()}
            className="flex items-center gap-3 px-4 py-2 hover:bg-red-300 cursor-pointer rounded-lg"
          >
            <FaTasks />
            <span>Task Categories</span>
          </Link>

          <Link
            to=""
            onClick={(e) => e.preventDefault()}
            className="flex items-center gap-3 px-4 py-2 hover:bg-red-300 cursor-pointer rounded-lg"
          >
            <IoMdSettings />
            <span>Settings</span>
          </Link>

          <Link
            to=""
            onClick={(e) => e.preventDefault()}
            className="flex items-center gap-3 px-4 py-2 hover:bg-red-300 cursor-pointer rounded-lg"
          >
            <IoMdHelpCircleOutline />
            <span>Help</span>
          </Link>

          <Link
            to=""
            onClick={(e) => e.preventDefault()}
            className="flex items-center gap-3 mt-[16rem] px-4 py-2 hover:bg-red-300 cursor-pointer rounded-lg"
          >
            <LuLogOut />
            <span>Logout</span>
          </Link>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
