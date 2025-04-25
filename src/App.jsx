import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
