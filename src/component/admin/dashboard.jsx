import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./sidebar";
import Users from "./users";
import AdminPosts from "./adminPosts";

const Dashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Sidebar />
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/posts" element={<AdminPosts />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
