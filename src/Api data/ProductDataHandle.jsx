import { useQuery } from "@tanstack/react-query"
import { productCategoryList } from "./ProductDataFetch"
import { useDispatch } from "react-redux"
import { addProductData } from "../Store"


export const productDataHandle =()=> {
    const dispatch =  useDispatch()
    
    const {data, isLoading, error} = useQuery({
        queryKey: ["products"],
        queryFn : productCategoryList,
    })
        if (!isLoading) {
            dispatch(addProductData({data, error: error?.message}))
        }
}