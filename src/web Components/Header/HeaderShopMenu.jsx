
import { Children } from "react"
import { GrClose } from "react-icons/gr"
import { useSelector } from "react-redux"
import { productCategoryList } from "../../Api data/ProductDataFetch"

export const HeaderShopMenu =({shopMenuActive, setShopMenuActive})=> {
    
    const {data, loading, error} = useSelector((state) => state.ProductDetails.category)
        const handleShopMenuClose =()=> {
            setShopMenuActive(false);
        }

        const handleDataFetch =(productCategory)=> {
            productCategoryList(productCategory)
        }
    return <>
        <div className={`fixed -top-0 left-0 h-dvh w-dvw bg-white p-8 transition-all duration-300 ease-in-out ${shopMenuActive? "visible opacity-100 z-50": "invisible opacity-0 -z-50"} overflow-y-scroll`}>
                <header className=" w-full h-24 flex justify-between items-center fixed top-0 bg-white pt-4">
                <img className="w-10" src="Logo.png" alt="logo" />
        
                <button onClick={()=> handleShopMenuClose()} className=" h-fit w-fit text-[1.4rem] box-shadow p-2 cursor-pointer mr-10"><GrClose /></button>
                </header>
                <h1 className={`text-2xl capitalize font-bold font-sans transition-all duration-200 ease-in-out ${shopMenuActive? "mt-28":"mt-40" } mb-12`}>Shop All Category</h1>
                <div className={`main grid grid-cols-5 gap-y-4 grid-rows-5 ml-8 transition-all duration-300 ease-in-out`}>
                    {
                       loading? (<div>Loading.....</div>) : !error? data?.map((individualCategory, index)=>{
                            return (<div key={index} className="group max-w-8 flex items-center justify-around cursor-pointer text-[1.2rem] capitalize tracking-tighter m-1 font-medium"><h1 onClick={()=>handleDataFetch(individualCategory.slug)} className="max-w-20 mr-4">{individualCategory.name}</h1><img className="w-[1rem] transition-all duration-500 ease-in-out group-hover:translate-x-4" src="arrow image.png" alt="arrow image"/></div>)

                    }): (<div>{error}</div>)
                    }

                </div>
                </div>
    </>
}