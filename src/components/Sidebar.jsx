import React from "react";
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
    <aside className="w-64 bg-red-400 text-white h-screen p-6 flex flex-col justify-between fixed left-0 top-30">
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
          <div className="flex items-center gap-3 bg-white text-red-500 px-4 py-2 rounded-lg font-semibold">
          <MdDashboard />
            <span>Dashboard</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 hover:bg-red-300 rounded-lg">
          <BsExclamationLg />
            <span>Vital Task</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 hover:bg-red-300 rounded-lg">
          <BiTask />
            <span>My Task</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 hover:bg-red-300 rounded-lg">
          <FaTasks />
            <span>Task Categories</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 hover:bg-red-300 rounded-lg">
          <IoMdSettings />
            <span>Settings</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 hover:bg-red-300 rounded-lg">
          <IoMdHelpCircleOutline />
            <span>Help</span>
          </div>
          <div className="flex items-center gap-3 mt-18 px-4 py-2 hover:bg-red-300 rounded-lg cursor-pointer">
        <LuLogOut />
          <span>Logout</span>
        </div>
        </nav>
      </div>

      
    </aside>
  );
};

export default Sidebar;

// // src/components/Sidebar.jsx
// import React from "react";
// 

// const Sidebar = () => {
//   return (
//     <div className="bg-red-400 absolute text-white left-0 w-64 h-screen flex flex-col justify-between ">
      
//       <div className="flex flex-col items-center relative mb-5">
//             <img
//               src=
//               alt="Profile"
//               className="rounded-full w-20 h-20 mb-4"
//             />
//             <div className="text-center">
//               <h2 className="font-semibold text-lg">Sundar Gurung</h2>
//               <p className="text-xs text-red-100">sundargurung@gmail.com</p>
//             </div>
//           </div>
//       <nav className="flex flex-col space-y-4">
//         <a href="#" className="hover:text-red-200">Dashboard</a>
//         <a href="#" className="hover:text-red-200">Vital Task</a>
//         <a href="#" className="hover:text-red-200">My Task</a>
//         <a href="#" className="hover:text-red-200">Task Categories</a>
//         <a href="#" className="hover:text-red-200">Settings</a>
//         <a href="#" className="hover:text-red-200">Help</a>
//         <a href="#" className="hover:text-red-200 mt-auto">Logout</a>
//       </nav>
//     </div>
//   );

// };

// export default Sidebar;
