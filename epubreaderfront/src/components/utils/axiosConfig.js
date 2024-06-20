// utils/axiosConfig.js
import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "http://localhost:8000/api", // URL base de las peticiones
});

export default axiosInstance;
