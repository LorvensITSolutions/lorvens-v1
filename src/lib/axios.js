// src/lib/axios.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api", // or use VITE_API_URL env var
  withCredentials: true,
});

export default axiosInstance; // ✅ default export
