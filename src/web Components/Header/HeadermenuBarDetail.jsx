import { GrClose } from "react-icons/gr";
import { MainButton } from "../../../src/web Components/Buttons/MainButton"


const HeaderMenubarDetail=({menuActive= false, setMenuActive})=> {

    const handleCloseMenu =()=> {
        setMenuActive(false)
    }
    
    return <div className={`fixed -top-0 left-0 h-dvh w-dvw bg-white p-8 transition-all duration-300 ease-in-out${menuActive? "visible opacity-100 z-50 ": "opacity-0 invisible -z-50"} overflow-y-scroll`}>
        <header className=" w-full h-24 flex justify-between items-center fixed top-0 bg-white pt-4">
        <img className="w-10" src="Logo.png" alt="logo" />

        <button onClick={()=>handleCloseMenu()} className=" h-fit w-fit text-[1.4rem] box-shadow p-2 cursor-pointer mr-10"><GrClose /></button>
        </header>
        <div className={`main-container flex justify-start flex-col md:flex-row transition-all duration-500 ease-in-out ${menuActive? "mt-16 opacity-100": "mt-24 opacity-0"}`}>
            <div className="login-detail flex flex-col m-8 max-w-[24rem] md:w-[24rem]">
                <div className="mb-8 text-[1.5rem] capitalize tracking-tighter font-semibold">Login to your account</div>
                <div className="email mb-8 flex flex-col">
                    <label className="text-[0.89rem] text-zinc-700 mb-1" htmlFor="email">Email Address*</label>
                    <input className="border-[0.5px] border-black border-solid p-3" type="email" name="email" id="email" />
                </div>
                <div className="password mb-8 flex flex-col">
                    <label className="text-[0.89rem] text-zinc-700 mb-1" htmlFor="password">password*</label>
                    <input className=" border-[0.5px] border-black border-solid p-3" type="password" name="password" id="password" />
                </div>
                <div className="checkBox mb-8">
                    <input className="size-4 " type="checkbox" name="checkbox" id="checkbox" />
                    <label htmlFor="checkbox"> Remember me</label>
                </div>
                <MainButton text="submit"/>
            </div>
            <div className="menu-list flex flex-col md:ml-14">
                <a className="text-[1.2rem] capitalize tracking-tighter md:m-4 m-2 font-semibold" href="#">Customer support</a>
                <a className="text-[1.2rem] capitalize tracking-tighter md:m-4 m-2 font-semibold" href="#">contact us</a>
                <a className="text-[1.2rem] capitalize tracking-tighter md:m-4 m-2 font-semibold" href="#">Order status</a>
                <a className="text-[1.2rem] capitalize tracking-tighter md:m-4 m-2 font-semibold" href="#">Warranty</a>
                <a className="text-[1.2rem] capitalize tracking-tighter md:m-4 m-2 font-semibold" href="#">Repair status</a>
                <a className="text-[1.2rem] capitalize tracking-tighter md:m-4 m-2 font-semibold" href="#">Returns</a>
                <a className="text-[1.2rem] capitalize tracking-tighter md:m-4 m-2 font-semibold" href="#">Shipping</a>
                <a className="text-[1.2rem] capitalize tracking-tighter md:m-4 m-2 font-semibold" href="#">eGift cards</a>
                <a className="text-[1.2rem] capitalize tracking-tighter md:m-4 m-2 font-semibold" href="#">Order FAQs</a>
                <a className="text-[1.2rem] capitalize tracking-tighter md:m-4 m-2 font-semibold" href="#">Dealer Locator</a>
                <a className="text-[1.2rem] capitalize tracking-tighter md:m-4 m-2 font-semibold" href="#">cookie preferences</a>
            </div>
        </div>
    </div>
}

export default HeaderMenubarDetail;