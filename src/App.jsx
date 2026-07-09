import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import VitalTasks from "./pages/VitalTasks";
import MyTask from "./pages/MyTask";
import TaskCategories from "./pages/TaskCategories";
import AddCategory from "./pages/AddCategory";

const App = () => {
    return (
        <Router>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/vital-tasks" element={<VitalTasks />} />
                    <Route path="/my-tasks" element={<MyTask />} />
                    <Route path="/task-categories" element={<TaskCategories />} />
                    <Route path="/add-category" element={<AddCategory />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

