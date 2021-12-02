import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    GET_PRODUCT_DETAILS_REQUEST,
    GET_PRODUCT_DETAILS_SUCCESS,
    GET_PRODUCT_DETAILS_FAIL
} from "../constants/ProductConstants";
import ProductsService from "../../services/ProductsService";


export const listProducts = () => dispatch => {
    dispatch({ type: PRODUCT_LIST_REQUEST, payload: [] });
    ProductsService.getProducts()
        .then(response => {
            dispatch({
                type: PRODUCT_LIST_SUCCESS,
                payload: response.data
            })
        }).catch(error => {
            dispatch({
                type: PRODUCT_LIST_FAIL,
                payload: error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message
            });
    })
}


export const getProductDetails = (id) => dispatch => {
        dispatch({ type: GET_PRODUCT_DETAILS_REQUEST });
        ProductsService.getProductDetail(id)
            .then(response => {
                dispatch({
                    type: GET_PRODUCT_DETAILS_SUCCESS,
                    payload: response.data
                })
        })
        .catch(error => {
            dispatch({
                type: GET_PRODUCT_DETAILS_FAIL,
                payload: error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message
            })
        })
}