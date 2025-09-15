import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi"; 


const MemberItem = ({ avatar, name, email, role }) => {
  return (
    <div className="flex justify-between items-center py-2">
      {/* Left Side - Avatar */}
      <div className="flex items-center gap-3">
        <img src={avatar} alt={name} className="w-9 h-9 rounded-full" />
        <div>
          <p className="text-sm font-medium text-gray-800">{name}</p>
          <p className="text-xs text-gray-500">{email}</p>
        </div>
      </div>

      {/* Role + Dropdown */}
      <div className="flex items-center gap-1 text-xs text-black-500 cursor-pointer">
        <span>{role}</span>
        <FiChevronDown className="w-4 h-4" />
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
            className="absolute inset-0 backdrop-blur-sm bg-opacity-20"
            onClick={onClose}
          />

          {/* Modal Box */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-lg shadow-lg w-[450px] p-6 z-10"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800 cursor-pointer">
                Send an Invite to a new member
              </h2>

              <button
                onClick={onClose}
                className="text-m- font-bold text-black-500 hover:underline cursor-pointer"
              >
                Go Back
              </button>
            </div>

            {/* Invite Form */}
            <div className="border border-sm border-gray-300 p-4">
              <div className="flex flex-col mb-4 gap-2 mb-5">
                <div className="flex flex-col mb-4 w-full">
                  <h3 className="font-bold mb-1">Email</h3>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="neerajgurug99@gmail.com"
                      className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-red-400"
                    />
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md text-sm cursor-pointer">
                      Send Invite
                    </button>
                  </div>
                </div>
              </div>

              <h3 className="font-bold mb-3">Member</h3>
              {/* Members List */}
              <div className="mb-6 space-y-3">
                {members.map((m, i) => (
                  <MemberItem key={i} {...m} />
                ))}
              </div>

              {/* Project Link */}
              <h3 className="font-bold mb-1">Project link</h3>
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  value="https://sharelink.example.com/sd92d92"
                  readOnly
                  className="flex-1 border border-gray-200 rounded-md px-2 py-2 text-xs text-gray-500"
                />
                <button className="ml-2 bg-red-500 text-white px-3 py-2 text-xs rounded-md cursor-pointer">
                  Copy Link
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InviteModal;
