import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterUser from "./pages/RegisterUser";
import UserLogin from "./pages/UserLogin";
// import Register from "./pages/Register";
// import Attendance from "./pages/Attendance";
// import Leave from "./pages/Leave";
// import Admin from "./pages/Admin";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< RegisterUser/>} />
         <Route path="/UserLogin" element={<UserLogin />} />
        {/* <Route path="/attendance" element={<Attendance />} />
        <Route path="/leave" element={<Leave />} />
        <Route path="/admin" element={<Admin />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
