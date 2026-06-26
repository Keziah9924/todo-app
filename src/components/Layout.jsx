import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children, label, onNotificationClick, onCalendarClick }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex-1 ml-64">
        
        {/* Fixed Header */}
        <Header
          label={label}
          onNotificationClick={onNotificationClick}
          onCalendarClick={onCalendarClick}
        />

        {/* Page Content */}
        <main className="pt-16 p-6 overflow-auto">
          {children}
        </main>

      </div>
    </div>
  );
};

export default Layout;