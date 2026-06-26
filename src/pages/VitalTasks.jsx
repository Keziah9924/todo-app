import React from "react";
import Layout from "../components/Layout";
import cloudinaryImages from "../assets/cloudinary";
import { FaTrash } from "react-icons/fa";
import { RiEditBoxLine } from "react-icons/ri";


const VitalTask = () => {

  return (
    <Layout label="To-Do">

      <div className="flex gap-4 mt-15 mx-18 h-[calc(100vh-150px)]">

        {/* LEFT SIDE - VITAL TASK LIST */}
        <div className="w-[35%] bg-white rounded-xl border border-gray-300 p-4 shadow-sm">
          <h2 className="font-bold text-medium mb-4">
             <span className="underline decoration-2 decoration-red-500"> Vital </span>
            Tasks
          </h2>

          {/* Task 1 */}
          <div className="border border-gray-300 rounded-lg bg-gray-200 p-3 mb-3 flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-red-500">
                  ●
                </span>
                <h3 className="font-semibold text-medium">
                  Walk the dog
                </h3>
              </div>

              <p className="text-small text-gray-400 mt-3">
                Take the dog to the park and bring treats as well....
              </p>

              <div className="text-[12px] mt-3">

                <span>
                  Priority:
                </span>

                <span className="text-red-500 ml-1">
                  Extreme
                </span>
                <span className="ml-3">
                  Status:
                </span>
                <span className="text-red-500 ml-1">
                  Not Started
                </span>
              </div>
            </div>
            <img
              src={cloudinaryImages.dog}
              alt="dog"
              className="w-18 h-18 rounded-lg object-cover"
            />
          </div>
          {/* Task 2 */}

          <div className="border border-gray-300 rounded-lg p-3 flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-blue-500">
                  ●
                </span>
                <h3 className="font-semibold text-sm">
                  Take grandma to hospital
                </h3>
              </div>
              <p className="text-small text-gray-400 mt-3">
                Go back home and take grandma to the hosp....
              </p>
              <div className="text-[12px] mt-3">
                <span>
                  Priority:
                </span>
                <span className="text-blue-500 ml-1">
                  Moderate
                </span>
                <span className="ml-3">
                  Status:
                </span>
                <span className="text-blue-500 ml-1">
                  In Progress
                </span>
              </div>
            </div>
            <img
              src={cloudinaryImages.hospital}
              alt="hospital"
              className="w-18 h-18 rounded-lg object-cover"
            />
          </div>
        </div>
        {/* RIGHT SIDE - TASK DETAILS */}
        <div className="flex-1 bg-white rounded-xl border border-gray-300 p-6 relative
 shadow-sm">
          <div className="flex gap-4">
            <img
              src={cloudinaryImages.dog}
              alt="dog"
              className="w-40 h-40 rounded-lg object-cover"
            />
            <div className="mt-12">
              <h2 className="font-bold text-medium">
                Walk the dog
              </h2>
              <p className="text-xs mt-2">
                Priority:
                <span className="text-red-500 ml-1">
                  Extreme
                </span>
              </p>
              <p className="text-xs mt-1">
                Status:
                <span className="text-red-500 ml-1">
                  Not Started
                </span>
              </p>
              <p className="text-xs text-gray-400 mt-3">
                Created on: 20/06/2023
              </p>
            </div>
          </div>
          <p className="text-gray-500 text-medium mt-6">
            Take the dog to the park and bring treats as well.
          </p>
          <p className="text-gray-500 text-medium mt-6 leading-7 max-w-4xl
">
            Take Luffy and Jiro for a leisurely stroll around the 
            neighborhood. Enjoy the fresh air and give them exercise
            and mental stimulation they need for a happy and healthy
            day. Don't forget to bring along squeaky and fluffy for
            some extra fun along the way!
          </p>
          <ol className="list-decimal ml-5 text-gray-500 text-medium mt-8 space-y-2">
            <li>
              Listen to a podcast or audiobook
            </li>
            <li>
              Practice mindfulness or meditation
            </li>
            <li>
              Take photos of interesting sights
            </li>
            <li>
              Practice obedience training with your dog
            </li>
            <li>
              Chat with neighbors or dog walkers
            </li>
            <li>
              Listen to music or an upbeat playlist
            </li>
          </ol>
          <div className="absolute bottom-6 right-6 flex gap-3">
            <button className="bg-red-500 text-white p-2 rounded-lg">
              <FaTrash />
            </button>
            <button className="bg-red-500 text-white p-2 rounded-lg">
              <RiEditBoxLine size={18}/>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VitalTask;