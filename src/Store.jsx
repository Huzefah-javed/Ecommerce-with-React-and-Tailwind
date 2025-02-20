import { configureStore, createSlice } from "@reduxjs/toolkit";





const initialState ={
    category: []
}

const ProductDetails = createSlice({
    name: 'ProductCategoryDetails',
})


const store = configureStore({
    reducer: {
        ProductDetails
    }
})