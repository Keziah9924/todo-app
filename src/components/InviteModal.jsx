import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi"; 

const MemberItem = ({ avatar, name, email, role }) => {
  return (
    <div className="flex justify-between items-center py-2.5">
      {/* Left Side - Avatar */}
      <div className="flex items-center gap-3">
        <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover" />
        <div>
          <p className="text-[14px] font-bold text-black leading-none mb-1">{name}</p>
          <p className="text-[12px] text-gray-500 font-medium">{email}</p>
        </div>
      </div>

      {/* Role + Dropdown */}
      <div className="flex items-center gap-1 text-[13px] font-semibold text-black cursor-pointer">
        <span>{role}</span>
        <FiChevronDown className="w-4 h-4 ml-0.5" />
      </div>
    </div>
  );
};

const InviteModal = ({ isOpen, onClose, members }) => {
  // Close modal when clicking outside
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Dark Overlay */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Box */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative bg-white rounded-md shadow-2xl w-[460px] p-6 z-10"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4 px-1">
              <h2 className="text-[16px] font-bold text-black">
                <span className="border-b-[2px] border-[#FA5D29] pb-[2px]">Send an invite</span> to a new member
              </h2>

              <button
                onClick={onClose}
                className="text-[13px] font-bold text-black underline underline-offset-[3px] decoration-1 cursor-pointer hover:text-gray-700"
              >
                Go Back
              </button>
            </div>

            {/* Invite Form Wrapper */}
            <div className="border border-gray-200 rounded-md p-5">
              
              {/* Email Section */}
              <div className="flex flex-col mb-5">
                <h3 className="font-bold text-[14px] text-black mb-1.5">Email</h3>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="neerajgurung99@gmail.com"
                    className="flex-1 border border-gray-300 rounded-[4px] px-3 py-2 text-[13px] text-gray-500 placeholder-gray-400 focus:outline-none focus:border-[#FA5D29] focus:ring-1 focus:ring-[#FA5D29]"
                  />
                  <button className="bg-red-400 hover:bg-[#E05023] text-white font-medium px-6 py-2 rounded-[4px] text-[13px] cursor-pointer transition-colors">
                    Send Invite
                  </button>
                </div>
              </div>

              {/* Members Section */}
              <h3 className="font-bold text-[14px] text-black mb-1.5">Members</h3>
              <div className="mb-5">
                {members.map((m, i) => (
                  <MemberItem key={i} {...m} />
                ))}
              </div>

              {/* Project Link Section */}
              <h3 className="font-bold text-[14px] text-black mb-1.5">Project Link</h3>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value="https://sharelinkhereandthere.com/34565yy29"
                  readOnly
                  className="flex-1 border border-gray-300 rounded-[4px] px-3 py-2 text-[13px] text-gray-400 bg-white focus:outline-none"
                />
                <button className="bg-red-400 hover:bg-[#E05023] text-white font-medium px-6 py-2 rounded-[4px] text-[13px] cursor-pointer transition-colors">
                  Copy Link
                </button>
              </div>

            </div>
          </motion.div>

          {/* Floating Card at Top Right Corner */}
          <div className="fixed top-6 right-0 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.1)] rounded-l-md px-4 py-2 flex items-center gap-6 z-[100]">
            <h1 className="text-[20px] font-bold tracking-tight">
              <span className="text-red-400">Dash</span>
              <span className="text-black">board</span>
            </h1>
            <div className="bg-[#f8f9fa] border border-gray-100 rounded-md px-3 py-1.5 w-[220px]">
              <input
                type="text"
                placeholder="Search your task here..."
                className="bg-transparent outline-none w-full text-[12px] text-gray-500 placeholder-gray-400"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InviteModal;
