import React from "react";
import Layout from "../components/Layout";
import cloudinaryImages from "../assets/cloudinary";
import { FaTrash } from "react-icons/fa";
import { RiEditBoxLine } from "react-icons/ri";


const MyTask = () => {

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
          <div className="border border-gray-300 rounded-lg bg-gray-200 p-3 mb-3 flex justify-between items-start relative">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-red-500">
                  ●
                </span>
                <h3 className="font-semibold text-medium">
                  Submit Documents
                </h3>
              </div>

              <p className="text-small text-gray-400 mt-3">
                Make sure to submit all the necessary documents....
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
              src={cloudinaryImages.document}
              alt="document"
              className="w-18 h-18 rounded-lg object-cover"
            />
          <p className="text-xs text-gray-400 absolute bottom-2 right-3">
            Created on: 20/06/2023
            </p>
            
          </div>
          {/* Task 2 */}

          <div className="border border-gray-300 rounded-lg p-3 flex justify-between items-start relative">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-blue-500">
                  ●
                </span>
                <h3 className="font-semibold text-sm">
                  Complete assignment
                </h3>
              </div>
              <p className="text-small text-gray-400 mt-3">
                The assignments must be completed to pass final year....
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
              src={cloudinaryImages.assignment}
              alt="assignment"
              className="w-18 h-18 rounded-lg object-cover"
            />
            <p className="text-xs text-gray-400 absolute bottom-2 right-3">
                Created on: 20/06/2023
            </p>
          </div>
        </div>
        {/* RIGHT SIDE - TASK DETAILS */}
        <div className="flex-1 bg-white rounded-xl border border-gray-300 p-6 relative
 shadow-sm">
          <div className="flex gap-4">
            <img
              src={cloudinaryImages.document}
              alt="document"
              className="w-40 h-40 rounded-lg object-cover"
            />
            
            <div className="mt-12">
              <h2 className="font-bold text-medium">
                Submit Documents
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
           <b>Task Title:</b> Document submission
          </p>
          <p className="text-gray-500 text-medium mt-6 leading-7 max-w-4xl">
            <b>Objective:</b> To submit required documents for something important.

<br/><br/>

<b>Task Description:</b> Review the list of documents required for submission and ensure all necessary 
documents are ready. Organize the documents accordingly and
 scan them if physical copies need to be submitted digitally.
  Rename the scanned files appropriately for easy identification
   and verify the accepted file formats. Upload the documents securely
    to the designated platform, double-check for accuracy, and obtain confirmation of successful submission.
     Follow up if necessary to ensure proper processing.

<br/><br/>

<b>Additional Notes:</b>

<br/>

• Ensure that the documents are authentic and up-to-date.

<br/>

• Maintain confidentiality and security of sensitive information during the submission process.

<br/>

• If there are specific guidelines or deadlines for submission, adhere to them diligently.
<br/>

<b>Deadline for Submission: </b> End of Day
             </p>
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