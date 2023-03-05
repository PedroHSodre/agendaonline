import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import { ScheduleProvider } from "../hooks/schedule";
import ManageSchedules from "../pages/ManageSchedules";
import CreateNewSchedule from "../pages/CreateNewSchedule";

export default function MainRoute() {
  return (
    <Router>
      <Routes>
        <Route 
            path="/" 
            element={
                <Login />
            } 
        />
        <Route 
            path="/home" 
            element={
                <ScheduleProvider>
                  <Home />
                </ScheduleProvider>
            } 
        />
        <Route 
            path="/manage-schedules" 
            element={
                <ScheduleProvider>
                  <ManageSchedules />
                </ScheduleProvider>
            } 
        />
        <Route 
            path="/add-schedule" 
            element={
                <ScheduleProvider>
                  <CreateNewSchedule />
                </ScheduleProvider>
            } 
        />
      </Routes>
    </Router>
  );
}
