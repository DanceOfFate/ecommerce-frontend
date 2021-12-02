import {createStore, combineReducers, applyMiddleware} from "redux";
import ReduxThunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import {
    ProductListReducer,
    ProductDetailsReducer,
} from "./redux/reducers/ProductReducers.js";

import {
    CartReducer
} from "./redux/reducers/CartReducers";
import {
    UserLoginReducer, UserRegisterReducer
} from "./redux/reducers/UserReducers";

const reducers = combineReducers({
    productList: ProductListReducer,
    productDetails: ProductDetailsReducer,
    cart: CartReducer,
    userLogin: UserLoginReducer,
    userRegister: UserRegisterReducer
});

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : [];

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null;

const INITIAL_STATE = {
    cart: { cartItems: cartItemsFromStorage },
    userLogin: { userInfo: userInfoFromStorage }
}

const store = createStore(reducers, INITIAL_STATE, composeWithDevTools(applyMiddleware(ReduxThunk)));

export default store;