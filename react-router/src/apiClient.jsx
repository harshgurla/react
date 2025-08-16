import axios from 'axios';

const API_URL = "https://backendapi-cwp7.onrender.com/api";


export const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-type": "application/json",
    },
});



