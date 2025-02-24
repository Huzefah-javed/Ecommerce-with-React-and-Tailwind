import { useQuery } from "@tanstack/react-query"
import { productCategory, productCategoryList } from "./ProductDataFetch"
import { useDispatch } from "react-redux"
import { addProductCategoryData } from "../Store"

export const productDataHandle =()=> {
    const dispatch =  useDispatch()
    
    const {data, isLoading, error} = useQuery({
        queryKey: ["productsCategory"],
        queryFn : productCategory,
    })
        if (!isLoading) {
            
            console.log("yahan tk data araha he", data)
            dispatch(addProductCategoryData({data, error: error?.message}))
        }
}