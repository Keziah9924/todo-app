import React from "react";
import { Link } from "react-router-dom";
import SidebarImage from "../assets/Ellipse1.svg";
import { MdDashboard } from "react-icons/md";
import { BsExclamationLg } from "react-icons/bs";
import { BiTask } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";





const Sidebar = () => {
  return (
    <aside className="w-64 bg-red-400 text-white h-screen p-6 flex flex-col justify-between fixed left-0 rounded-tr-lg top-30">
      {/* Profile Section */}
      <div>
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center mb-20">
          <img
            src={SidebarImage} 
            alt="Sundar"
            className="w-20 h-20 rounded-full mb-2 border-4 border-white"
          />
          <h2 className="font-bold text-lg">Sundar Gurung</h2>
          <p className="text-sm">sundargurung@gmail.com</p>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-4 mt-19 px-4 ">
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
          className="flex items-center gap-3 mt-18 px-4 py-2 hover:bg-red-300 cursor-pointer rounded-lg cursor-pointer"
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

// import React from "react";
// import { FaThLarge, FaClipboardList, FaTasks, FaCog, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";

// const Sidebar = () => {
//   return (
//     <aside className="w-64 bg-red-400 min-h-screen relative shadow-md pt-20">
//       {/* Floating Image */}
//       <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//         <img
//           src="/avatars/1.jpg" // Update this path as needed
//           alt="Profile"
//           className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
//         />
//       </div>

//       {/* User Info */}
//       <div className="text-center text-white mt-2">
//         <h2 className="font-semibold text-md">Sundar Gurung</h2>
//         <p className="text-sm">sundargurung360@gmail.com</p>
//       </div>

//       {/* Menu Items */}
//       <nav className="mt-6 px-4 space-y-3 text-white">
//         <button className="flex items-center gap-2 bg-white text-red-500 px-3 py-2 rounded-lg w-full">
//           <FaThLarge /> Dashboard
//         </button>
//         <button className="flex items-center gap-2 w-full">
//           <FaClipboardList /> Vital Task
//         </button>
//         <button className="flex items-center gap-2 w-full">
//           <FaTasks /> My Task
//         </button>
//         <button className="flex items-center gap-2 w-full">
//           <FaTasks /> Task Categories
//         </button>
//         <button className="flex items-center gap-2 w-full">
//           <FaCog /> Settings
//         </button>
//         <button className="flex items-center gap-2 w-full">
//           <FaQuestionCircle /> Help
//         </button>
//       </nav>

//       {/* Logout */}
//       <div className="absolute bottom-5 w-full px-4">
//         <button className="flex items-center gap-2 text-white w-full">
//           <FaSignOutAlt /> Logout
//         </button>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;
