import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SignIn from "../pages/sign-in";
import { StudentRouter, routes as studentRoutes } from "./StudentRouter";
import { AdminRouter, routes as adminRoutes } from "./AdminRouter";
import Navbar from "../components/shared/Navbar";

const role = localStorage.getItem("user");

export const routes = role === "Student" ? studentRoutes : adminRoutes;
export const RootRouter = () => {
  return (
    <>
      <Router>
        {role && role === "Student" ? (
          <StudentRouter />
        ) : role === "Admin" ? (
          <AdminRouter />
        ) : (
          <SignIn />
        )}
        {(role === "Student" || role === "Admin") && <Navbar />}
      </Router>
    </>
  );
};
