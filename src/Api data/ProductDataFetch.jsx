import axios from "axios"


const api = axios.create({
    baseURL:"https://dummyjson.com/products"
})


export const productCategory = async()=> {
  const res = await api.get("/category-list")
    return res.data;
}
