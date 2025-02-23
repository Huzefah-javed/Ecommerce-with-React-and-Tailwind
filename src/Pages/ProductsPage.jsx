import { HeroSection } from "./Landing page/LandingPageSections/HeroSection"

export const ProductsPage =()=> {
    
    
    
    return <>
        <HeroSection
            bg_link="/productPageMainImage.jpg"
            heading="Discover Quality, Shop with Confidence"
            para="Explore our premium collection of products designed to meet your needs. From top-notch materials to unbeatable prices, we ensure quality and satisfaction with every purchase."
            buttonNone={true}
            height="95vh"
        />
        <div className="w-full px-12 pb-16">
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

                        <img className="bg-[#f7f7f6] h-72 w-auto" src="https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png" alt="product1"/>

                        <div className="p-2">
                          <div className="flex justify-between ">
                                 <p className="p-0.5 -skew-x-12 bg-black text-[0.6rem] flex justify-center items-center uppercase text-white font-extrabold">in stock</p>
                                 <div>quantity left</div>
                           </div>
                        <p className="text-black font-sans text-[1.1rem] capitalize py-2">product1</p>    
                        <p className="text-black text-[0.85rem]">$10.99</p>

                        <div className="starMain flex items-center mt-8 mb-4">
                            <div className="stars text-black">☆☆☆☆☆</div>
                            <div className="line h-0.5 grow bg-black"></div>
                        </div>
                        </div>

                    </div>
                    
                </div>

            </div>
        </div>
    </>
}