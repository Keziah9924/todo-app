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


const Avatar = [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5];
const Dashboard = () => {
  return (
    <>
    
    <div className="flex bg-gray-100 ml-64">
        <Header />
        <Sidebar /> 

      
      

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
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
              className="w-7 h-7 rounded-sm border-2 border-white -ml-2"
            />
          ))}
          <button className="bg-white flex item-center text-red-500 px-3 py-1 rounded-md text-sm font-small border border-red-500">
          <MdOutlineGroupAdd className="text-[20px]"/>
            + Invite
          </button>
        </div>
      </div>

      {/* Content Grid */}
      <div className="border border-sm mt-6 border-gray-300 p-4">
      <div className="grid grid-cols-3 gap-6 mt-6">
        {/* Left Column: To-Do */}
        <div className="col-span-2 bg-white rounded-lg p-4 shadow-md">
          <div className="flex justify-between items-center mb-4">
           <div>
          <RiTodoLine />
            <h2 className="font-bold text-lg text-red-500">To-Do</h2>
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
              image={partyImage}
            />
            <TaskCard
              title="Landing Page Design for TravelDays"
              desc="Get the work done by EOD and discuss with client before leaving. [4 PM | Meeting Room]"
              date="20/06/2023"
              status="In Progress"
              image={landingImage}
            />
            <TaskCard
              title="Presentation on Final Product"
              desc="Make sure everything is properly aligned. Prepare final research insight and rehearse."
              date="19/06/2023"
              status="In Progress"
              image={finalImage}
            />
          </div>
        </div>

        {/* Right Column: Status & Completed */}
        <div className="flex flex-col gap-6">
          {/* Task Status */}
          
            <div className="space-y-2">
              {/* <StatusProgress label="Completed" value={84} color="green" />
              <StatusProgress label="In Progress" value={46} color="blue" />
              <StatusProgress label="Not Started" value={13} color="red" /> */}
              <StatusProgress />
            </div>
          

          {/* Completed Task */}
          <div className="bg-white rounded-lg p-4 shadow-md space-y-2 border border-gray-300">
            <h2 className="font-bold text-lg text-green-600 mb-3">✅ Completed Task</h2>
            <TaskCard 
              title="Walk the dog"
              desc="Take the dog to the park and throw the tennis ball. 30 min walk."
              date="Completed: 1 day ago"
              status="Completed"
              image={dogImage}
            />
            <TaskCard
              title="Conduct meeting"
              desc="Discuss with the client and approve the final dashboard design."
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
