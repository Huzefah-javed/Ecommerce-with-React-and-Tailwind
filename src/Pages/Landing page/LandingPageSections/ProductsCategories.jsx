import { NavLink } from "react-router";
import { addProductCategoryData } from "../../../Store";
import { useDispatch } from "react-redux";
import { useCallback, useEffect, useState } from "react";

export const ProductsCategories =()=>{

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
     const handleResize =useCallback(()=>{
            setWindowWidth(window.innerWidth)
            window.removeEventListener("resize", handleResize)
        })
        useEffect(()=>{
            window.addEventListener("resize", handleResize)
            return ()=> window.addEventListener("resize", handleResize)
        },[])

    const dispatch = useDispatch()
    const products = [
        {
            name : "beauty",
            imageLink : "beauty category.webp"
        },
        {
            name : "home decoration",
            imageLink : "home-decoration.webp"
        },
        {
            name : "laptops",
            imageLink : "laptop-category.webp"
        },
        {
            name : "smartphones",
            imageLink : "smartphone-category.webp"
        }
    ]

    const handleDataFetch =(productCategory)=> {
            
                dispatch(addProductCategoryData(productCategory))        
            }

    return <div className="w-full flex flex-col justify-between items-center relative z-10 pb-28">
        <div className="w-full md:px-8 px-3 grid gap-2 grid-cols-2 grid-rows-2 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1">
           {
            products.map((product, index) => {
                           return( 
                               <NavLink to="/products" onClick={()=>handleDataFetch(product.name)} key={index} className="group relative min-h-56 md:min-h-64 lg:min-h-72  min-w-full products-category-basic-style">
                          <h2 className="product-category-h1-style text-shadow text-[1.2rem]">{product.name}</h2>
                          <img loading="lazy" className="product-category-image-style" src={product.imageLink} alt={product.name} />
                        </NavLink>
                        )
            })
           }
        </div>
        <div className="h-lvh
         w-full flex md:flex-col justify-center mt-20 relative">
  {/* Men's Clothing */}
  <div className={`group 
       w-full h-[67.25%] sm:h-[67.25%] md:h-full 
       md:w-[60.25%] sm:w-full
       products-category-basic-style absolute top-0
       md:left-0
       ${windowWidth >= 768?"clip-custom-men" :"clip-custom-men-sm-screen"}`}>
    <h2 className="product-category-h1-style text-shadow text-[1.5rem]">
      Men's Clothing
    </h2>
    <img loading="lazy" className="product-category-image-style" 
         src="mens clothing.webp" 
         alt="mens category"/>
  </div>

  {/* Women's Clothing */}
  <div className={`group 
       w-full h-[65.25%] sm:h-[65.25%] md:h-full 
       md:w-[60.25%] sm:w-full
       products-category-basic-style absolute bottom-0
       md:right-0
       ${windowWidth >= 768?"clip-custom-women" :"clip-custom-women-sm-screen"}`}>
    <h2 className="product-category-h1-style text-shadow text-[1.5rem]">
      Women's Clothing
    </h2>
    <img loading="lazy" className="product-category-image-style" 
         src="women category.webp" 
         alt="womens category"/>
  </div>
</div>
</div>
}