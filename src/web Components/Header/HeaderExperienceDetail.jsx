import { useState } from "react"
import { GrClose } from "react-icons/gr"

 const HeaderExperienceDetail =({experienceMenu = false , setExperienceMenu})=> {
                const [singleLinkIndex, SetSingleLinkIndex] = useState(0)
                const handleCloseExperienceMenu =()=> {
                    setExperienceMenu(false)
                }
                const hoverLink = ["who we are", "Athlete", "Ambassadors", "Access and Inclusions", "SustainAbility", "Find A Dealer", "BD retail store", "Hydra Demo Center"]
                const hoverContent = [
                    {
                        HeadingText: "bd heritage",
                        paraText: null,
                        
                    },{
                        HeadingText: "Discover the bd team",
                        paraText: null,
                        
                    },{
                        HeadingText: "Weekend warrior who charged",
                        paraText: null,
                        
                    },{
                        HeadingText: "building community",
                        paraText: null,
                        
                    },{
                        HeadingText: "Corporate responsibility",
                        paraText: "The goals in which goals are accomplished is as important as achieving them at all",
                        
                    },{
                        HeadingText: "support your local shop",
                        paraText: null
                        
                    },{
                       HeadingText: "visit our storefront locations",
                        paraText: "A List of BD retail store locations, hours and contact information"
                    },{
                        
                        HeadingText: "Experience the hydra",
                        paraText: "Demo the events and locations where you can test drive the hydra ice tool"
                    }
                ]

                const handleHoverEffect =(id)=> {
                    SetSingleLinkIndex(id)
                }
                return   <div className={`fixed -top-0 left-0 h-dvh w-dvw p-8 bg-black transition-all duration-300 ease-in-out ${experienceMenu? "opacity-100 z-50 visible": "opacity-0 -z-50 invisible"} overflow-y-scroll`}>
                        <div style={{background: "url('logo bg.png')", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundClip:"center"}}>

                    <header className=" w-full h-24 flex justify-between items-center fixed top-0 z-[9] bg-black pt-4">
                    <img className="w-10" src="logo-white.png" alt="logo" />
            
                    <button onClick={()=>handleCloseExperienceMenu()} className=" h-fit w-fit text-[1.4rem] box-shadow p-2 cursor-pointer mr-10 bg-white"><GrClose /></button>
                    </header>
                    <h1 className={`text-2xl text-white capitalize font-bold font-sans transition-all duration-200 ease-in-out ${experienceMenu? "mt-20": "mt-36"} mb-8`}>Community</h1>
                    <div className="main-body flex">
                    <div className="ml-8 relative w-fit">
                         <div className={`w-0.5 h-4 bg-[#cd4c1d] absolute left-0 mt-[1.4rem] mb-[1.4rem]`} style={{ top:`${singleLinkIndex * (singleLinkIndex ? 2.8 : 0)}rem`}}></div>
                                 {hoverLink.map((singleLink, index)=>{
                                     return (<div key={index} onMouseEnter={()=>handleHoverEffect(index)} className="text-white cursor-pointer text-[1.2rem] capitalize tracking-tighter m-4 font-medium">{singleLink}</div>)
                                    })}
                    </div> 
                      <div className="mainHover-content h-[22rem] w-[30rem] ml-40 relative overflow-hidden">
                            {
                                hoverContent.map((singleContent, index)=>{
                                    return (<div key={index} className={`absolute top-0 left-0 h-[20rem] flex flex-col justify-evenly transition-all duration-[0.7s] ease-in-out${singleLinkIndex === index ? " opacity-100" : " top-[4rem] opacity-0 invisible"}`}>
                                        <h1 className="text-6xl break-words uppercase text-white font-extrabold">{singleContent.HeadingText}</h1>
                                        {singleContent.paraText? (<p className="font-sans text-white">{singleContent.paraText}</p>): ""}
                                        <button className="p-2 border-white text-white border-4 border-solid w-20 font-extrabold cursor-pointer ">Explore</button>
                                    </div>
                                    )
                                })
                            }
                      </div>
                    </div>
                    <h1 className={`text-2xl text-white capitalize font-bold font-sans transition-all duration-200 ease-in-out mt-20 mb-8`}>Content</h1>
                    </div>
                        </div>
}

export default HeaderExperienceDetail;