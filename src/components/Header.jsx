import React from "react";
import { IoIosSearch } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";

const Header = ({label}) => {
  //  JavaScript to get current day and date
  const today = new Date();
  const day = today.toLocaleDateString("en-US", { weekday: "long" });
  const date = today.toLocaleDateString("en-CA"); // e.g., 2025-04-22

  return (
    <header className="fixed w-full flex bg-white px-6 py-4 shadow-md left-0 top-0 justify-between z-30">
      {/* Logo */}
      <h1 className="text-2xl font-bold ml-4">
        <span className="text-red-500">Dash</span>
        <span className="text-black">board</span>
        <span className="text-black">{label}</span>
      </h1>

      {/* Search Box */}
      <div className="flex relative items-center bg-gray-100 rounded-lg h-6 mt-2 px-4 py-4 w-full max-w-lg shadow-md">
        <input
          type="text"
          placeholder="Search your task here..."
          className="bg-transparent outline-none w-full text-sm text-gray-700"
        />
        <button className="p-1 absolute right-0 bg-red-500 h-full rounded-lg text-white">
          <IoIosSearch className="text-white-400" />
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6 mr-7">
        {/* Icons */}
        <div className="flex items-center gap-2">
          <button className="p-1 bg-red-500 rounded-lg text-white shadow">
            <IoIosNotificationsOutline size={14} />
          </button>
          <button className="p-1 bg-red-500 rounded-lg text-white shadow">
            <FaCalendarAlt size={14} />
          </button>
        </div>

        {/* Dynamic Date */}
        <div className="text-sm text-right leading-tight">
          <p className="font-semibold">{day}</p>
          <p className="text-[#3ABEFF]">{date}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
