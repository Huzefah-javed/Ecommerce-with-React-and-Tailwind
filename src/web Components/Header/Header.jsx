import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineShoppingBag } from "react-icons/md";
import { lazy, Suspense, useCallback, useEffect, useState } from "react";
const HeaderMenubarDetail = lazy(()=> import ("./HeadermenuBarDetail"))
const HeaderShopMenu  = lazy(()=>import ("./HeaderShopMenu"))
const HeaderSearchMenuDetail = lazy(() => import("./HeaderSearchMenuDetail"));
const HeaderExperienceDetail = lazy(() => import("./HeaderExperienceDetail"));
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
    
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const handleResize =useCallback(()=>{
        setWindowWidth(window.innerWidth)
        window.removeEventListener("resize", handleResize)
    })
    useEffect(()=>{
        window.addEventListener("resize", handleResize)
        return ()=> window.addEventListener("resize", handleResize)
    },[])

    const cartData = useSelector((state)=> state.ProductDetails.cartData)

    const location = useLocation()

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
    <header className="md:w-full min-w-full max-w-full flex justify-between items-center absolute z-20 top-0 p-2 md:mt-10 bg-white shadow md:shadow-none md:bg-transparent">
                    <div className={`${location.pathname === "/"? "md:ml-8": "h-10"} relative flex items-center justify-start gap-0 -skew-x-[30deg]`}>

                    <div className={`${windowWidth >= 768? "w-[15rem]":"w-[2rem]"} skew-x-[30deg]`}><img src={windowWidth >= 768 && location.pathname === "/"? "/main-logo.png":windowWidth >= 768 && location.pathname !== "/"? "":"/Logo.png"}/></div> 

                        {location.pathname === "/"?
                        "":
                        <div className={`absolute ${windowWidth < 768? "top-15 left-4":""} flex z-40 h-[3rem]`}>
                            <div onClick={()=>navigator(-1)} className={` flex justify-center items-center ${location.pathname.includes("/products/")||location.pathname.includes("/cart")? "bg-white text-black":"bg-black text-white"} h-full px-4 text-2xl cursor-pointer`}>
                                <IoIosArrowBack className="skew-x-30"/>
                                </div>
                        <div onClick={()=>{handleHidenavMenu()}} className="text-white w-[3rem] cursor-pointer h-full bg-[#949494] text-2xl flex justify-center items-center">
                            <MdClose className="skew-x-[30deg]"/>
                            </div>
                        <div className={`${location.pathname.includes("/products/")||location.pathname.includes("/cart")? "bg-white":"bg-[#dedede]"} ${navMenu? "":"-translate-x-[10rem] invisible opacity-0"} -z-30 transition-all duration-[0.25s] ease-in min-w-[3rem] px-4 h-full text-[0.8rem] flex justify-center items-center gap-4`}>
                            <NavLink className="skew-x-[30deg]" to="/">Home</NavLink><NavLink className="skew-x-[30deg]" to={location.pathname}>
                                {location.pathname}
                                </NavLink>
                                </div>
                            </div>}
                        </div>
        <div className="flex justify-around md:mr-12 grow-[2] md:grow-0 font-sans relative">
            <button onClick={()=> handleShopMenuActive()} className={`${location.pathname.includes("/products/")||location.pathname.includes("/cart")? "md:text-black": "md:text-white"} md:text-[1.1rem] text-[0.9rem] font-bold text-black ml-10 uppercase cursor-pointer`}>Shop</button>
            <button onClick={()=>handleExperienceMenuActive()} className={`${location.pathname.includes("/products/")||location.pathname.includes("/cart")? "md:text-black": "md:text-white"} md:text-[1.1rem] text-[0.7rem] invisible hidden md:block md:visible text-black font-bold ml-10 uppercase cursor-pointer`}>Experience</button>
            <button onClick={()=> handleSearchMenuActive()} className={`${location.pathname.includes("/products/")||location.pathname.includes("/cart")? "md:text-black": "md:text-white"} text-[1.7rem] text-black font-bold ml-10 cursor-pointer hover:text-amber-700 transition-all duration-500`}><IoIosSearch /></button>
            <button  onClick={()=>handleMenuActive()} className={`${location.pathname.includes("/products/")||location.pathname.includes("/cart")? "md:text-black": "md:text-white"} text-[1.5rem] text-black font-bold ml-10 cursor-pointer`}><RxHamburgerMenu /></button>
            <button className={`${location.pathname.includes("/products/")||location.pathname.includes("/cart")? "md:text-black": "md:text-white"} text-[1.7rem] text-black font-bold ml-10 cursor-pointer relative hover:text-amber-700 transition-all duration-500`}><NavLink to="/cart"><MdOutlineShoppingBag /><span className="absolute size-4  flex items-center justify-center left-[70%] top-0 bg-amber-700 text-white rounded-[80%] p-[3px] text-[0.65rem]">{cartData.length}</span></NavLink>
            </button>
        </div>
       {menuActive? <HeaderMenubarDetail menuActive={menuActive} setMenuActive={setMenuActive}/>: ""}
        {searchMenuActive? <HeaderSearchMenuDetail searchMenuActive={searchMenuActive} setSearchMenuActive={setSearchMenuActive}/>: ""}
       {shopMenuActive? <HeaderShopMenu shopMenuActive={shopMenuActive} setShopMenuActive={setShopMenuActive}/>: ""}
       {experienceMenu? <HeaderExperienceDetail experienceMenu={experienceMenu} setExperienceMenu={setExperienceMenu}/>: ""}
    </header>
)
}