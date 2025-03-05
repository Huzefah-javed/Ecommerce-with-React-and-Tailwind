import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineShoppingBag } from "react-icons/md";
import { HeaderMenubarDetail } from "./HeadermenuBarDetail";
import { useState } from "react";
import { HeaderSearchMenuDetail } from "./HeaderSearchMenuDetail";
import { HeaderShopMenu } from "./HeaderShopMenu";
import { HeaderExperienceDetail } from "./HeaderExperienceDetail";
import { useLocation } from "react-router";
import { IoIosArrowBack } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { NavLink } from "react-router";

export const Header =()=> {

    const [menuActive , setMenuActive] = useState(false)
    const [searchMenuActive , setSearchMenuActive] = useState(false)
    const [shopMenuActive , setShopMenuActive] = useState(false)
    const [experienceMenu , setExperienceMenu] = useState(false)

    const location = useLocation()
    console.log("location", location)

   const handleMenuActive =()=> {
        setMenuActive(true)
   }
   const handleSearchMenuActive =()=> {
    setSearchMenuActive(true)
   }
   const handleShopMenuActive = ()=> {
       setShopMenuActive(true)
   }
   const handleExperienceMenuActive =()=> {
    setExperienceMenu(true)
   }

    return ( 
    <header className="w-full flex justify-between items-center absolute z-30 top-0 mt-10">
                    <div className={`${location.key === "default"? "w-72": "h-10"} flex items-center justify-start gap-0 ml-8 -skew-x-[30deg]`}>

                        <div className="bg-black flex items-center justify-start px-3">
                        <img className={`${location.key === "default"? "w-72": "w-8 skew-x-30"}`} src={`${location.key === "default"? "main-logo.png": location.pathname.includes("/products/")? "/Logo.png":"logo-white.png"}`} alt="main logo" />
                        {location.key === "default"?"":<div className="text-white  text-3xl skew-x-30"><IoIosArrowBack/></div>}
                    </div>
                        {location.key === "default"?"":<div className="text-white w-[3rem] h-full bg-[#949494] text-2xl flex justify-center items-center"><MdClose className="skew-x-[30deg]"/></div>}
                        {location.key === "default"?"":<div className="text-black min-w-[3rem] px-4 h-full bg-white text-[0.8rem] flex justify-center items-center gap-4"><NavLink className="skew-x-[30deg]" to="/">Home</NavLink><NavLink className="skew-x-[30deg]" to={location.pathname}>{location.pathname}</NavLink></div>}
                        </div>
        <div className="flex mr-12 font-sans relative">
            <button onClick={()=> handleShopMenuActive()} className={`${location.pathname.includes("/products/")? "text-black": "text-white"} text-[1.1rem] font-bold ml-10 uppercase cursor-pointer`}>Shop</button>
            <button onClick={()=>handleExperienceMenuActive()} className={`${location.pathname.includes("/products/")? "text-black": "text-white"} text-[1.1rem] font-bold ml-10 uppercase cursor-pointer`}>Experience</button>
            <button onClick={()=> handleSearchMenuActive()} className={`${location.pathname.includes("/products/")? "text-black": "text-white"} text-[1.5rem] font-bold ml-10 cursor-pointer hover:text-amber-700 transition-all duration-500`}><IoIosSearch /></button>
            <button  onClick={()=>handleMenuActive()} className={`${location.pathname.includes("/products/")? "text-black": "text-white"} text-[1.5rem] font-bold ml-10 cursor-pointer`}><RxHamburgerMenu /></button>
            <button className={`${location.pathname.includes("/products/")? "text-black": "text-white"} text-[1.5rem] font-bold ml-10 cursor-pointer hover:text-amber-700 transition-all duration-500`}><MdOutlineShoppingBag />
            </button>
        </div>
        <HeaderMenubarDetail menuActive={menuActive} setMenuActive={setMenuActive}/>
        <HeaderSearchMenuDetail searchMenuActive={searchMenuActive} setSearchMenuActive={setSearchMenuActive}/>
        <HeaderShopMenu shopMenuActive={shopMenuActive} setShopMenuActive={setShopMenuActive}/>
        <HeaderExperienceDetail experienceMenu={experienceMenu} setExperienceMenu={setExperienceMenu}/>
    </header>
)
}