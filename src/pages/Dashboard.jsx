import React from "react";
import Header from "../components/Header";
import Sidebar from  "../components/Sidebar";
import { FaPlus, FaCheckCircle } from "react-icons/fa";
import TaskCard from "../components/TaskCard";
import StatusProgress from "../components/StatusProgress";
import { RiTodoLine } from "react-icons/ri";
import { MdOutlineGroupAdd } from "react-icons/md";
import Avatar1 from "../assets/Avatar1.svg";
import Avatar2 from "../assets/Avatar2.svg";
import Avatar3 from "../assets/Avatar3.svg";
import Avatar4 from "../assets/Avatar4.svg";
import Avatar5 from "../assets/Avatar5.svg";
import finalImage from "../assets/final.svg";
import landingImage from "../assets/landing.svg";
import meetingImage from "../assets/meeting.svg";
import partyImage from "../assets/party.svg";
import dogImage from "../assets/dog.svg";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            


const today = new Date();
const options = { year: "numeric", month: "long", day: "numeric" };
const formattedDate = today.toLocaleDateString("en-US", options); // e.g. April 23, 2025


const Avatar = [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5];
 const Dashboard = () => {
  return (
     <>
     <div className="flex bg-gray-100 ml-64 flex flex-col md:flex-row gap-4">
         <Header />
         <Sidebar />

                {/* Main Content */}
       <main className="flex-1 p-6 overflow-auto w-full md:w-2/3">  
            {/* Header */}
       <div className="flex justify-between items-center mt-18">
         <h1 className="text-2xl font-semibold">
           Welcome back, <span className="text-black">Sundar</span> 👋
         </h1>
         <div className="flex items-center gap-3">
           {Avatar.map((src, i) => (
             <img
              key={i}
              src={src}
              alt={`avatar-${i}`}
              className="w-9 h-9 rounded-sm border-2 border-white -ml-2"
            />
          ))}
          <button className="bg-white flex item-center text-red-500 px-3 py-1 rounded-md text-sm font-small border border-red-500">
          <MdOutlineGroupAdd className="text-[20px]"/>
            + Invite
          </button>
        </div>
      </div>

      <div className="border border-sm mt-6 border-gray-300 p-4">         
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-100">
      {/* LEFT SIDE - TO DO TASKS */}
      <div className="bg-white rounded-lg p-5 shadow-md">
        <div className="flex justify-between items-center mb-4">
          <div className="">
          <RiTodoLine />
          <h2 className="font-bold text-lg text-red-500">To-Do</h2>      
            <p className="text-gray-400 text-sm">{formattedDate}</p>
          </div>
         
          <button className="flex items-center gap-1 text-sm text-red-500 hover:text-red-500">
               <FaPlus /> Add task
            </button>
        </div>

          {/* Tasks */}
        <div className="space-y-4">
          <TaskCard
            title="Attend Nischal’s Birthday Party"
            desc="Buy gifts on the way and pick up cake from the bakery. [6 PM] at Fresh Elements."
            date="20/06/2023"
            status="Not Started"
             priority="Moderate"
             showPriority={true}
            image={partyImage}
          />
          <TaskCard
            title="Landing Page Design for TravelDays"
            desc="Get the work done by EOD and discuss with client before leaving. [4 PM | Meeting Room]"
            date="20/06/2023"
            status="In Progress"
             priority="Moderate"
             showPriority={true}
            image={landingImage}
          />
          <TaskCard
            title="Presentation on Final Product"
            desc="Make sure everything is functioning and the professionalism is maintained. Prepare final research and get the documents ready."
            date="19/06/2023"
            status="In Progress"
             priority="Moderate"
             showPriority={true}
            image={finalImage}
          />
        </div>
      </div>

      {/* RIGHT SIDE - STATUS + COMPLETED TASKS */}
      <div className="flex flex-col gap-6">
       {/* Task Status */}
        <div className="space-y-2">
              <StatusProgress />
            </div>


         {/* Completed Task */}
        <div className="bg-white rounded-lg p-5 shadow-md space-y-4">
          <h2 className="text-green-600 font-bold mb-4">✅ Completed Task</h2>
          <TaskCard
            title="Walk the dog"
            desc="Take the dog to the park and bring treats as well."
            date="Completed: 1 day ago"
            status="Completed"
            image={dogImage}
          />
          <TaskCard
            title="Conduct meeting"
            desc="Wrap up the client and finalize requirements."
            date="Completed: 4 days ago"
            status="Completed"
            image={meetingImage}
          />
        </div>
      </div>
    </div>
    </div>
    </main>
    </div>
       </>
  );
};

export default Dashboard;

