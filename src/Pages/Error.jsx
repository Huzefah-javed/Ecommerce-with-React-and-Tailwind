import { NavLink } from "react-router"
import { MainButton } from "../web Components/Buttons/MainButton"

export const Error = ()=> {
    return(<div style={{background: "url(/public/ErrorPage-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        
    }} className="h-dvh w-full relative flex flex-col items-center justify-center before:bg-[#00000056] before:absolute">
            <h1 className="text-9xl text-white font-extrabold mb-8">404</h1>
            <h1 className="text-white text-4xl text-shadow my-4">please check your internet Connection before try again</h1>
            <p className="text-white text-2xl text-shadow">The page you are looking for does not exist.</p>
            <NavLink to="/" className="w-[10rem] my-8"><MainButton text="Home"/></NavLink>
    </div>
    )
}