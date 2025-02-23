import axios from "axios"


const api = axios.create({
    baseURL:"https://dummyjson.com/products"
})


export const productCategory = async()=> {
  const res = await api.get("/categories")
    return res.data;
}

export const productCategoryList = async (productCategory)=>{
    const res =   await api.get(`/category/${productCategory}`)
     console.log(res.data);
     
}