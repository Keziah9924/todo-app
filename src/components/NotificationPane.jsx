import React, { useEffect } from "react";

const NotificationPane = ({ isOpen, onClose, notifications }) => {
  // Close when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.id === "notificationOverlay") onClose();
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="notificationOverlay"
      className="fixed inset-0 bg-black bg-opacity-40 flex justify-end z-50"
    >
      <div className="bg-white w-80 h-full shadow-lg p-4 animate-slideIn">
        <h2 className="font-bold text-lg mb-4">Notifications</h2>
        <ul className="space-y-3">
          {notifications.map((note, i) => (
            <li key={i} className="border-b pb-2">
              <p className="font-medium">{note.title}</p>
              <p className="text-sm text-gray-600">{note.message}</p>
              <span className="text-xs text-gray-400">{note.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NotificationPane;
