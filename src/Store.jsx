import { configureStore, createSlice } from "@reduxjs/toolkit";
;





const initialState ={
    category: ""

}

const ProductDetails = createSlice({
    name: 'ProductDetails',
    initialState,
    reducers: {
        addProductCategoryData(state, action){
            
            state.category = action.payload
        }
    }
})

export const { addProductCategoryData } = ProductDetails.actions

export const store = configureStore({
    reducer: {
        ProductDetails: ProductDetails.reducer,
    }
})



    console.log(store.getState());

