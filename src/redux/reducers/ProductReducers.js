import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    GET_PRODUCT_DETAILS_REQUEST,
    GET_PRODUCT_DETAILS_SUCCESS,
    GET_PRODUCT_DETAILS_FAIL
} from "../constants/ProductConstants";

const INITIAL_STATE = {
    products: [],
    product: {},
    loading: false,
    error: ""
}

export const ProductListReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { ...state, products: [], loading: true }
        case PRODUCT_LIST_SUCCESS:
            return {...state, products: action.payload, loading: false }
        case PRODUCT_LIST_FAIL:
            return { ...state, error: action.payload, loading: false, products: [] }
        default:
            return state;
    }
}


export const ProductDetailsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_PRODUCT_DETAILS_REQUEST:
            return { ...state, product: {}, loading: true }
        case GET_PRODUCT_DETAILS_SUCCESS:
            console.log("Reducers: ", {...state, product: action.payload, loading: false})
            return { ...state, product: action.payload, loading: false }
        case GET_PRODUCT_DETAILS_FAIL:
            return { ...state, error: action.payload, loading: false }
        default:
            return state;
    }
}