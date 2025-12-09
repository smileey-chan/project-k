import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  // Protect Dashboard (if no token → redirect)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); // redirect to login
  };

  // Change password
  const handleChangePassword = () => {
    navigate("/change-password"); // You must create this page later
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark px-4 d-flex justify-content-between">
        <h3 className="text-white m-0">Dashboard</h3>

        {/* Right Side Menu */}
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
          >
            User Menu
          </button>

          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <button className="dropdown-item" onClick={handleChangePassword}>
                Change Password
              </button>
            </li>
            <li>
              <button className="dropdown-item text-danger" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Dashboard Body */}
      <div className="container mt-5">
        <h2>Welcome to the Dashboard!</h2>
        <p>You are successfully logged in.</p>
      </div>
    </div>
  );
}
