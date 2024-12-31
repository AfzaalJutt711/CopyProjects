import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    cartItems: [],
    isLoading: false
}

export const addToCart = createAsyncThunk('cart/addToCart', async ({ userId, productId, quantity }) => {

    const response = await axios.post('http://192.168.189.193:5000/api/shop/cart/add', {
        userId, productId, quantity
    })

    return response.data
})
export const fetchCartItems = createAsyncThunk(
    'cart/fetchCartItems',
    async (userId) => {
        console.log('fetching cart items wiht', userId)
        const response = await axios.get(`http://192.168.189.193:5000/api/shop/cart/get/${userId}`)

        return response.data
    })
export const deleteCartItem = createAsyncThunk(
    'cart/deleteCartItem', async ({ userId, productId }) => {
        const response = await axios.delete(`http://192.168.189.193:5000/api/shop/cart/${userId}/${productId}`)

        return response.data
    })
export const updateCartQuantity = createAsyncThunk(
    'cart/updateCartQuantity', async ({ userId, productId, quantity }) => {

        const response = await axios.put('http://localhost:5000http://192.168.189.193:5000/api/shop/cart/update-cart', {
            userId, productId, quantity
        })

        return response.data
    })

const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder.addCase(addToCart.pending, (state) => {
            state.isLoading = true
        }).addCase(addToCart.fulfilled, (state, action) => {
            state.isLoading = false;
            state.cartItems = action.payload.data
        }).addCase(addToCart.rejected, (state, action) => {
            state.isLoading = true,
                state.cartItems = []
        })
            .addCase(fetchCartItems.pending, (state) => {
                state.isLoading = true
            }).addCase(fetchCartItems.fulfilled, (state, action) => {
                state.isLoading = false;
                state.cartItems = action.payload.data
            }).addCase(fetchCartItems.rejected, (state, action) => {
                state.isLoading = true,
                    state.cartItems = []
            })
            .addCase(updateCartQuantity.pending, (state) => {
                state.isLoading = true
            }).addCase(updateCartQuantity.fulfilled, (state, action) => {
                state.isLoading = false;
                state.cartItems = action.payload.data
            }).addCase(updateCartQuantity.rejected, (state, action) => {
                state.isLoading = true,
                    state.cartItems = []
            })
            .addCase(deleteCartItem.pending, (state) => {
                state.isLoading = true
            }).addCase(deleteCartItem.fulfilled, (state, action) => {
                state.isLoading = false;
                state.cartItems = action.payload.data
            }).addCase(deleteCartItem.rejected, (state, action) => {
                state.isLoading = true,
                    state.cartItems = []
            })
    }
})

export default shoppingCartSlice.reducer