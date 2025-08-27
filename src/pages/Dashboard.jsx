import React from "react";
import Header from "../components/Header";
import Sidebar from  "../components/Sidebar";
import { FaPlus, FaCheckCircle } from "react-icons/fa";
import TaskCard from "../components/TaskCard";
import StatusProgress from "../components/StatusProgress";
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
import pending from "../assets/Pending.svg";
import Layout from "../components/Layout";
import { BiTask } from "react-icons/bi";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            


const today = new Date();
const options = { year: "numeric", month: "long", day: "numeric" };
const formattedDate = today.toLocaleDateString("en-US", options); // e.g. April 23, 2025


const Avatar = [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5];
const Dashboard = () => {
  return (
      <Layout label={'To-Do'}>
          <div className="flex bg-gray-100 flex-col md:flex-row gap-4">
         <Header />
         <Sidebar />

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
       className="w-9 h-9 rounded-sm  -ml-2"
        />
       ))}
        <button className="bg-white flex item-center text-red-500 px-3 py-1 rounded-md text-sm font-small border border-red-500">
            <MdOutlineGroupAdd className="text-[20px]" />
            + Invite
        </button>
     </div>
     </div>
     <div className="border border-sm mt-6 border-gray-300 p-4">
     <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-100">
  
  {/* LEFT SIDE - TO DO TASKS */}
  <div className="bg-white rounded-lg p-5 shadow-md">
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center gap-2">
        <img src={pending} alt="icon" className="w-10 h-10" />
        <h2 className="font-bold text-lg text-red-500">To-Do</h2>
      </div>
      <p className="text-gray-400 text-sm">{formattedDate}</p>
    </div>

    <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-red-500 mb-4">
      <FaPlus /> Add task
    </button>

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
  <div className="flex flex-col gap-6 shadow-md rounded-lg">
    {/* Task Status */}
    
      <StatusProgress />
    

    {/* Completed Task */} 
    <div className="bg-white rounded-lg p-5 shadow-md space-y-4">
      <div className="flex items-center gap-1 font-bold ">
      <BiTask className="text-gray-400 text-l mb-[0.2rem] w-8 h-8"/>
      <h2 className="text-green-600 font-bold mb-3"> Completed Task</h2>
      </div>
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
    </Layout>
       
  );
};

export default Dashboard;


