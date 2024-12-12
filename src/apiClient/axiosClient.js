// src/api/axiosClient.js
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://your-api-endpoint.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;