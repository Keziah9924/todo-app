import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const AddCategory = () => {
  return (
    <Layout label="To-Do">
      <div className="mt-16 ml-10 h-[calc(100vh-130px)]">
        <div className="bg-white border border-gray-300 rounded-xl shadow-sm w-[1500px] h-[700px]  p-6">

          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">
             <span className="underline decoration-3 decoration-orange-500"> Create </span>  Categories
            </h2>

            <Link
              to="/task-categories"
              className="font-bold underline cursor-pointer hover:text-orange-600 transition-colors"
            >
              Go Back
            </Link>
          </div>

          {/* Form */}
          <div className="mt-8">

            <label className="block text-bold font-medium mb-2">
              Category Name
            </label>

            <input
              type="text"
              placeholder=""
              className="w-[450px] h-10 border border-gray-300 rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-red-400"
            />

            {/* Buttons */}
            <div className="flex gap-3 mt-6">
              <button
                className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-2 rounded-md text-sm"
              >
                Create
              </button>

              <button
                className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-2 rounded-md text-sm"
              >
                Cancel
              </button>
            </div>

          </div>

        </div>
      </div>
    </Layout>
  );
};

export default AddCategory;