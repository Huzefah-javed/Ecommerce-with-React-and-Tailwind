import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineShoppingBag } from "react-icons/md";
import { HeaderMenubarDetail } from "./HeadermenuBarDetail";
import { useState } from "react";
import { HeaderSearchMenuDetail } from "./HeaderSearchMenuDetail";
import { HeaderShopMenu } from "./HeaderShopMenu";
import { HeaderExperienceDetail } from "./HeaderExperienceDetail";
import { useLocation, useNavigate, useNavigation } from "react-router";
import { IoIosArrowBack } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { NavLink } from "react-router";
import { useSelector } from "react-redux";

export const Header =()=> {
    const[navMenu , setNavMenu] = useState(true)
    const [menuActive , setMenuActive] = useState(false)
    const [searchMenuActive , setSearchMenuActive] = useState(false)
    const [shopMenuActive , setShopMenuActive] = useState(false)
    const [experienceMenu , setExperienceMenu] = useState(false)

    const cartData = useSelector((state)=> state.ProductDetails.cartData)

    const location = useLocation()
    console.log("location", location)

    const navigator = useNavigate()

    const handleHidenavMenu = ()=> {
        setNavMenu(!navMenu)
    }
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
                    <div className={`${location.pathname === "/"? " ml-8": "h-10"} relative flex items-center justify-start gap-0 -skew-x-[30deg]`}>

                        <div className={`${location.pathname === "/"? "skew-x-[30deg]": ` ${location.pathname.includes("/products/")||location.pathname.includes("/cart")? "bg-white":"bg-black"} h-full flex items-center justify-start pl-12 p-3>`}`}>
                        <img className={`${location.pathname === "/"? "w-72": "w-8 skew-x-30"}`} src={`${location.pathname === "/"? "main-logo.png": location.pathname.includes("/products/")||location.pathname.includes("/cart")? "/Logo.png":"logo-white.png"}`} alt="main logo" />
                    </div>
                        {location.pathname === "/"?"":<><div onClick={()=>navigator(-1)} className={` flex justify-center items-center ${location.pathname.includes("/products/")||location.pathname.includes("/cart")? "bg-white text-black":"bg-black text-white"} h-full px-4 text-2xl cursor-pointer`}><IoIosArrowBack className="skew-x-30"/></div>
                    <div onClick={()=>{handleHidenavMenu()}} className="text-white w-[3rem] cursor-pointer h-full bg-[#949494] text-2xl flex justify-center items-center"><MdClose className="skew-x-[30deg]"/></div>
                        <div className={`${location.pathname.includes("/products/")||location.pathname.includes("/cart")? "bg-white":"bg-[#dedede]"} ${navMenu? "":"-translate-x-[10rem]"} -z-30 transition-all duration-[0.25s] ease-in min-w-[3rem] px-4 h-full text-[0.8rem] flex justify-center items-center gap-4`}><NavLink className="skew-x-[30deg]" to="/">Home</NavLink><NavLink className="skew-x-[30deg]" to={location.pathname}>{location.pathname}</NavLink></div></>}
                        </div>
        <div className="flex mr-12 font-sans relative">
            <button onClick={()=> handleShopMenuActive()} className={`${location.pathname.includes("/products/")||location.pathname.includes("/cart")? "text-black": "text-white"} text-[1.1rem] font-bold ml-10 uppercase cursor-pointer`}>Shop</button>
            <button onClick={()=>handleExperienceMenuActive()} className={`${location.pathname.includes("/products/")||location.pathname.includes("/cart")? "text-black": "text-white"} text-[1.1rem] font-bold ml-10 uppercase cursor-pointer`}>Experience</button>
            <button onClick={()=> handleSearchMenuActive()} className={`${location.pathname.includes("/products/")||location.pathname.includes("/cart")? "text-black": "text-white"} text-[1.5rem] font-bold ml-10 cursor-pointer hover:text-amber-700 transition-all duration-500`}><IoIosSearch /></button>
            <button  onClick={()=>handleMenuActive()} className={`${location.pathname.includes("/products/")||location.pathname.includes("/cart")? "text-black": "text-white"} text-[1.5rem] font-bold ml-10 cursor-pointer`}><RxHamburgerMenu /></button>
            <button className={`${location.pathname.includes("/products/")||location.pathname.includes("/cart")? "text-black": "text-white"} text-[1.5rem] font-bold ml-10 cursor-pointer relative hover:text-amber-700 transition-all duration-500`}><NavLink to="/cart"><MdOutlineShoppingBag /><span className="absolute h-4 w-4 flex items-center justify-center left-[70%] top-0 bg-amber-700 text-white rounded-[80%] p-[3px] text-[0.65rem]">{cartData.length}</span></NavLink>
            </button>
        </div>
        <HeaderMenubarDetail menuActive={menuActive} setMenuActive={setMenuActive}/>
        <HeaderSearchMenuDetail searchMenuActive={searchMenuActive} setSearchMenuActive={setSearchMenuActive}/>
        <HeaderShopMenu shopMenuActive={shopMenuActive} setShopMenuActive={setShopMenuActive}/>
        <HeaderExperienceDetail experienceMenu={experienceMenu} setExperienceMenu={setExperienceMenu}/>
    </header>
)
}