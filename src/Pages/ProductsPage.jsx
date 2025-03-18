import  HeroSection from "./Landing page/LandingPageSections/HeroSection";
import { useQuery } from "@tanstack/react-query";
import { AllProducts, productCategoryList } from "../Api data/ProductDataFetch";
import { useSelector } from "react-redux";
import { useCallback, useEffect, tate, useState, useTransition } from "react";
import { MainButton } from "../web Components/Buttons/MainButton";
import { NavLink } from "react-router";
import { HiOutlineFilter } from "react-icons/hi";

 const ProductsPage = () => {
  const productData = useSelector((state) => state.ProductDetails.category);
  
    const [loadData, setLoadData] = useState(30)
    const [filterShown, setFilterShown] = useState(false)

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
     const handleResize =useCallback(()=>{
            setWindowWidth(windowWidth.innerWidth)
            window.removeEventListener("resize", handleResize)
        })
        useEffect(()=>{
            window.addEventListener("resize", handleResize)
            return ()=> window.addEventListener("resize", handleResize)
        },[])

    const [dataForFilter, setDataForFilter] = useState({
        brands: [],
        maxPrice: 0
    })
    const [filterCmdUser, setFilterCmdUser] = useState({
       search : "",
       price: 0,
       brand: [],
       review: "",
       sorting: ""
    })
    const { data, isLoading, isError, error } = useQuery({
        queryKey: productData ? ["productsOfCategory", productData]: ["products",loadData],
        queryFn: productData ? () => productCategoryList(productData) :  ()=> AllProducts(loadData),
    })
      
    
    useEffect(()=>{
    if (data && !isLoading && !isError) {
        let singleBrand = ""
        let maxPrice = 0
    data.products.map((product)=>{
        if (product.price > maxPrice) {
            maxPrice = product.price
        }

        if (!singleBrand.includes(product.brand)) {
            product.brand?
            singleBrand = [...singleBrand ,  product.brand]: singleBrand
        }else{
             product;
        }

        })

        setDataForFilter((prev)=>{
            return {...prev, maxPrice, brands: singleBrand}
        })

    }
},[data])
        
    const SearchFilter = filterCmdUser.search && data ? data.products.filter((item)=>{
        return item.title.toUpperCase().includes(filterCmdUser.search.toUpperCase())
}): data?.products || []

const priceFilter = filterCmdUser.price? SearchFilter.filter((item)=>{
    return item.price > filterCmdUser.price
}): SearchFilter

let sortingFilter;
if (filterCmdUser.sorting === "price-S-to-G") {
    sortingFilter =  priceFilter.sort((a, b)=>{ return a.price - b.price})
}else if (filterCmdUser.sorting === "price-G-to-S") {
    sortingFilter =  priceFilter.sort((a, b)=>{ return b.price - a.price})
  } else if (filterCmdUser.sorting === "rating-S-to-G") {
    sortingFilter =  priceFilter.sort((a, b)=>{ return a.rating - b.rating})
  }else if (filterCmdUser.sorting === "rating-G-to-S") {
    sortingFilter = priceFilter.sort((a, b)=>{ return b.rating - a.rating})
  }else sortingFilter = priceFilter
                    
const brandFilter = filterCmdUser.brand.length > 0? sortingFilter.filter((item)=>{
            return filterCmdUser.brand.some((userChoiceBrand)=>{
                return item.brand === userChoiceBrand
            })
})
: sortingFilter


const handleLoadMoreData =()=>{     
     setLoadData(loadData + 30)
    
}

const handleFilterToggle =()=> {
  setFilterShown(!filterShown)
}
console.log(brandFilter);

    return (
        <div className="opacityAnimation">
            
            <HeroSection
                bg_link="/productPageMainImage.webp"
                heading="Discover Quality, Shop with Confidence"
                para="Explore our premium collection of products designed to meet your needs. From top-notch materials to unbeatable prices, we ensure quality and satisfaction with every purchase."
                buttonNone={true}
                height="95vh"
            />

            <div className="w-full px-6 md:px-12 pb-16">
                <header className="flex justify-between">
                    <h1 className="text-3xl font-[600] font-sans capitalize">
                      {windowWidth > 768?<div>{productData} result</div>
                      :
                       <button onClick={()=>{handleFilterToggle()}} className="flex gap-2 text-[1.5rem]">
                        <HiOutlineFilter />
                        <h1>Filter</h1>
                        </button>
                        }</h1>
                    <div className="applied-filter"></div>
                    <div className="sort-filter flex gap-4 items-center">
                        <p className="text-[#0000009e]">{brandFilter?.length} results</p>
                        <select 
                          name="sort" 
                          id="sort" 
                          className="p-3 border-2 border-solid border-black rounded-[0.25rem]" 
                          value={filterCmdUser.sorting} onChange={(e)=>{
                            setFilterCmdUser((prev)=>{
                                return{...prev, sorting: e.target.value}
                            })
                        }}>
                            
                            <option value="">Most Relevant</option>
                            <option value="price-S-to-G">Price $-$$$</option>
                            <option value="price-G-to-S">Price $$$-$</option>
                            <option value="rating-S-to-G">Rating 1-5</option>
                            <option value="rating-G-to-S">Rating 5-1</option>
                        </select>
                    </div>
                </header>

                <div className="mt-8 flex flex-col">
                <div className={`flex relative ${filterShown? "min-h-[100vh]": "min-h-[50vh]"}`}>
  
         <div className={`filter absolute top-0 left-0 max-h-dvh ${filterShown ? "z-50 visible":"-z-50 invisible"} md:z-10 w-full md:static md:visible transition-all ease-in-out duration-200 min-h-full p-4 grow basis-72 bg-[#f7f7f6] mr-8`}>
    <div className="flex flex-col items-start relative z-50 w-full my-4">
      <label htmlFor="search" className="font-medium font-sans justify-self-start">
        Search Product:
      </label>
      <input
        className="w-full border-black border-[1px] outline-none grow-[2] bg-white focus:bg-white p-2 ml-2 my-4"
        placeholder="Search products.."
        type="search"
        name="search"
        id="search"
        value={filterCmdUser.search}
        onChange={(e) => {
          setFilterCmdUser((prev) => {
            return { ...prev, search: e.target.value };
          });
        }}
      />
    </div>
    <div className="flex flex-col items-start w-full my-4">
      <label htmlFor="range" className="font-medium font-sans justify-self-start">Price:</label>
      <input
        className="w-full fml-2 my-4"
        type="range"
        name="range"
        value={filterCmdUser.price}
        id="range"
        min="0"
        max={dataForFilter.maxPrice}
        onChange={(e) => {

            setFilterCmdUser((prev) => {
          
              return { ...prev, price: e.target.value }
            });
        }}
      />
      <div className="w-full flex justify-between">
        <div className="minPrice text-[1rem]">${filterCmdUser.price}</div>
        <div className="maxPrice text-[1rem]">${dataForFilter.maxPrice}</div>
      </div>
    </div>
    <div className="flex flex-col items-start w-full">
      <div className="font-medium font-sans justify-self-start my-4">Brands:</div>
      {dataForFilter.brands.length > 0 && productData ? (
        dataForFilter.brands.map((checkboxData) => {
          return (
            <div key={checkboxData} className="flex gap-2 items-center ml-2 my-2">
              <input
                className="size-5 border-[0.5px] border-black border-solid"
                type="checkbox"
                id={checkboxData}
                name="checkbox"
                value={checkboxData}
                onChange={(e) => {
                  setFilterCmdUser((prev) => {
                    if (e.target.checked) {
                      return { ...prev, brand: [...prev.brand, e.target.value] };
                    } else {
                      return {
                        ...prev,
                        brand: prev.brand.filter((item) => {
                          return item !== e.target.value;
                        }),
                      };
                    }
                  });
                }}
              />
              <label className="font-sans text-black" htmlFor={checkboxData}>
                {checkboxData}
              </label>
            </div>
          );
        })
      ) : (
        <div className="font-medium font-sans text-black my-4">No brand found</div>
      )}
    </div>
      </div>
                    <div className="productGrid grow-[2] relative grid grid-cols-2 md:grid-cols-3 grid-rows-3 gap-4">
                            
                        {brandFilter.length === 0? <h1 className=" h-full flex justify-center items-center font-bold text-3xl">No product Found</h1>: ""}
                        {!isLoading && !isError && data ? brandFilter.map((product, index) => (
                            
                            <NavLink to={`/products/${product.id}`} >
                            <div key={index} className="products overflow-hidden flex flex-col cursor-pointer border-[0.25px] border-[#f7f7f6] border-solid product-box-shadow">
                                
                                <img className="bg-[#f7f7f6] md:h-72 h-40 w-auto opacityAnimation" src={product.thumbnail} alt={product.title} loading="lazy" />

                                <div className="p-2">
                                    <div className="flex justify-between items-center">
                                        <p className="p-0.5 -skew-x-12 bg-black text-[0.6rem] flex justify-center items-center uppercase text-white font-extrabold">
                                            {product.brand || "No brand"}
                                        </p>
                                        <div className="flex text-[0.85rem] font-bold text-[#161616ac]">
                                              <div className="p-1 border-[1px] border-[#16161645]">
                                                  {product.category}                                                
                                                </div>
                                            
                                        </div>
                                    </div>
                                    <p className="text-black font-sans text-[1.1rem] capitalize py-2">{product.title}</p>
                                    <p className="text-black text-[0.85rem]">${product.price} <span className="text-[0.65rem]">({product.discountPercentage}% discount)</span></p>

                                    <div className="starMain flex flex-col md:flex-row items-start md:items-center mt-8 mb-4">
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
                                        <div className="w-full mt-4 md:mt-0 line h-[0.06rem] grow bg-[#16161645]"></div>
                                    </div>
                                </div>
                            </div>
                            </NavLink>
                        )): isLoading? [...Array(6)].map((_, index)=>{
                            return(<div key={index} className=" h-fit flex flex-col cursor-pointer border-[0.25px] border-[#f7f7f6] border-solid product-box-shadow">
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
                    }):(<div className="text-black text-3xl">error</div>)  
                    
                    }
                    </div>
                                </div>
                                {productData? "" : <div onClick={()=> handleLoadMoreData()} className="w-full my-8 flex justify-center items-center"><MainButton text="Load more" bg="black" bgAfter="true"/></div> }                     
                                </div>
                                </div>
                                </div>
                       
    );
};

export default ProductsPage;