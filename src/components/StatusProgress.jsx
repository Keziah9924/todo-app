import React from "react";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import cloudinaryImages from "../assets/cloudinary";

const StatusProgress = () => {
  const statusData = [
    { label: "Completed", value: 84, color: "#16A34A" }, // green-600
    { label: "In Progress", value: 46, color: "#2563EB" }, // blue-600
    { label: "Not Started", value: 13, color: "#DC2626" }, // red-600
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
      {/* Title with Cloudinary Pending Icon */}
      <h2 className="flex items-center text-red-500 font-bold text-md mb-4">
        <img
          src={cloudinaryImages.pending} 
          alt="pending"
          className="w-6 h-6 mr-2"
        />
        <span>Task Status</span>
      </h2>

      {/* Status Progress Circles */}
      <div className="flex justify-between items-center gap-4">
        {statusData.map((status, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-20 h-20 mb-2">
              <CircularProgressbar
                value={status.value}
                text={`${status.value}%`}
                styles={buildStyles({
                  pathColor: status.color,
                  textColor: "#000",
                  trailColor: "#e5e7eb",
                })}
              />
            </div>
            <div className="text-sm mt-1">
              <span
                className="inline-block w-2 h-2 rounded-full mr-1"
                style={{ backgroundColor: status.color }}
              ></span>
              {status.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusProgress;
