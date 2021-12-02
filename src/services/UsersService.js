import axios from "axios";
import {api} from "./APIService";

const API_URL = "http://127.0.0.1:8000"

export default class UsersService {
    static loginUser(data = {}) {
        return api.post(`${API_URL}/api/users/login/`, data)
    }

    static registerUser(data={}) {
        return api.post(`${API_URL}/api/users/register/`, data)
    }
}