import axios from "axios"


const api = axios.create({
    baseURL:"https://dummyjson.com"
})


export const productCategory = async()=> {
  const res = await api.get("/products/categories")
    return res.data;
}

export const productCategoryList = async (productCategory)=>{
    const res =   await api.get(`/products/category/${productCategory}`)
     return res.data;
     
}
export const AllProducts = async ( totalLimit ) => {
   const res = await api.get(`/products?limit=${totalLimit}&skip=0`)
   return res.data;
}

export const searchProducts = async (searchedItem) => {
  const res = await api.get(`/products/search?q=${searchedItem}`)
  return res.data;
}