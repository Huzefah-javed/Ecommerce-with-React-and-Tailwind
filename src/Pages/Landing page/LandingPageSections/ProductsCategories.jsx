export const ProductsCategories =()=>{
    return <div className="w-full flex flex-col justify-evenly items-center pt-28 pb-28">
        <div className="w-full flex justify-evenly ali">
            <div className="group relative max-h-72 max-w-72 cursor-pointer before-content-[''] before:transition-all before:duration-500 before:absolute before:ease-in-out before:bg-black before:opacity-0 before:h-full before:w-full before:top-0 before:left-0 hover:before:opacity-40 before:z-50 overflow-hidden"><h2 className="absolute top-[50%] left-[50%] z-50 -translate-x-[50%] -translate-y-[50%] text-white font-bold text-[1.2rem] text-shadow uppercase">Beauty</h2><img className="h-full group-hover:scale-x-105 group-hover:z-10 group-hover:scale-y-105 transition-all duration-500" src="beauty category.jpg" alt="beauty category" /></div>
            <div className="group relative max-h-72 max-w-72  cursor-pointer before-content-[''] before:transition-all before:duration-500 before:absolute before:ease-in-out before:bg-black before:opacity-0 before:h-full before:w-full before:top-0 before:left-0 hover:before:opacity-40 before:z-50 overflow-hidden"><h2 className="absolute top-[50%] left-[50%] z-50  -translate-x-[50%] -translate-y-[50%] text-white font-bold text-[1.2rem] text-shadow uppercase">home decoration</h2><img className="h-full group-hover:scale-x-105 group-hover:z-10 group-hover:scale-y-105 transition-all duration-500" src="home decoration.jpg" alt="home decoration" /></div>
            <div className="group relative max-h-72 max-w-72  cursor-pointer before-content-[''] before:transition-all before:duration-500 before:absolute before:ease-in-out before:bg-black before:opacity-0 before:h-full before:w-full before:top-0 before:left-0 hover:before:opacity-40 before:z-50 overflow-hidden"><h2 className="absolute top-[50%] left-[50%] z-50  -translate-x-[50%] -translate-y-[50%] text-white font-bold text-[1.2rem] text-shadow uppercase">laptops</h2><img className="h-full group-hover:scale-x-105 group-hover:z-10 group-hover:scale-y-105 transition-all duration-500" src="laptops category.jpg" alt="laptops category" /></div>
            <div className="group relative max-h-72 max-w-72  cursor-pointer before-content-[''] before:transition-all before:duration-500 before:absolute before:ease-in-out before:bg-black before:opacity-0 before:h-full before:w-full before:top-0 before:left-0 hover:before:opacity-40 before:z-50 overflow-hidden"><h2 className="absolute top-[50%] left-[50%] z-50  -translate-x-[50%] -translate-y-[50%] text-white font-bold text-[1.2rem] text-shadow uppercase">smartPhone</h2><img className="h-full group-hover:scale-x-105 group-hover:z-10 group-hover:scale-y-105 transition-all duration-500" src="smartPhone category.jpg" alt="smartPhone category" /></div>
        </div>
        <div className="mens-womans-category">
            <div className="category-title">Mens</div>
            <div className="category-title">Womans</div>
        </div>
    </div>
}