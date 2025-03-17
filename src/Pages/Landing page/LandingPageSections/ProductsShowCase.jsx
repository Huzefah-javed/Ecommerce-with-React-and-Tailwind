import { useQuery } from "@tanstack/react-query";
import { searchProducts } from "../../../Api data/ProductDataFetch";
import { NavLink } from "react-router";
import { useEffect, useRef, useState } from "react";

const ProductsShowCase = ({searchedItem, title, titleCategory, directlyShown})=>{

    const[shown, setShown] = useState(false)
    const productShowCase = useRef(null)


        const handleShownProducts =()=> {
            if (window.innerHeight >= productShowCase.current.getBoundingClientRect().top - 300) {
                setShown(true)
                window.removeEventListener("scroll", handleShownProducts)
            }else{
                setShown(false)
            }
        }
    useEffect(()=>{
        if (productShowCase.current) {
           window.addEventListener("scroll", handleShownProducts)
        }
        return ()=> window.removeEventListener("scroll", handleShownProducts)
        
    },[])

    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['productsCategoryLanding', searchedItem],
        queryFn: ()=> searchProducts(searchedItem),
        staleTime: 300000,
        enabled: shown || directlyShown
    })



    return <div ref={productShowCase} className="w-full px-2 py-8">
        <header className="flex justify-between">
            <h1 className="md:text-6xl text-4xl font-extrabold font-sans uppercase">{title}</h1>
            {window.innerWidth >= 769 ?<h2 className="group flex gap-2 items-center text-[1.1rem] font-extrabold font-sans cursor-pointer">{titleCategory} <img className="w-[1rem] transition-all duration-500 ease-in-out group-hover:translate-x-2" src="arrow image.png" alt="arrow image"/></h2> : ""}
        </header>
        <div className="custom-scrollbar py-2 flex justify-start items-stretch overflow-x-scroll overflow-y-hidden md:gap-4 gap-8 my-12 mx-4">
            
        {!isLoading && !isError ? data?.products?.length> 0? data?.products?.map((product, index) => (
        <>
                                <NavLink  key={index} to={`/products/${product.id}`}>

            <div className="custom-product flex flex-col h-auto min-w-56  md:min-w-72 cursor-pointer border-[0.25px] border-[#f7f7f6] border-solid product-box-shadow">
                                <img loading="lazy" className="bg-[#f7f7f6] h-72 w-auto opacity-100 transition-all duration-500 ease-in-out" src={product.thumbnail} alt={product.title} />

                                <div className="p-2">
                                    <div className="flex justify-between items-center">
                                        <p className="p-0.5 -skew-x-12 bg-black text-[0.6rem] flex justify-center items-center uppercase text-white font-extrabold">
                                            {product.brand || "No brand"}
                                        </p>
                                        <div className="flex text-[0.85rem] font-bold text-[#161616ac]">
                                            {product.images.map((singleImage, id) => (
                                                <div key={id} className="md:w-8 w-3 ml-2 border-[1px] border-[#16161645]">
                                                    <img src={singleImage} alt="Product Image" loading="lazy" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-black font-sans text-[1.1rem] capitalize  py-2">{product.title}</p>
                                    <p className="text-black text-[0.85rem]">${product.price} <span className="text-[0.65rem]">({product.discountPercentage}% discount)</span></p>

                                    <div className="starMain flex items-center mt-8 mb-2 md:mb-4">
                                        <div className="stars flex">
                                            {[...Array(5)].map((_, index) => {
                                                const ratingData = product.rating;
                                                return (
                                                    <svg
                                                        key={index}
                                                        className={`${ratingData >= index + 1 || (ratingData - index) < 1 && ratingData - index > 0 ? "fill-black" : "fill-[#ffffff]"} w-3 mx-[0.12] stroke-1 stroke-black`}
                                                        viewBox={`${(ratingData - index) < 1 && (ratingData - index) > 0 ? "0 0 24 24" : "0 0 50 50"}`}
                                                        >
                                                        {(ratingData - index) < 1 && (ratingData - index) > 0 ? (
                                                            <path d="M22 9.74l-7.19-.62L12 2.5 9.19 9.13 2 9.74l5.46 4.73-1.64 7.03L12 17.77l6.18 3.73-1.63-7.03L22 9.74zM12 15.9V6.6l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.9z" />
                                                        ) : (
                                                            <polygon points="25,2 32,18 49,18 35,29 40,46 25,36 10,46 15,29 1,18 18,18" />
                                                        )}
                                                    </svg>
                                           );
                                        })}
                                        </div>
                                        <div className="line h-[0.06rem] grow bg-[#16161645]"></div>
                                    </div>
                                </div>
                            </div>
                                        </NavLink> 
                            </>
                    )): isLoading? [...Array(6)].map((_, index)=>{
                        return(<div key={index} className=" h-fit flex flex-col min-w-72 cursor-pointer border-[0.25px] border-[#f7f7f6] border-solid product-box-shadow">
                                <div className="bg-[#d7d7d7] h-72 w-auto">
                                    <img  className="mix-blend-multiply" src="\loadng-product-image.jpeg" alt="" />
                                </div>
                                <div className="p-2">
                                       <div className="flex justify-between items-center">
                                           <p className="w-8 h-4 p-0.5 -skew-x-12 bg-[#e6e6e6]"></p>
                                           <div className="flex">
                                               
                                                   <div className="size-8 ml-2 bg-[#d7d7d7]"></div>
                                                   <div className="size-8 ml-2 bg-[#d7d7d7]"></div>
                                                   <div className="size-8 ml-2 bg-[#d7d7d7]"></div>
                                               
                                           </div>
                               </div>
   
                                       <p className="h-2 w-36 bg-[#d7d7d7]  py-3 rounded-2xl my-8"></p>
                                       <p className="h-2 w-16 bg-[#d7d7d7]  py-3 rounded-2xl my-8"></p>
                                       
                                       <div className="starMain flex items-center mt-8 mb-4">
                                           <div className="stars flex">
                                       {[...Array(5)].map((_, index) => {
                                           return(
                                               <svg
                                               className="fill-[#d7d7d7] w-3 mx-[0.12] stroke-1 stroke-none"
                                               viewBox="0 0 50 50"
                                               >
                                           <polygon points="25,2 32,18 49,18 35,29 40,46 25,36 10,46 15,29 1,18 18,18" />
                                               
                                           </svg>
                                           )
                                       })}
                                   </div>                            
                                   <div className="line h-[0.06rem] grow bg-[#16161645]"></div>
                                   </div>                            
   
                                   </div>      
                           </div>
                           
                        )
                    }):<div className="text-2xl font-bold min-h-72">No result found</div>:(<div className="text-black text-3xl">error</div>)}
        </div>
        
        
        {window.innerWidth < 769 ?<h2 className="group w-full flex justify-end text-end gap-2 items-center text-[0.7rem] font-extrabold font-sans cursor-pointer">{titleCategory} <img className="w-[0.8rem] transition-all duration-500 ease-in-out group-hover:translate-x-2" src="arrow image.png" alt="arrow image"/></h2>: ""} 
    </div>
}     

export default ProductsShowCase;