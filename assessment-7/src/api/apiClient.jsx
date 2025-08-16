import axios from 'axios';


export const apiClient = axios.create({
    baseURL: "https://backendapi-cwp7.onrender.com/api",
    headers: {
        "Content-type": "Application/json",
    },
});