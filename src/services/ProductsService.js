import axios from "axios";
import {api} from "./APIService";

const API_URL = "http://127.0.0.1:8000"

export default class ProductsService {
    static getProducts() {
        return api.get(`${API_URL}/api/products/`)
    }

    static getProductDetail(id) {
        return api.get(`${API_URL}/api/products/${id}/`)
    }
}
