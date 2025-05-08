    import React from "react";
    import { IoIosSearch } from "react-icons/io";
    import { IoIosNotificationsOutline } from "react-icons/io";
    import { FaCalendarAlt } from "react-icons/fa";

    const Header = () => {
    return (
        <header className=" fixed w-full flex bg-white px-6 py-4 shadow-md left-0 top-0 justify-between">
            {/* Logo */}
            <h1 className="text-2xl font-bold ml-4">
            <span className="text-red-500">Dash</span>
            <span className="text-black">board</span>
        </h1>
        {/* Search Box */}
        
        <div className="flex relative items-center bg-gray-100 rounded-lg h-6 mt-2 px-2 py-2 w-full max-w-lg shadow-md">
            <input
            type="text"
            placeholder="Search your task here..."
            className="bg-transparent outline-none w-full text-sm text-gray-700"
            />
            <button className="p-1 absolute right-0 bg-red-500 h-full rounded-lg text-white ">
            <IoIosSearch className="text-white-400 " />
            </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6 mr-7">
            
        {/* Icons + Date */}
        <div className="flex items-center gap-2">
                <button className="p-1 bg-red-500 rounded-lg text-white shadow">
                <IoIosNotificationsOutline  size={14} />
                </button>
                <button className="p-1 bg-red-500 rounded-lg text-white shadow">
                <FaCalendarAlt  size={14} />
                </button>

            </div>

            {/* Date */}
            <div className="text-sm text-right leading-tight">
            <p className="font-semibold">Tuesday</p>
            <p className="text-blue-300">2025/04/22</p>
            </div>
        </div>
        </header>
    );
    };

    export default Header;
