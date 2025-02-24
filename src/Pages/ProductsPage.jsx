import { useSelector } from "react-redux"
import { HeroSection } from "./Landing page/LandingPageSections/HeroSection"

export const ProductsPage =()=> {
    
    const hello = useSelector((state)=> state.productDetails)
    console.log('hello' + hello)    
    
    return <>
        <HeroSection
            bg_link="/productPageMainImage.jpg"
            heading="Discover Quality, Shop with Confidence"
            para="Explore our premium collection of products designed to meet your needs. From top-notch materials to unbeatable prices, we ensure quality and satisfaction with every purchase."
            buttonNone={true}
            height="95vh"
        />

                   {/* { 
                       loading? (<div>Loading.....</div>) : !error? data?.map((individualCategory, index)=>{
                            return (<div key={index} className="group max-w-8 flex items-center justify-around cursor-pointer text-[1.2rem] capitalize tracking-tighter m-1 font-medium"><NavLink to="/products" onClick={()=>handleDataFetch(individualCategory.slug)} className="max-w-20 mr-4">{individualCategory.name}</NavLink><img className="w-[1rem] transition-all duration-500 ease-in-out group-hover:translate-x-4" src="arrow image.png" alt="arrow image"/></div>)

                    }): (<div>{error}</div>)
                    } */}
        {/* <div className="w-full px-12 pb-16">
            <header className="flex justify-between">
                <h1 className="text-3xl font-medium font-sans">product-category-searched</h1>
                <div className="applied-filter"></div>
                <div className="sort-filter flex gap-4 items-center">
                    <p className="text-[#0000009e]">total products</p>
                    <select name="sort" id="sort" value="" className="p-3 border-2 border-solid border-black rounded-[0.25rem]">
                        <option value="most-relevant">Most Relevant</option>
                        <option value="price-S-to-G">Price $-$$$</option>
                        <option value="price-G-to-S">Price $$$-$</option>
                        <option value="rating-S-to-G">Rating 1-5</option>
                        <option value="rating-G-to-S">Rating 5-1</option>
                    </select>
                </div>
            </header>

            <div className="mt-8 flex">
                <div className="filter min-h-full grow items-start basis-56 bg-[#f7f7f6] mr-8">hello hello hello helo hello hello hello hello hello hello hello hello hello hello hello hello </div>

                <div className="productGrid grow-[2] grid grid-cols-3 gap-4">
                    <div className="products flex flex-col cursor-pointer border-[0.25px] border-[#f7f7f6] border-solid product-box-shadow ">

                        <img className="bg-[#f7f7f6] h-72 w-auto" src={thumbnail} alt={title}/>

                        <div className="p-2">
                          <div className="flex justify-between ">
                                 <p className="p-0.5 -skew-x-12 bg-black text-[0.6rem] flex justify-center items-center uppercase text-white font-extrabold">{brand}</p>
                                 <div className="flex text-[0.85rem] font-bold text-[#161616ac]">
                                    {
                                    images.map((singleImage,index)=>{

                                        <div key={index} className="w-8 ml-2 border-[1px] border-[#16161645]">
                                        <img src={singleImage} alt="productMoreImg" />
                                    </div>
                                        })
                                    }
                                    
                                 </div>
                           </div>
                        <p className="text-black font-sans text-[1.1rem] capitalize py-2">{title}</p>    
                        <p className="text-black text-[0.85rem]">${price}</p>

                        <div className="starMain flex items-center mt-8 mb-4">
                            <div className="stars flex">
                                {   
                                    [...Array(5)].map((_, index)=>{
                                        const ratingData = rating

                                       return <svg key={index} className={`${ratingData >= (index + 1) || (ratingData - index) < 1 && (ratingData - index) > 0 ? "fill-black": "fill-[#ffffff]"} w-3 mx-[0.12] stroke-1 stroke-black`}viewBox={`${(ratingData - index) < 1 && (ratingData - index) > 0?"0 0 24 24":"0 0 50 50"}`}>
                                        {(ratingData - index) < 1 && (ratingData - index) > 0  ? ( <path d="M22 9.74l-7.19-.62L12 2.5 9.19 9.13 2 9.74l5.46 4.73-1.64 7.03L12 17.77l6.18 3.73-1.63-7.03L22 9.74zM12 15.9V6.6l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.9z"/>
                                        ):(<polygon points="25,2 32,18 49,18 35,29 40,46 25,36 10,46 15,29 1,18 18,18"/>)}
                                        </svg>

                                        
                                    })
                                }
                            </div>
                            <div className="line h-[0.06rem] grow bg-[#16161645]"></div>
                        </div>
                        </div>

                    </div>
                    
                </div>

            </div>
        </div> */}
    </>
}