// api.js
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// 🔥 Replace with your laptop IP from ipconfig
const api = axios.create({
  baseURL: "http://10.206.72.106:5000/api",
  timeout: 10000,
});

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
