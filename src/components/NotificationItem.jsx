import React from "react";

const NotificationItem = ({ title, project, time, priority, image }) => {
  return (
    <div className="flex justify-between items-center py-4 border-b border-gray-300">
      <div className="flex-1 pr-3">
        <p className="text-sm text-gray-800 leading-snug">
          Complete the <span className="font-semibold">{title}</span> for{" "}
          <span className="font-semibold">{project}</span>.{" "}
          <span className="text-gray-400 text-xs">{time}</span>
        </p>
        <p className="text-xs mt-1">
          Priority:{" "}
          <span className="text-red-500 font-semibold">{priority}</span>
        </p>
      </div>

      <img
        src={image}
        alt=""
        className="w-12 h-12 rounded-md object-cover"
      />
    </div>
  );
};

export default NotificationItem;
