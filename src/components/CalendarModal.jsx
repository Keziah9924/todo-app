import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsReplyFill } from "react-icons/bs";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

const CalendarModal = ({ isOpen, onClose }) => {
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  const dates = [
    "", "", "", "", "", "1", "2",
    "3", "4", "5", "6", "7", "8", "9",
    "10", "11", "12", "13", "14", "15", "16",
    "17", "18", "19", "20", "21", "22", "23",
    "24", "25", "26", "27", "28", "29", "30",
    "31"
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                       w-[410px] bg-[#f3f4f8] rounded-2xl p-6 shadow-2xl"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-bold text-[26px] text-black">
                Calendar
              </h2>

              <button onClick={onClose}>
                <BsReplyFill
                  className="text-[#ff6666] size={30} text-xl"
                />
              </button>
            </div>

            {/* Date Input */}
            <div className="relative mb-4">
              <input
                value="June 6, 2023"
                readOnly
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white text-black font-medium"
              />
              <span className="absolute right-3 top-2 text-gray-400">
                x
              </span>
            </div>

            {/* Month Navigation */}
            <div className="flex items-center justify-between mb-5">
              <button className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center bg-white">
                <SlArrowLeft />
              </button>

              <h3 className="font-semibold text-lg">
                June 2023
              </h3>

              <button className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center bg-white">
                <SlArrowRight />

              </button>
            </div>

            {/* Week Days */}
            <div className="grid grid-cols-7 text-center mb-4">
              {days.map((day) => (
                <div
                  key={day}
                  className="text-[11px] text-gray-400 font-semibold"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Dates */}
            <div className="grid grid-cols-7 gap-y-4 text-center">
              {dates.map((date, index) => (
                <div
                  key={index}
                  className={`
                    w-8 h-8 flex items-center justify-center mx-auto
                    text-sm
                    ${
                      date === "6"
                        ? "bg-[#3d2df5] text-white rounded-full"
                        : "text-gray-500"
                    }
                  `}
                >
                  {date}
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CalendarModal;