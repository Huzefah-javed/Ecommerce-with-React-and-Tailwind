import { Outlet } from "react-router"
import { Footer } from "../web Components/Footer/Footer"
import { Header } from "../web Components/Header/Header"

export const StructurePage =()=> {
    
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}