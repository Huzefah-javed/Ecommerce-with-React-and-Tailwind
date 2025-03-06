import { NavLink } from "react-router";
import { addProductCategoryData } from "../../../Store";
import { useDispatch } from "react-redux";

export const ProductsCategories =()=>{

    const dispatch = useDispatch()
    const products = [
        {
            name : "beauty",
            imageLink : "beauty category.jpg"
        },
        {
            name : "home-decoration",
            imageLink : "home decoration.jpg"
        },
        {
            name : "laptops",
            imageLink : "laptops category.jpg"
        },
        {
            name : "smartphones",
            imageLink : "smartPhone category.jpg"
        }
    ]

    const handleDataFetch =(productCategory)=> {
            
                dispatch(addProductCategoryData(productCategory))        
            }

    return <div className="w-full flex flex-col justify-between items-center relative z-10 pb-28">
        <div className="w-full flex justify-evenly ali">
           {
            products.map((product, index) => {
                           return( 
                               <NavLink to="/products" onClick={()=>handleDataFetch(product.name)} key={index} className="group relative min-h-72 max-w-64 products-category-basic-style">
                          <h2 className="product-category-h1-style text-shadow text-[1.2rem]">{product.name}</h2>
                          <img className="product-category-image-style" src={product.imageLink} alt={product.name} />
                        </NavLink>
                        )
            })
           }
        </div>
        <div className="h-dvh w-full flex justify-center mt-20 relative">
            <div className="group w-[60.25%] h-full products-category-basic-style absolute left-0 clip-custom-men">
                <h2 className="product-category-h1-style text-shadow text-[1.5rem]">Men's Clothing</h2>
                <img className="product-category-image-style" src="mens category.jpg" alt="mens category"/>
            </div>
            <div className="group w-[60.25%] h-full products-category-basic-style absolute right-0 clip-custom-women">
                <h2 className="product-category-h1-style text-shadow text-[1.5rem]">Women's Clothing</h2>
                <img className="product-category-image-style" src="womens category.jpg" alt="womans category"/>
           </div>
         </div>
       </div>
}