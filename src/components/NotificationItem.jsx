import React from "react";

const NotificationItem = ({ title, highlight, time, priority, image }) => {
  return (
    <div className="flex items-center justify-between">
      {/* Left side: text */}
      <div className="flex flex-col flex-1 pr-3">
        {/* Title + Time */}
        <p className="text-sm text-gray-800 leading-snug">
          Complete the{" "}
          <span className="font-semibold">{highlight || title}</span>
          <span className="ml-2 text-xs text-gray-500">{time}</span>
        </p>

        {/* Priority */}
        <span
          className={`text-sm mt-1 ${
            priority === "Extremely High"
              ? "text-red-600 font-bold"
              : "text-red-500 font-medium"
          }`}
        >
          Priority: {priority}
        </span>
      </div>

      {/* Right side: thumbnail */}
      {image && (
        <img
          src={image}
          alt="notification"
          className="w-12 h-12 rounded-md object-cover flex-shrink-0"
        />
      )}
    </div>
  );
};

export default NotificationItem;
