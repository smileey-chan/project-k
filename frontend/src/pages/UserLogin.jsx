import React, { useState } from "react";
import img from "../assets/adminlogin.png";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // 👈 Import eye icons
import axios from "axios";

export default function UserLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 👈 Password toggle
  const [msg, setMsg] = useState("");

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    try {
     const res = await axios.post("http://localhost:8000/api/login", {
        email,
        password,
      });
      setMsg("Login success!");
      localStorage.setItem("token", res.data.token);
      console.log(res.data);
       navigate("/dashboard");
        
    } catch (error) {
      setMsg("Invalid credentials");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 bg-light"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="card p-4 shadow"
        style={{
          background: "rgba(92, 107, 224, 0.3)",
          backdropFilter: "blur(20px)",
          borderRadius: "15px",
          width: "400px",
        }}
      >
        <h3 className="text-center mb-3 text-white">User Login</h3>

        <form>
          <div className="mb-3">
            <label className="form-label text-white">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-white">Password</label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"} // 👈 toggle type
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                onClick={handleTogglePassword}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  color: "#fff",
                }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-dark w-100"
            onClick={handleAdminLogin}
          >
            Login
          </button>

          {msg && <p className="text-center text-danger mt-3">{msg}</p>}
        </form>
      </div>
    </div>
  );
}
