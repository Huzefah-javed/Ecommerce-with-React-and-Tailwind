import { configureStore, createSlice } from "@reduxjs/toolkit";
;





const initialState ={
    category: "",
    cartData: []

}

const ProductDetails = createSlice({
    name: 'ProductDetails',
    initialState,
    reducers: {
        addProductCategoryData(state, action){
            
            state.category = action.payload
        },
        addToCartData(state, action){
            state.cartData.push(action.payload)
        },
        DeleteAddToCart(state, action){
           state.cartData =  state.cartData.filter((_, index)=> index !== action.payload)
        }
    }
})

export const { addProductCategoryData, addToCartData, DeleteAddToCart } = ProductDetails.actions

export const store = configureStore({
    reducer: {
        ProductDetails: ProductDetails.reducer,
    }
})



