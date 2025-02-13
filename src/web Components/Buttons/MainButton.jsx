export const MainButton =({text})=> {
       return <button className="bg-[#cd4c1d] relative z-40 overflow-hidden max-w-56 pt-2 pb-2 pl-0 pr-0 uppercase cursor-pointer text-white font-bold before:-skew-x-[15deg] text-[1rem] origin-left before:absolute before:z-0 before:transition-all before:duration-750 before:ease-in-out before:bg-black before:top-0 before:-left-4 before:h-full before:w-0 hover:before:w-[120%]">
        <span className="relative z-20">{text}</span>
        </button> 
}