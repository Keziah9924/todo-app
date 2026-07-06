import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import VitalTasks from "./pages/VitalTasks";
import TaskCategories from "./pages/TaskCategories";

const App = () => {
    return (
        <Router>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/vital-tasks" element={<VitalTasks />} />
                    <Route path="/task-categories" element={<TaskCategories />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

