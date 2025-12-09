import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./pages/UserLogin";
import Dashboard from "./pages/Dashboard";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<UserLogin />} />
         <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}
