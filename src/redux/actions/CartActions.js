import {CART_ADD_ITEM, CART_REMOVE_ITEM} from "../constants/CartConstants";
import ProductsService from "../../services/ProductsService";
import {GET_PRODUCT_DETAILS_REQUEST} from "../constants/ProductConstants";


export const addToCart = (product_id, qty) => (dispatch, getState) => {
    ProductsService.getProductDetail(product_id)
        .then(response => {
            const {data} = response;
            dispatch({
                type: CART_ADD_ITEM,
                payload: {
                    product: data.id,
                    name:  data.name,
                    image: data.image,
                    price: data.price,
                    count_in_stock: data.count_in_stock,
                    qty
                }
            })
            localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
        })
}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}