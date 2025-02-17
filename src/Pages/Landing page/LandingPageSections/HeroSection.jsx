import { MainButton } from "../../../web Components/Buttons/mainButton"


export const HeroSection =({bg_link, heading, para, button_text,})=> {
    return <>
       <div style={{ backgroundImage: `url(${bg_link})` }} className={`h-screen w-full relative flex justify-center flex-col bg-cover bg-center before:absolute before:z-10 before:h-full before:w-full before:bg-black before:opacity-50`}>
        <div className="flex flex-col mt-10 ml-10 max-w-2xl">
            <h1 className="text-6xl font-extrabold font-sans text-white relative z-50">{heading}</h1>
            <p className="text-2xl font-medium font-sans pt-10 pb-10 text-white relative z-50">{para}</p>
            <MainButton text={button_text}/>
        </div>

       </div>
    </>
}
