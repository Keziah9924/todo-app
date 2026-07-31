import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import cloudinaryImages from "../assets/cloudinary";
import { FaTrash } from "react-icons/fa";
import { RiEditBoxLine } from "react-icons/ri";
import { PiDotsThreeOutlineLight } from "react-icons/pi";


const MyTask = () => {
  const [tasks, setTasks] = useState([]);
const [selectedTask, setSelectedTask] = useState(null);

const API_URL = "http://localhost:3001/tasks";
useEffect(() => {
  fetchTasks();
}, []);

const fetchTasks = async () => {
  try {
    const response = await axios.get(API_URL);
    setTasks(response.data);
    setSelectedTask(response.data[0]);
  } catch (error) {
    console.log(error);
  }
};

  return (
    <Layout label="To-Do">

      <div className="flex gap-4 mt-15 mx-18 h-[calc(100vh-150px)]">

        {/* LEFT SIDE - VITAL TASK LIST */}
        <div className="w-[35%] bg-white rounded-xl border border-gray-300 p-4 shadow-sm">
          <h2 className="font-bold text-medium mb-4">
             <span className="underline decoration-2 decoration-red-500"> My </span>
            Tasks
          </h2>

          {/* Task 1 */}
          <div
  className="border border-gray-300 rounded-lg p-3 bg-gray-200 flex justify-between items-start mb-4 relative cursor-pointer"
  onClick={() => setSelectedTask(tasks[0])}
>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-red-500">
                  ●
                </span>
                <h3 className="font-semibold text-medium">
                  {tasks[0]?.title}
                </h3>
              </div>

              <p className="text-small text-gray-400 mt-3">
                {tasks[0]?.direction}
              </p>

              <div className="text-[12px] mt-3">

                <span>
                  Priority:
                </span>

                <span className="text-red-500 ml-1">
                  {tasks[0]?.priority}
                </span>
                <span className="ml-3">
                  Status:
                </span>
                <span className="text-red-500 ml-1">
                  {tasks[0]?.status}
                </span>
              </div>
            </div>
           <div className="relative">
  <img
    src={cloudinaryImages.document}
    alt="document"
    className="w-18 h-18 rounded-lg object-cover"
  />

  <button className="absolute -top-4  -right-1 text-gray-400 hover:text-gray-600">
    <PiDotsThreeOutlineLight size={18} />
  </button>
</div>
          <p className="text-xs text-gray-400 absolute bottom-2 right-3">
            Created on: {tasks[0]?.createdAt}
            </p>
            
          </div>
          {/* Task 2 */}

          <div
  className="border border-gray-300 rounded-lg p-3 mb-3 flex justify-between items-start relative cursor-pointer"
  onClick={() => setSelectedTask(tasks[1])}
>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-blue-500">
                  ●
                </span>
                <h3 className="font-semibold text-sm">
                  {tasks[1]?.title}
                </h3>
              </div>
              <p className="text-small text-gray-400 mt-3">
               {tasks[1]?.description}
              </p>
              <div className="text-[12px] mt-3">
                <span>
                  Priority:
                </span>
                <span className="text-blue-500 ml-1">
                  {tasks[1]?.priority}
                </span>
                <span className="ml-3">
                  Status:
                </span>
                <span className="text-blue-500 ml-1">
                  {tasks[1]?.status}
                </span>
              </div>
            </div>
            <div className="relative">
  <img
    src={cloudinaryImages.assignment}
    alt="assignment"
    className="w-18 h-18 rounded-lg object-cover"
  />

  <button className="absolute -top-4  -right-1 text-gray-400 hover:text-gray-600">
    <PiDotsThreeOutlineLight size={18} />
  </button>
</div>
            <p className="text-xs text-gray-400 absolute bottom-2 right-3">
                Created on: {tasks[1]?.createdAt}
            </p>
          </div>
        </div>
        {/* RIGHT SIDE - TASK DETAILS */}
        <div className="flex-1 bg-white rounded-xl border border-gray-300 p-6 relative
 shadow-sm">
          <div className="flex gap-4">
            <img
               src={
          selectedTask?.category === "Work"
            ? cloudinaryImages.document
            : cloudinaryImages.assignment
        }
              alt="document"
              className="w-40 h-40 rounded-lg object-cover"
            />
            
            <div className="mt-12">
              <h2 className="font-bold text-medium">
                {selectedTask?.title}
              </h2>
              <p className="text-xs mt-2">
                Priority:
                <span className="text-red-500 ml-1">
                  {selectedTask?.priority}
                </span>
              </p>
              <p className="text-xs mt-1">
                Status:
                <span className="text-red-500 ml-1">
                  {selectedTask?.status}
                </span>
              </p>
              <p className="text-xs text-gray-400 mt-3">
                Created on: {selectedTask?.createdAt}
              </p>
            </div>
          </div>
          <p className="text-gray-500 text-medium mt-6">
           <b>Task Title:</b> {selectedTask?.title}
          </p>
         <div className="text-gray-500 text-medium mt-6 leading-7 max-w-4xl space-y-5">

    <div>
        <b>Objective:</b>
        <p>{selectedTask?.objective}</p>
    </div>

    <div>
        <b>Task Description:</b>
        <p>{selectedTask?.description}</p>
    </div>

    <div>
        <b>Additional Notes:</b>

        <ul className="list-disc ml-6 mt-2">
            {selectedTask?.notes?.map((note,index)=>(
                <li key={index}>{note}</li>
            ))}
        </ul>
    </div>

    <div>
        <b>Deadline for Submission:</b>
        <p>{selectedTask?.deadline}</p>
    </div>

</div>
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

export default MyTask;