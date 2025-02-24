import { configureStore, createSlice } from "@reduxjs/toolkit";
;





const initialState ={
    category: {
        data: [],
        loading: true,
        error: null
    },
    products:{
        data:[],
        loading:true,
        error:null
    }

}

const ProductDetails = createSlice({
    name: 'ProductDetails',
    initialState,
    reducers: {
        addProductCategoryData(state, action){
            state.category.loading = false
           !action.payload.error? state.category.data = action.payload.data: state.category.error = action.payload.error
            
        },
        addProductData(state, action){
            state.products.loading = false
            !action.payload.error? state.products.data = action.payload.data: state.products.error = action.payload.error
        }
    }
})

export const {addProductCategoryData, addProductData} = ProductDetails.actions

export const store = configureStore({
    reducer: {
        ProductDetails: ProductDetails.reducer,
    }
})



    console.log(store.getState());

