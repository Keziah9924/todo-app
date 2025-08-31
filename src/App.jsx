import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/Signup";
import LogIn from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;

