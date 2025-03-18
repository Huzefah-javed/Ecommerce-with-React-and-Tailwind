
import { GrClose } from "react-icons/gr"
import { useDispatch} from "react-redux"
import { productCategory } from "../../Api data/ProductDataFetch"
import { NavLink } from "react-router"
import { addProductCategoryData } from "../../Store"
import { useQuery } from "@tanstack/react-query"


const HeaderShopMenu =({shopMenuActive= false, setShopMenuActive})=> {
    const dispatch = useDispatch()
    

    const {data, isLoading, error} = useQuery({
        queryKey: ["productsCategory"],
        queryFn : productCategory,
        staleTime: 300000,
        enabled: shopMenuActive
    })
        
        const handleShopMenuClose =()=> {
            setShopMenuActive(false);
        }
        
        const handleDataFetch =(productCategory)=> {
        
            dispatch(addProductCategoryData(productCategory))        
            setShopMenuActive(false);
        }
    return <>
        <div className={`fixed -top-0 left-0 h-dvh w-dvw bg-white p-8 transition-all duration-300 ease-in-out ${shopMenuActive? "visible opacity-100 z-50": "invisible opacity-0 -z-50"} overflow-y-scroll`}>
                <header className=" w-full h-24 flex justify-between items-center fixed top-0 bg-white pt-4">
                <img className="w-10" src="Logo.png" alt="logo" />
        
                <button onClick={()=> handleShopMenuClose()} className=" h-fit w-fit text-[1.4rem] box-shadow p-2 cursor-pointer mr-10"><GrClose /></button>
                </header>
                <h1 className={`text-2xl capitalize font-bold font-sans transition-all duration-200 ease-in-out ${shopMenuActive? "mt-28":"mt-40" } mb-12`}>Shop All Category</h1>
                <div className={`main grid md:grid-cols-5 grid-cols-3 md:gap-y-4 gap-y-2 md:grid-rows-5 gap-8 md:ml-8  transition-all duration-300 ease-in-out`}>
                    {
                       isLoading? (<div className="h-dvh flex justify-center items-center"><div className="loader"></div></div>) : !error? data?.map((individualCategory, index)=>{
                            return (<div key={index} className="group max-w-8 flex items-center justify-around cursor-pointer md:text-[1.2rem] text-[1rem] capitalize tracking-tighter m-1 font-medium"><NavLink to="/products" onClick={()=>handleDataFetch(individualCategory.slug)} className="max-w-20 mr-4">{individualCategory.name}</NavLink><img className="w-[1rem] invisible opacity-0 md:visible md:opacity-100 active:text-amber-700 transition-all duration-500 ease-in-out group-hover:translate-x-4" src="arrow image.png" alt="arrow image"/></div>)

                    }): (<div className="h-full flex justify-center item-center"><span className="text-3xl font-bold">{error}</span></div>)
                    }

                </div>
                </div>
    </>
}

export default HeaderShopMenu;