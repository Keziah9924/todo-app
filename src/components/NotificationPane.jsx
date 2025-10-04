import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TiArrowBack } from "react-icons/ti";
import NotificationItem from "./NotificationItem";

const NotificationPane = ({ isOpen, onClose, notifications }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black z-40"
            onClick={onClose}
          />

          {/* Centered Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div className="bg-white rounded-2xl shadow-xl w-[378px] h-[489px] flex flex-col overflow-hidden">
              
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4  bg-white sticky top-0 z-10">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Notifications</h3>
                  <p className="text-sm text-gray-500 mt-1">Today</p>
                </div>
                <TiArrowBack
                  onClick={onClose}
                  className="text-red-500 text-2xl cursor-pointer hover:text-red-600"
                />
              </div>

              {/* Notifications List */}
              <div className="flex-1 overflow-y-auto bg-gray-100">
                {notifications.length > 0 ? (
                  notifications.map((n, i) => (
                    <div
                      key={i}
                      className="px-5 py-4 border-b border-gray-300 bg-gray-200"
                    >
                      <NotificationItem {...n} />
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-400 py-10">
                    No new notifications
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NotificationPane;
