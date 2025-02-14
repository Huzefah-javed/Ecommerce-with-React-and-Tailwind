import { MainButton } from "../../../web Components/Buttons/mainButton"



export const HeroSection =()=> {
    return <>
       <div className="h-screen w-full relative flex justify-items-start flex-col bg-[url(https://blackdiamond-cms.zaneray.com/cms/images/Z6qDOJbqstJ9-c2c_JulesJimreivat_2-5-.jpg?auto=format%2Ccompress&rect=0%2C661%2C2800%2C1575&w=2400&h=1350)] bg-cover bg-top before:absolute before:z-10 before:h-full before:w-full before:bg-black before:opacity-40">
        <div className="flex flex-col mt-10 ml-10 max-w-2xl">
            <h1 className="text-6xl font-extrabold font-sans text-white relative z-50">Get Up to Get Down</h1>
            <p className="text-2xl font-medium font-sans pt-10 pb-10 text-white relative z-50">The BD Backcountry Collection has everything you need to go deep this winter.</p>
            <MainButton text="shop collection"/>
        </div>

       </div>
    </>
}
