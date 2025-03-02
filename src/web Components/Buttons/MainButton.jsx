export const MainButton =({text, bg, color, paddingLR, bgAfter})=> {
       return <button className={`group w-full ${bg ? `bg-${bg}` : "bg-[#cd4c1d]"} relative z-40 overflow-hidden max-w-56 pt-2 pb-2 ${paddingLR? "pl-2 pr-2": "pl-0 pr-0"} uppercase cursor-pointer font-bold before:-skew-x-[15deg] text-[1rem] origin-left before:absolute before:z-0 before:transition-all before:duration-750 before:ease-in-out ${bgAfter? `before:bg-[#cd4c1d]`: "before:bg-black"} before:top-0 before:-left-4 before:h-full before:w-0 hover:before:w-[132%]`}>
        <span className={`relative z-20 ${color? `text-${color}`: "text-white"} ${color? "group-hover:text-white": `group-hover:text-${color}`}`}>{text}</span>
        </button> 
}