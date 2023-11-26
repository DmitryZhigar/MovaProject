import axios from "axios";
import { API_BASE_URL } from "@/constants";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to perform user registration
export async function registerUser(userName, password) {
  try {
    const response = await apiClient.post("/signUp", {
      userName,
      password,
    });

    return response.data;
  } catch (error) {
    console.error("Registration failed:", error);
    throw error;
  }
}

// Function to perform user login
export async function loginUser(userName, password) {
  try {
    const response = await apiClient.post("/login", {
      userName,
      password,
    });

    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
}