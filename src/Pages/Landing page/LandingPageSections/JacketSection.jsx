import { MainButton } from "../../../web Components/Buttons/mainButton"

export const JacketSection =()=> {
    return <>
       <div className="h-screen w-full relative flex items-center bg-cover bg-center bg-[url(https://blackdiamond-cms.zaneray.com/cms/images/Z5qWIpbqstJ9-A_x_Access_Down_Hoody_Womens_Homepage_Hero_2880x1620px.jpg?auto=format%2Ccompress&w=2400&h=1350)]">
         <div className="flex flex-col mt-10 ml-10 max-w-2xl">
                    <h1 className="text-6xl font-extrabold font-sans text-white relative z-50">Everyday Down</h1>
                    <p className="text-2xl font-medium font-sans pt-10 pb-10 text-white relative z-50">The all new Access Down 1.0</p>
                    <MainButton text="shop now"/>
                </div>
       </div>
    </>
}