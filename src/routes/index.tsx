import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import { ScheduleProvider } from "../hooks/schedule";
import ManageSchedules from "../pages/ManageSchedules";
import CreateNewSchedule from "../pages/CreateNewSchedule";
import EditSchedule from "../pages/EditSchedule";
import { PrivateOutlet } from "./privateRoute";
import { ClientProvider } from "../hooks/client";
import Clients from "../pages/Clients";
import CreateNewClient from "../pages/CreateNewClient";
import EditClient from "../pages/EditClient";

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
        <Route path="/" element={<PrivateOutlet />}>
          <Route 
              path="/home" 
              element={
                  <ScheduleProvider>
                    <Home />
                  </ScheduleProvider>
              } 
          />
          <Route
            path="/clients"
            element={
              <ClientProvider>
                <Clients />
              </ClientProvider>
            }
          />
          <Route
            path="/create-client"
            element={
              <ClientProvider>
                <CreateNewClient />
              </ClientProvider>
            }
          />
          <Route
            path="/edit-client"
            element={
              <ClientProvider>
                <EditClient />
              </ClientProvider>
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
          <Route 
              path="/edit-schedule" 
              element={
                  <ScheduleProvider>
                    <EditSchedule />
                  </ScheduleProvider>
              } 
          />
        </Route>
      </Routes>
    </Router>
  );
}
