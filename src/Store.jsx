import { configureStore, createSlice } from "@reduxjs/toolkit";
;





const initialState ={
    category: {
        data: [],
        loading: true,
        error: null
    }
}

const ProductDetails = createSlice({
    name: 'ProductDetails',
    initialState,
    reducers: {
        addProductCategoryData(state, action){
            state.category.loading = false
           !action.payload.error? state.category.data = action.payload.data: state.category.error = action.payload.error
            
        }
    }
})

export const {addProductCategoryData} = ProductDetails.actions

export const store = configureStore({
    reducer: {
        ProductDetails: ProductDetails.reducer
    }
})



    console.log(store.getState());

