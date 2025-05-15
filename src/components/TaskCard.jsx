import React from "react";
import { BsThreeDots } from "react-icons/bs";

const TaskCard = ({ title, desc, date, status, image, priority = "Moderate" }) => {
  const statusColors = {
    "Not Started": "text-red-500",
    "In Progress": "text-blue-500",
    "Completed": "text-green-500",
  };

  const dotColors = {
    "Not Started": "bg-red-500",
    "In Progress": "bg-blue-500",
    "Completed": "bg-green-500",
  };

  return (
    <div className="relative border rounded-lg p-4 flex justify-between items-start hover:shadow bg-white">
      {/* Three-dot icon */}
      <div className="absolute top-2 right-2 text-gray-400 cursor-pointer hover:text-gray-600">
      <BsThreeDots size={18} />
      </div>

      {/* Left content */}
      <div className="flex-1 pr-4">
        {/* Title */}
        <div className="flex items-center gap-2 mb-1">
          <span className={`w-3 h-3 rounded-full ${dotColors[status]}`}></span>
          <h3 className="font-semibold text-sm text-gray-900">{title}</h3>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-snug mb-3">{desc}</p>

        {/* Footer */}
        <div className="flex flex-wrap items-center justify-between text-xs text-gray-500">
          <div className="flex gap-3">
            <span>
              <span className="font-semibold">Priority:</span>{" "}
              <span className="text-blue-500">{priority}</span>
            </span>
            <span>
              <span className="font-semibold">Status:</span>{" "}
              <span className={`${statusColors[status]}`}>{status}</span>
            </span>
          </div>
          <span className="text-gray-400">Created on: {date}</span>
        </div>
      </div>

      {/* Right image */}
      <img
        src={image}
        alt={title}
        className="w-16 h-16 object-cover rounded-lg ml-4 shrink-0 mt-6"
      />
    </div>
  );
};

export default TaskCard;
