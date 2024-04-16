import axios from "axios";

export const apiClient = axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {
        "Content-Type": "application/json"
        // here we can add more headers like Authorization, etc.
        // "Authorization": "Bearer " + localStorage.getItem("token") this its just an example
    }
});