import React from "react";
import Layout from "../components/Layout";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const TaskCategories = () => {

  const statusData = [
    "Completed",
    "In Progress",
    "Not Started"
  ];

  const priorityData = [
    "Extreme",
    "Moderate",
    "Low"
  ];

  return (
    <Layout label="To-Do">

      <div className="mt-16 ml-8 h-770px">

        <div className=" border border-gray-300 rounded-xl shadow-sm 
        w-[1500px] p-5">


          {/* Header */}
          <div className="flex justify-between items-center mb-5">

            <h1 className="font-bold text-lg">
              <span className="underline decoration-2 decoration-orange-500"> Task </span>
              Categories
            </h1>

            <Link to="/dashboard"
            className="font-bold underline cursor-pointer hover:text-orange-600 transition-colors">
            Go Back
          </Link>
          </div>

          {/* Add Category Button */}
          <button
          className="bg-orange-600 text-white text-xs px-4 py-2 rounded-md mb-6">
            Add Category
          </button>

          {/* Task Status */}
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-semibold text-sm">
             <span className="underline decoration-2 decoration-orange-500"> Task </span>
              Status
            </h2>
            <span className="text-xs text-gray-400 cursor-pointer">
              <span className="text-orange-600 text-lg">
                +
              </span>
              Add Task Status
            </span>
          </div>
          <div className="w-full border border-gray-300 rounded-xl overflow-hidden shadow-md mb-20">
  <table className="w-full border-collapse text-sm">
    <thead>
      <tr className="bg-gray-100 border-b border-gray-300">
        <th className="border-r border-gray-300 p-2">SN</th>
        <th className="border-r border-gray-300 p-2 text-center">
          Task Status
        </th>
        <th className="p-2 text-center">Action</th>
      </tr>
    </thead>

    <tbody>
      {statusData.map((item, index) => (
        <tr key={item}>
          <td className="border-r border-gray-300 p-3 text-center">
            {index + 1}
          </td>

          <td className="border-r border-gray-300 p-3 text-center">
            {item}
          </td>

          <td className="p-3 text-center">
            <button
              className="bg-orange-600 text-white px-3 py-1 rounded-md text-xs mr-3"
            >
              <FaEdit className="inline mr-1" />
              Edit
            </button>

            <button
              className="bg-orange-600 text-white px-3 py-1 rounded-md text-xs"
            >
              <FaTrash className="inline mr-1" />
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

          {/* Task Priority */}
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-semibold text-sm">
              Task Priority
            </h2>
            <span className="text-xs text-gray-400 cursor-pointer">
              <span className="text-orange-600 text-lg">
                +
              </span>
              Add Task Priority
            </span>
          </div>
                  <div className="w-full border border-gray-300 rounded-xl overflow-hidden shadow-md mb-10">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-300">
                <th className="border-r border-gray-300 p-2 text-center">
                  SN
                </th>

                <th className="border-r border-gray-300 p-2 text-center">
                  Task Priority
                </th>

                <th className="p-2 text-center">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {priorityData.map((item, index) => (
                <tr key={item}>
                  <td className="border-r border-gray-300 p-3 text-center">
                    {index + 1}
                  </td>

                  <td className="border-r border-gray-300 p-3 text-center">
                    {item}
                  </td>

                  <td className="p-3 text-center">
                    <button
                      className="bg-orange-600 text-white px-3 py-1 rounded-md text-xs mr-3"
                    >
                      <FaEdit className="inline mr-1" />
                      Edit
                    </button>

                    <button
                      className="bg-orange-600 text-white px-3 py-1 rounded-md text-xs"
                    >
                      <FaTrash className="inline mr-1" />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </Layout>
  );
};


export default TaskCategories;