import { useState } from "react"
import { GrClose } from "react-icons/gr"

export const HeaderExperienceDetail =()=> {
                const [singleLinkIndex, SetSingleLinkIndex] = useState(0)
                const hoverLink = ["who we are", "Athlete", "Ambassadors", "Access and Inclusions", "SustainAbility", "Find A Dealer", "BD retail store", "Hydra Demo Center"]

                const handleHoverEffect =(id)=> {
                    SetSingleLinkIndex(id)
                }

    return   <div className={`fixed -top-0 left-0 h-dvh w-dvw bg-black p-8 transition-all duration-300 ease-in-out visible opacity-100 z-50 overflow-y-scroll`}>
                    <header className=" w-full h-24 flex justify-between items-center fixed top-0 bg-black pt-4">
                    <img className="w-10" src="logo-white.png" alt="logo" />
            
                    <button className=" h-fit w-fit text-[1.4rem] box-shadow p-2 cursor-pointer mr-10 bg-white"><GrClose /></button>
                    </header>
                    <h1 className={`text-2xl text-white capitalize font-bold font-sans transition-all duration-200 ease-in-out mt-20 mb-8`}>Community</h1>
                    <div className="ml-8 relative">
                            <div className={`w-0.5 h-4 bg-[#cd4c1d] absolute left-0 mt-[0.4rem] mb-[0.4rem]`} style={{ top:  `${singleLinkIndex * (singleLinkIndex ? 2.8 : 0)}rem`}}></div>
                        {hoverLink.map((singleLink, index)=>{
                            return (<div key={index} onMouseEnter={()=>handleHoverEffect(index)} className="group text-white cursor-pointer text-[1.2rem] capitalize tracking-tighter m-4 font-medium">{singleLink}</div>)
                        })}
                    </div>
                    </div>
}