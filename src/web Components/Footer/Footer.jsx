import { useEffect, useRef, useState } from "react"
import { CiLocationArrow1 } from "react-icons/ci"
import { FaFacebookF, FaInstagram, FaLocationDot, FaRegEnvelope, FaTwitter, FaYoutube } from "react-icons/fa6"
import { IoMdGift } from "react-icons/io"
import { MdHomeFilled } from "react-icons/md"
import { MainButton } from "../Buttons/MainButton"

export const Footer =()=>{
        const[showGraph, setShowGraph] = useState(false)
        const graphElem = useRef(null)

        
        useEffect(()=>{
        const handleScroll =()=>{
            
            if (graphElem.current.getBoundingClientRect().top - window.innerHeight < -50 && !showGraph){
                setShowGraph(true)
            }
        }

            document.addEventListener("scroll", handleScroll)
            return () => {
                document.removeEventListener("scroll", handleScroll)
            }
        },[])
        

          
        const services = [
            {
                heading: "Find A Local Dealer",
                para: "Support Your Local Shop",
                icon: <FaLocationDot />
        },{
            heading: "Free Economy Shipping",
            para: "On Orders Over $99",
            icon: <MdHomeFilled />
        },
        {
            heading:"eGift Cards",
            para: "The perfect gift for any outdoor enthusiast.",
            icon: <IoMdGift />
        },
        {
            heading:"Stay on Track",
            para: "Subscribe to hear about the latest products, stories, events & more.",
            icon: <FaRegEnvelope />
        }
    ]


    const links = [
        {
            Heading: "Order",
            Data: ["Order Status","Warranty/Repairs","Returns","Shipping","eGift Cards","Order FAQs"]
        },
        {
            Heading: "Product",
            Data: ["Product Recalls","JetForce Firmware Update","Beacon Firmware Update","Product FAQ", "Product User Manuals" ,"Declarations of Conformity"]
        },
        {
            Heading: "Partners",
            Data: ["Corporate Sales","Pro Program","Military Discount","Educational Discount","Global Distribution Partners","BD Affiliate Program"]
        }
    ]
    return <div className="bg-black p-6 pt-10 relative z-20">

                <div className="service text-white flex w-full justify-evenly items-center mt-8 mb-28">
                    {  
                        services.map((service, index) => {
                            return (<div key={index} className="max-w-64 flex justify-center items-center">
                                <div className="text-4xl mr-6">{service.icon}</div> 
                                <div>
                                <h1 className="text-2xl font-extrabold font-sans">{service.heading}</h1>
                                <p className="py-2">{service.para}</p>
                                    </div>       
                            </div>)
                        })
                    }
                </div>
                <div ref={graphElem} className={`graph mb-20 relative before:h-full before:origin-right before:absolute before:top-0 before:right-0 before:bg-black before:w-full ${showGraph? "before:scale-x-0":"before:scale-x-100"} before:transition-all before:duration-[2s] before:ease-in-out`}>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 2915.6 120" xml:space="preserve" data-v-ca0dc9d4=""><path fill="none" stroke="#FFFFFF" stroke-width="3" stroke-miterlimit="10" d="M1,116.8h118.7c21.6-9.6,26.3-12.9,44.3-22.3c15.3-8,16.9-19.3,20.3-23.4c3.5-4.1,4.8-6,6.5-6.7
		c2.1-0.8,4-2.2,5.5-4c1.4-2,3.4-3.5,5.7-4.5c2-0.6,3.6-1.9,4.8-3.7c0.8-1.5,2.5-4.8,4.8-3.5c1.4,0.7,2.8,1.6,4.1,2.5
		c1.1,0.9,2.1,1.8,3.1,2.6s2.4,1.9,3.2,2s3.4,1.9,4.4,2.2c0.9,0.2,3.6-0.8,4.3-1.3c0.9-0.5,2-0.8,3.1-0.9c0.7,0,1.8-1.2,2.8-1.3
		c1-0.1,2.9,0.2,3.8-0.4s1.7-2.8,4-2.8s5.4-1.1,8.9,0.2s5.2,2.8,8.3,3.7c4.2,1.2,8.1,3,11.8,5.3c4.1,2.8,7.9,6,11.3,9.5
		c4.6,4.6,10.1,8.9,13.4,9.8c3.3,0.9,5.1-0.2,6.6-0.7c1.5-0.4,4-1.2,5.5-0.2c1.5,1,3.2,1.7,4.9,0.5s2.2-1.7,3.1-1.8s1.8,1,2.9,0.5
		c2-0.6,3.8-1.6,5.3-2.9c1.9-1.8,3.4-2.6,4.5-2.5c1.7,0.3,3.5,0.5,5.2,0.6c1.3,0.2,2.6-0.5,3.1-1.8c0.7-1.7,1.7-3.1,5.9-5
		c4.1-1.9,7.6-3.2,8.6-3.9s1.7-1.1,3.1-0.2c1.5,1,3.3,1.5,5.1,1.4c1.7-0.2,3.5,0.1,4.7-1s1.8-2,3-1s2.3,1.6,3.3,1.5s0.9-0.5,1.7-1
		c1.2-0.8,2.5-1.5,3.9-2c1.8-0.5,3.5-1.2,5.1-2.1c1.7-1.1,2-2.3,4-3.1c2.5-0.9,4.9-2.1,7.1-3.6c2-1.5,2.9-1.7,6-3.9s4.4-3.3,5.2-3.4
		s1-2,1.9-2.6c1.4-1.1,3.2-1.3,4.8-0.5c1.3,0.6,2.8,1.1,4.3,1.2c1.2,0.2,2.2,0.8,2.9,1.8c0.8,1,2,3,3.8,3.8s2.3,0.4,3.5-1.2
		s2.5-2.2,3.1-1.9s1.6-0.4,2.4-0.9c1-0.5,2.2-0.7,3.3-0.6c0.7,0.2,1.7-1.2,2.6-2.3s1.9-2.4,3.3-2c0.9,0.2,1.6,0.6,2.3,1.2
		c0.8,0.6,1.7,0.9,2.6,0.9c1.1,0,2.1-0.4,3-1c0.9-0.9,2-1.7,3.1-2.3c1.3-0.5,1.7-1.3,2.9-1.4s2.7-0.8,5.8-3.5s4.5-4.3,6.1-5.3
		s1.4-1.9,2.7-2.6s3.7-1.8,5-1.4c1.1,0.4,2.3,0.4,3.4-0.1c1.5-0.5,1.8-1.7,4.2-1.1c1.8,0.6,3.8,0.9,5.7,0.9c1.3-0.1,3,0,3.6-1
		s1-2.4,3.1-1.5s4.2,1.1,4.8,2c0.6,0.9,1.5,1.7,2.4,2.3c0.9,0.4,2.4,0.6,3.6,1.2s3.5,1.6,5.2,0.7c1.6-0.7,3.3-0.8,4.9-0.2
		c0.8,0.3,3.8,1.4,5.6,1c1.4-0.3,2.9-0.3,4.3,0.1c2.2,0.4,4.4,0.6,6.7,0.7c1.3,0,5.1-0.2,6.1,0.5c1,0.7,2.8,2.6,3.7,2
		c0.7-0.6,1.6-0.9,2.5-1c1.2,0,2.8-1.1,5.2-1s3.6-0.3,5.1-0.2c1.5,0.1,3.3-0.1,4,0.8c0.9,0.9,2,1.5,3.1,1.8c0.9,0.3,2.1,0,2.7,0.7
		s4.4,2.3,7.2,2.5c2.4,0.3,4.8,0.2,7.1-0.4c1.6-0.5,2.2-1.2,3.3-0.9s2.9,0.5,4,1.5s1.7-0.3,3.1-1.4c1.9-1.5,3.4-3.4,4.5-5.5
		c0.7-1.7,0.3-2.8,2.2-2.2c1.7,0.4,3.4,1.1,4.9,2.1c1.6,1.1,1.9,0.3,3.5,1.2c1.7,0.9,2.1,1.2,3.8,2c1.7,0.8,2.5,1.3,6.3,0.9
		c2.2-0.3,4.4-0.5,6.6-0.4c2.4,0.1,4.7-0.7,6.6-2.2c2.3-2,2.2-2.8,3.4-3s2.4-0.1,3.3-0.7s1.6-1.5,2.7-1.1c1.4,0.5,2.8,1.1,4.2,1.8
		c0.7,0.4,3.7,0.6,5.1,2c1.7,1.7,3.5,3.3,5.4,4.8c1.5,1,2.2,1.3,2.4,0.2s2.7,0.5,5.2,1.9s3.3,2.8,4.9,3.4c1.3,0.3,2.4,1.1,3.1,2.2
		c0.6,1,0.7,2,2.8,2.3s2.9,1,3.7,0.2s1-2,2.4-1.4c1.4,0.5,2.8,1.1,4.1,1.7c1.2,0.7,2.5,1,3.9,1c0.8-0.1,1-0.4,3.2,0.7
		s3.9,0.9,4.9,1.8s2.2,2.9,3,3.1s1.8,0.1,5.4-0.9c1.9-0.5,3.7-1.1,5.5-1.8c1.6-0.5,3-1.7,5-3.7s2.5-2.4,4.1-2.8s2.2-1.8,3.6-2.1
		c1-0.2,2.1-0.3,3.2-0.2c1.4,0,0.7-0.2,2.1-1.7s1.3-3.5,2.9-2.1s2.2,1.3,3,3.8s1,3.5,1.8,2.5s2.8-2.6,3.9-4c1-1.1,2.2-2,3.5-2.7
		c1.6-1,3.1-2.2,4.3-3.6c0.9-1.3,2.1-2.3,3.5-3.1c1.2-0.7,2.9-3.1,4.9-2.9s4.7,0.8,6.3,0.4s5.2-1.2,8-3.6s4.8-3.5,5.2-5.2
		c0.6-1.6,1.6-2.9,2.9-4c0.8-0.6,2.3-0.1,2.5-0.8s1.2-3,2.6-3.2c1.3-0.1,2.5,0.1,3.7,0.5c0.9,0.2,1.9-1.5,3.5-1.4s2,0.6,2.2,0.9
		s0.4,2.1,0.9,1.6s1.5-1.6,3-0.1s3.9,4,5.9,5.1s4,2,4.8,2.8c1.1,1.1,2.3,2.1,3.7,3c1.5,1,3,2.3,4.2,1.7s2.5-2.3,3.6-2.2
		c1.1,0.3,2.3-0.3,2.8-1.4c0.9-1.5,1.4-2.3,2.6-2.3c2.2-0.1,4.4,0.1,6.5,0.7c3,0.9,5.8,2.3,8.3,4.1c2.9,2,3.9,3,6.9,3.6
		c1.7,0.5,3.6,0.3,5.1-0.6c1.2-0.5,1.8-0.1,3,1s7.8,7.8,11.3,9.7s4.7,2.9,5.1,3s2.5-0.3,5.2-0.5s9.4-0.8,11.9,0.5
		c1.8,0.9,3.7,1.6,5.6,2c1.4,0.4,2.3,0.5,2.9,1.2s1.6,1,3.2,1.3s4.8,1.6,5.2,0.6s0.7-3.1,1.8-2c1.1,1,2.4,1.9,3.8,2.5
		c1.3,0.6,2.5,0.7,3.3,1.6c1.1,1.1,2.4,2,3.8,2.8c1.5,0.9,3.5,0.3,4.3,2s1.7,3.6,3.9,4s5.7,0.7,7.2,2.5s1.7,3.6,2.4,4.4
		s7.8,4.7,12.5,6.4s9.9,4,11.7,3.7c1.4-0.3,2.9,0,4.2,0.7c1.7,0.7,2.1,1.4,3.9,1c1.9-0.7,3.9-0.7,5.8,0c2.4,0.8,3.9,1.2,4.8,2
		s1.1,0.5,3,0.7s2.2-0.3,5.5,1.5s4.3,4.1,5.8,4.9s4.6,0.9,6-0.4s2.4-2.5,4-1.6s1.7,0.8,3.4,0.1s1.7-2.5,4.6-1.2s5.6,3.8,6.5,4
		c2.1,0.1,4.1,0.7,5.9,1.8c2.6,1.7,4.8,4.4,6.6,4.9s4.5-0.3,6.2,1.2c3.4,3.2,8,4.8,12.7,4.5c2.8-0.3,4.5-1,6.5,0c1.9,1,3.6,2.2,5.6,2
		c2.8-0.1,5.5,0.3,8.2,1.1c2.6,0.9,5.1,2.8,11.2-0.9c6.1-3.7,7.1-4.6,10.3-5.7s5.9-2.3,7.8-1.7c1.9,0.6,3.7,1.5,5.9,2.3
		c2.2,0.7,4.7,0.2,6.6,1.2c1.9,0.9,3.4,2.1,6,2.9c2,0.8,4.2,1.1,6.3,1c2.4-0.1,4.9,1.2,6.6,2.2s4.2,2.9,6.6,4.4
		c2.4,1.6,5.2,2.3,8,2.3c1.9,0,3.8,0.3,5.6,1.1c2.6,0.6,5.2,0.9,7.8,1c3.9,0.1,7.7,0.9,11.4,2.3c4.8,1.8,7.2,3.3,10.7,3.6
		s8.2,1.1,9.9,2.1l1728.1-0.1" ></path></svg>
                </div>
                <div className="links-main w-full flex justify-between ">
                    <div className="max-w-[35rem] flex flex-col justify-start">
                        <img className="w-72" src="main logo.png" alt="main logo" />
                    <p className="py-4 text-white">Here at Black Diamond it's all about climbing and skiing. We share the same experiences that you do on rock, ice and snow and these experiences push us to make the best gear possible for our worldwide family of climbers and skiers.</p>
                    <div className="text-white flex justify-between pt-8 max-w-[28rem]">
                        <a className="hover:text-amber-700 transition-all duration-500 ease-in-out" href="#">Contact Us</a>
                        <a className="hover:text-amber-700 transition-all duration-500 ease-in-out" href="#">Who we are</a>
                        <a className="hover:text-amber-700 transition-all duration-500 ease-in-out" href="#">Careers</a>
                        <a className="hover:text-amber-700 transition-all duration-500 ease-in-out" href="#">Retail Stores</a>
                    </div>
                    <div className="text-white flex justify-between pt-8 max-w-[22rem]">
                        <a className="text-4xl hover:text-amber-700 transition-all duration-500 ease-in-out" href="#"><FaInstagram /></a>
                        <a className="text-4xl hover:text-amber-700 transition-all duration-500 ease-in-out" href="#"><FaYoutube /></a>
                        <a className="text-4xl hover:text-amber-700 transition-all duration-500 ease-in-out" href="#"><FaFacebookF />                        </a>
                        <a className="text-4xl hover:text-amber-700 transition-all duration-500 ease-in-out" href="#"><FaTwitter /></a>
                    </div>
                        <div className="flex justify-center w-[28rem] mt-12">
                            <input className="h-full border-2 border-solid border-white bg-none text-white outline-none p-4 grow-[1] focus:bg-black" placeholder="you@email.com" type="email" name="email" id="email" />
                            <MainButton text="join us" bg="white" color="black" paddingLR={true}/>
                        </div>
                    </div>
                    <div>
                        <div className="text-white">
                            <h1 className="text-2xl font-bold font-sans mb-8">Customer Service</h1>
                                <div className="flex justify-evenly items-center">
                                        {
                                            links.map((link, index)=>{
                                                return (
                                                    <div key={index} className="ml-4">
                                                        <h1 className="text-[1.1rem] text-white font-bold">{link.Heading}</h1>
                                                        {link.Data.map((singleData, DataId)=>{
                                                           return <p key={DataId} className="text-[#ffffff97] cursor-pointer mt-[1.5rem] hover:text-amber-700 transition-all duration-500 ease-in-out">{singleData}</p>
                                                        })}
                                                    </div>
                                                )
                                            })
                                        }
                                </div>  
                            
                        </div>
                    </div>
                </div>

    </div>
}