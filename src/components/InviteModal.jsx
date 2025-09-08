import React from "react";

const InviteModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render if modal is closed

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackgroundClick}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300"
    >
      <div
        className="bg-white p-6 rounded-2xl w-96 shadow-lg transform transition-all duration-300 scale-100"
      >
        <h2 className="text-xl font-bold mb-4">Invite Team Members</h2>
        <p className="text-gray-600 mb-4">Enter an email address to send an invite.</p>
        <input
          type="email"
          placeholder="example@email.com"
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4"
        />
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
        >
          Send Invite
        </button>
      </div>
    </div>
  );
};

export default InviteModal;
