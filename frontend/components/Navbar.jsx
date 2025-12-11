import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); // redirect to login
  };

  return (
    <nav
      className="navbar bg-dark px-4"
      style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 999 }}
    >
      <h3 className="text-white m-0">My App</h3>
      <div>
        <ul>
            <li className="text-white">Dashboard</li>
        </ul>
        {/* <button
          className="btn btn-light me-2"
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </button> */}
        <button
          className="btn btn-light me-2"
          onClick={() => navigate("/profile")}
        >
          Profile
        </button>
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}
