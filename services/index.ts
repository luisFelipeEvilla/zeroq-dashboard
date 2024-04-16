import { API_BASE_URL } from "@/config";
import axios from "axios";

export const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json"
        // here we can add more headers like Authorization, etc.
        // "Authorization": "Bearer " + localStorage.getItem("token") this its just an example
    }
});