import { GrClose } from "react-icons/gr";
import { MainButton } from "../../../src/web Components/Buttons/MainButton"


export const HeaderMenubarDetail=({menuActive, setMenuActive})=> {

    const handleCloseMenu =()=> {
        setMenuActive(false)
    }
    
    return <div className={`fixed -top-0 left-0 h-dvh w-dvw bg-white p-8 transition-all duration-300 ease-in-out${menuActive? "visible opacity-100 z-50 ": "opacity-0 invisible -z-50"} overflow-y-scroll`}>
        <header className=" w-full h-24 flex justify-between items-center fixed top-0 bg-white">
        <svg data-v-2e58fd37="" data-v-549ed7fb="" viewBox="0 0 1856 80" xmlns="http://www.w3.org/2000/svg" focusable="false" class="logo-link dark"><path data-v-2e58fd37="" d="M27.7372067,3.17560999e-14 L1.5242928e-13,39.9106145 L27.8078212,79.8167598 L27.8082682,79.8167598 L36.8223464,66.8487151 L17.7899441,39.630838 L36.5448045,12.6319553 L27.7372067,3.17560999e-14 Z M26.633743,39.9106145 L41.1343017,60.6458101 L55.5521788,39.9110615 L55.5521788,39.9097207 L41.070838,19.1293855 L26.633743,39.9106145 Z" id="Fill-1" fill="#231F20"></path></svg>

        <button onClick={()=>handleCloseMenu()} className=" h-fit w-fit text-[1.4rem] box-shadow p-2 cursor-pointer mr-10"><GrClose /></button>
        </header>
        <div className={`main-container flex justify-start transition-all duration-500 ease-in-out ${menuActive? "mt-16 opacity-100": "mt-24 opacity-0"}`}>
            <div className="login-detail flex flex-col m-8 w-[24rem]">
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
            <div className="menu-list flex flex-col ml-14">
                <a className="text-[1.2rem] capitalize tracking-tighter m-4 font-semibold" href="#">Customer support</a>
                <a className="text-[1.2rem] capitalize tracking-tighter m-4 font-semibold" href="#">contact us</a>
                <a className="text-[1.2rem] capitalize tracking-tighter m-4 font-semibold" href="#">Order status</a>
                <a className="text-[1.2rem] capitalize tracking-tighter m-4 font-semibold" href="#">Warranty</a>
                <a className="text-[1.2rem] capitalize tracking-tighter m-4 font-semibold" href="#">Repair status</a>
                <a className="text-[1.2rem] capitalize tracking-tighter m-4 font-semibold" href="#">Returns</a>
                <a className="text-[1.2rem] capitalize tracking-tighter m-4 font-semibold" href="#">Shipping</a>
                <a className="text-[1.2rem] capitalize tracking-tighter m-4 font-semibold" href="#">eGift cards</a>
                <a className="text-[1.2rem] capitalize tracking-tighter m-4 font-semibold" href="#">Order FAQs</a>
                <a className="text-[1.2rem] capitalize tracking-tighter m-4 font-semibold" href="#">Dealer Locator</a>
                <a className="text-[1.2rem] capitalize tracking-tighter m-4 font-semibold" href="#">cookie preferences</a>
            </div>
        </div>
    </div>
}