import React from "react";
import { motion , AnimatePresence } from "framer-motion";
import { BsReplyFill } from "react-icons/bs";


const NotificationItem = ({ title, highlight, time, priority, image }) => {
  const priorityColor =
    priority === "High"
      ? "text-red-500"
      : priority === "High"
      ? "text-red-500" // In the image, 'High' is also red
      : "text-red-400"; // Defaulting moderate to a lighter red based on the image's theme

  return (
    <div className="flex justify-between items-start gap-4 py-4 border-b border-gray-300 last:border-none">
      <div className="flex-1">
        <p className="text-[15px] text-gray-800 leading-snug">
          {title} <span className="font-bold">{highlight}</span>{" "}
          <span className="text-gray-400 ml-1">{time}</span>
        </p>
        <p className="text-xs text-gray-900 font-bold mt-1">
          Priority: <span className={`font-medium ${priorityColor}`}>{priority}</span>
        </p>
      </div>

      <img
        src={image}
        alt="notification"
        className="w-12 h-12 object-cover rounded-lg flex-shrink-0"
      />
    </div>
  );
};

const NotificationPane = ({ isOpen, onClose, notifications }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Invisible overlay to catch clicks outside */}
          <div
            className="fixed inset-0 z-40"
            onClick={onClose}
          />

          {/* Dropdown modal */}
          <motion.div
            className="fixed z-50 top-[76px] right-[20px] md:right-[80px] w-[380px] max-h-[85vh] bg-[#cccfd4] rounded-2xl shadow-2xl overflow-hidden flex flex-col origin-top-right"
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header (White background) */}
            <div className="bg-white px-6 py-5 flex justify-between items-start rounded-t-2xl">
              <div>
                <h2 className="text-[1.1rem] font-bold text-black leading-tight">
                  Notifications
                </h2>
                <p className="text-sm text-gray-400 mt-2">Today</p>
              </div>
              <button 
                onClick={onClose}
                className="text-[#ff6b6b] hover:text-red-600 transition-colors mt-1 mr-1"
              >
                <BsReplyFill size={24} />
              </button>
            </div>

            {/* Body (Gray background) */}
            <div className="overflow-y-auto px-6 pb-2">
              {notifications.map((n, i) => (
                <NotificationItem key={i} {...n} />
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NotificationPane;
