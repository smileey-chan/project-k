import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "70px", padding: "20px" }}>
        <Outlet /> {/* Render current page below navbar */}
      </div>
    </div>
  );
}
