import React, { useState, useEffect } from "react";
import { registerUser } from "../api/api";
import { useNavigate } from "react-router-dom";
import img from "../assets/userlogin.png"; // just background

export default function RegisterUser() {
  const navigate = useNavigate();  
  
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "user",
    phoneNumber: "",
    designation: "",
    password: "",
  });
   
  useEffect(() => {
  if (localStorage.getItem("isRegistered")) {
    navigate("/UserLogin");
  }
}, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser(form); // send plain JSON
      console.log("Backend Response:", res.data);
      localStorage.setItem("isRegistered", "true");
      alert(res.data.msg || "User Registered Successfully!");     
      setForm({
        name: "",
        email: "",
        role: "user",
        phoneNumber: "",
        designation: "",
        password: "",
      });
      navigate("/UserLogin");
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert(error.response?.data?.msg || "Something went wrong!");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="card p-4 shadow-lg"
        style={{
          background: "rgba(92, 107, 224, 0.3)",
          backdropFilter: "blur(10px)",
          borderRadius: "15px",
          width: "450px",
        }}
      >
        <h3 className="text-center mb-3 text-white">User Registration</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label text-white">Full Name *</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-white">Email *</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3 d-none">
            <label className="form-label text-white">Role *</label>
            <select
              className="form-control"
              name="role"
              value={form.role}
              onChange={handleChange}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label text-white">Phone Number *</label>
            <input
              type="text"
              className="form-control"
              name="phoneNumber"
              placeholder="Enter Your Mobile Number"
              value={form.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-white">Designation *</label>
            <input
              type="text"
              className="form-control"
              name="designation"
              placeholder="Designation"
              value={form.designation}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-white">Password *</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="form-control"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-info w-50">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
