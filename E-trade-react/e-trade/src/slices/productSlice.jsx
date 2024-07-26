import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    products: [],
    selectedProduct: {}
}
const BASE_URL="https://fakestoreapi.com";

export const getProduct = createAsyncThunk(
    'product/getProduct',
    async()=>{
        const response = await axios.get(`${BASE_URL}/products`);
        return response.data
    }
)
export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers:{
        setselectedProduct:(state,action)=>{
            state.selectedProduct=action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getProduct.fulfilled,(state,action)=>{
            state.products=action.payload;
        })
    }
})

export const{setselectedProduct}=productSlice.actions
export default productSlice.reducer