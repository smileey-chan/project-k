import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api",
});

export const UserLogin = (data) => API.post("/login", data);

export default API;
