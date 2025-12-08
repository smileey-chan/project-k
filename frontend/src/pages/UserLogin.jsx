import React, { useState } from "react";
import img from "../assets/adminlogin.png"

export default function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  // const handleAdminLogin = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const res = await axios.post("http://localhost:8000/api/admin/login", {
  //       email,
  //       password,
  //     });

  //     setMsg("Login success!");
  //     console.log(res.data);
  //   } catch (error) {
  //     setMsg("Invalid credentials");
  //   }
  // };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light"
    style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
      <div className="card p-4 shadow"  style={{
          background: "rgba(92, 107, 224, 0.3)",
          backdropFilter: "blur(20px)",
          borderRadius: "15px",
          width: "400px",
        }}>
        <h3 className="text-center mb-3 text-white">Admin Login</h3>

        <form >
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter admin email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-dark w-100">
            Login
          </button>

          {msg && <p className="text-center mt-3">{msg}</p>}
        </form>
      </div>
    </div>
  );
}
