// utils/axiosConfig.js
import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "http://localhost:8000/api", // Ajusta la URL base según sea necesario
});

export default axiosInstance;
