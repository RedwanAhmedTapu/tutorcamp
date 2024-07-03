// axiosInstance.js
import axios from 'axios';

const SERVER_URL="https://tutorcampbackend.onrender.com"
// const SERVER_URL="http://localhost:5000"


// Create an axios instance with custom configuration
const axiosInstance = axios.create({
  baseURL: SERVER_URL, // Replace with your API base URL
  timeout: 10000, // Timeout after 10 seconds
  headers: {
    'Content-Type': 'application/json',
    // Add other default headers here
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  config => {
    // Modify request configuration if needed, for example, add authorization token
    const token = localStorage.getItem("loggedUser")?JSON.parse(localStorage.getItem("loggedUser")).token:null; // Example: Get token from localStorage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    // Handle request error here
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  response => {
    // Handle response data here
    return response;
  },
  error => {
    // Handle response error here
    if (error.response && error.response.status === 401) {
      // Example: Handle unauthorized access
      // Redirect to login page or show a message
      console.error('Unauthorized, redirecting to login...');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
