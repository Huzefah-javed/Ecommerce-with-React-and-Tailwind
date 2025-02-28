import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineShoppingBag } from "react-icons/md";
import { HeaderMenubarDetail } from "./HeadermenuBarDetail";
import { useState } from "react";
import { HeaderSearchMenuDetail } from "./HeaderSearchMenuDetail";
import { HeaderShopMenu } from "./HeaderShopMenu";
import { HeaderExperienceDetail } from "./HeaderExperienceDetail";

export const Header =()=> {

    const [menuActive , setMenuActive] = useState(false)
    const [searchMenuActive , setSearchMenuActive] = useState(false)
    const [shopMenuActive , setShopMenuActive] = useState(false)
    const [experienceMenu , setExperienceMenu] = useState(false)

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

                    <div className="w-72 ml-8">
                        <img src="main logo.png" alt="main logo" />
                    </div>
        <div className="flex mr-12 font-sans relative">
            <button onClick={()=> handleShopMenuActive()} className="text-white text-[1.1rem] font-bold ml-10 uppercase cursor-pointer">Shop</button>
            <button onClick={()=>handleExperienceMenuActive()} className="text-white text-[1.1rem] font-bold ml-10 uppercase cursor-pointer">Experience</button>
            <button onClick={()=> handleSearchMenuActive()} className="text-white text-[1.5rem] font-bold ml-10 cursor-pointer hover:text-amber-700 transition-all duration-500"><IoIosSearch /></button>
            <button  onClick={()=>handleMenuActive()} className="text-white text-[1.5rem] font-bold ml-10 cursor-pointer"><RxHamburgerMenu /></button>
            <button className="text-white text-[1.5rem] font-bold ml-10 cursor-pointer hover:text-amber-700 transition-all duration-500"><MdOutlineShoppingBag />
            </button>
        </div>
        <HeaderMenubarDetail menuActive={menuActive} setMenuActive={setMenuActive}/>
        <HeaderSearchMenuDetail searchMenuActive={searchMenuActive} setSearchMenuActive={setSearchMenuActive}/>
        <HeaderShopMenu shopMenuActive={shopMenuActive} setShopMenuActive={setShopMenuActive}/>
        <HeaderExperienceDetail experienceMenu={experienceMenu} setExperienceMenu={setExperienceMenu}/>
    </header>
)
}