import axios from "axios";

const API_URL = "http://127.0.0.1:8000"

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-type": "application/json"
    }
})