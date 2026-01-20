import api from "./api";

export const registerUser = (userData) => {
  return api.post("/register", userData);
};

export const login = async (username, password) => {
  const response = await api.post("/login", { username, password });
  return response.data;
};  

export const logout = () => {
    localStorage.removeItem("token");
};

export const isAuthenticated = () => {
    return !!localStorage.getItem("token");
};
