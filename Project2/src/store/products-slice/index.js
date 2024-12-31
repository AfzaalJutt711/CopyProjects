import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    isLoading: false,
    productList: [],
    productDetails: null
}

export const fetchAllFilteredProducts = createAsyncThunk(
    '/products/fetchAllFilteredProducts',
    async ({ filterParams, sortParmas }) => {

        const query = new URLSearchParams({
            ...filterParams,
            sortBy: sortParmas
        })

        const result = await axios.get(`http://192.168.189.193:5000/api/shop/products/get?${query}`)
        return result?.data
    }
)

export const fetchProductDetails = createAsyncThunk(
    '/products/fetchProductDetails',
    async (id) => {
        const result = await axios.get(`http://192.168.189.193:5000/api/shop/products/get/${id}`)
        return result?.data
    }
)

const shoppingProductSlice = createSlice({
    name: 'shoppingProducts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllFilteredProducts.pending, (state, aciton) => {
            state.isLoading = true
        }).addCase(fetchAllFilteredProducts.fulfilled, (state, aciton) => {

            state.isLoading = false
            state.productList = aciton.payload.data
        }).addCase(fetchAllFilteredProducts.rejected, (state, aciton) => {
            state.isLoading = false
            state.productList = []
        })
            .addCase(fetchProductDetails.pending, (state, aciton) => {
                state.isLoading = true
            }).addCase(fetchProductDetails.fulfilled, (state, aciton) => {

                state.isLoading = false
                state.productDetails = aciton.payload.data
            }).addCase(fetchProductDetails.rejected, (state, aciton) => {
                state.isLoading = false
                state.productDetails = null
            })

    }
})


export default shoppingProductSlice.reducer