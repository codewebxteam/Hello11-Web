import api from "../../config/axiosConfig";

export const registerUser = (data:{
  name: string,
  mobile: string,
  password: string,
}) => {
  console.log("register is running")
  return api.post("/auth/register", data);
};
export const loginUser = (data:{
  mobile: string,
  password: string
}) => {
  return api.post("/auth/login", data);
};
