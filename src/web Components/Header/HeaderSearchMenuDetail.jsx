import { GrClose } from "react-icons/gr"
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { ProductsShowCase } from "../../Pages/Landing page/LandingPageSections/ProductsShowCase"

export const HeaderSearchMenuDetail =({searchMenuActive, setSearchMenuActive})=> {
    const [searchValue, setSearchedValue] = useState("")
    const handleSearchMenuClose =()=>{
        setSearchMenuActive(false)
    }

    return <div className={`fixed -top-0 left-0 h-dvh w-dvw bg-white md:p-8 p-4 transition-all duration-300 ease-in-out  ${searchMenuActive? "opacity-100 z-50 visible": "opacity-0 -z-50 invisible"} overflow-y-scroll`}>
         <header className=" w-full h-24 flex justify-between items-center fixed top-0  bg-white pt-4">
           
                <div className="flex">
                    
                <img className="w-10" src="Logo.png" alt="logo" />
                <form className="row-span-2 md:w-[35rem] w-auto h-14 p-2 flex justify-center items-center md:ml-10 ml-2 border-2 border-black border-solid self-center justify-self-stretch">
                    <input className="border-none outline-none grow-[2] bg-white focus:bg-white" type="text" name="text" id="search" placeholder="Search for a product" value={searchValue} onChange={(e)=>{
                        setSearchedValue(e.target.value)
                    }} />
                    <button className="text-2xl cursor-pointer"><FiSearch /></button>
                </form>
                </div>
             <button onClick={()=>handleSearchMenuClose()} className=" h-fit w-fit text-[1.4rem] box-shadow p-2 cursor-pointer md:mr-10 mr-6"><GrClose /></button>
        </header>
        <div className={`main ${searchMenuActive? "mt-24": "mt-36"} transition-all duration-300 ease-in-out`}>
            <div className="search-suggestion flex flex-col ml-16 mb-18">
                <a className="text-[1rem] capitalize tracking-tighter m-3 font-medium" href="#">Smartphones</a>
                <a className="text-[1rem] capitalize tracking-tighter m-3 font-medium" href="#">Laptops</a>
                <a className="text-[1rem] capitalize tracking-tighter m-3 font-medium" href="#">Home Decoration</a>
                <a className="text-[1rem] capitalize tracking-tighter m-3 font-medium" href="#">mens's</a>
                <a className="text-[1rem] capitalize tracking-tighter m-3 font-medium" href="#">Womans</a>
            </div>
                {searchValue? <ProductsShowCase searchedItem={searchValue} title={searchValue} titleCategory="view all"/>: <h1 className="text-2xl capitalize font-bold font-sans">Your recent view</h1>}
        </div>
    </div>
}