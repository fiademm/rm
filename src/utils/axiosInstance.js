import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: "https://rmsc-backend.vercel.app/", // Replace with your backend base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include the token
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("RMauthToken"); // Fetch the token from local storage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Attach the token
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosInstance;