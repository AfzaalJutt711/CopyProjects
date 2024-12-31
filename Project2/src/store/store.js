import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth-slice'
import shopReducer from './products-slice'
import cartReducer from './cart-slice'

const store = configureStore({
    reducer: {
        auth : authReducer,
        shop: shopReducer,
        cart: cartReducer
    }
})

export default store