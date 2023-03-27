import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const Main = () => {
  return (
    <div>
      <Nav />
      <div className="bg-base-200">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
