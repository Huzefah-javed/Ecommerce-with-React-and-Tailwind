export const ProductLoading = ({productPage})=> {
    return(
        [...Array(6)].map((_, index)=>{
            return(<div key={index} className={` h-fit flex flex-col ${productPage? "w-full": "md:w-72 w-56"} cursor-pointer border-[0.25px] border-[#f7f7f6] border-solid product-box-shadow `} >
                    <div className="bg-[#d7d7d7] h-72 w-auto">
                    </div>
                    <div className="p-2">
                           <div className="flex justify-between items-center">
                               <p className="w-8 h-4 p-0.5 -skew-x-12 bg-[#e6e6e6]"></p>
                               <div className="flex">
                                   
                                       <div className="size-8 ml-2 bg-[#d7d7d7]"></div>
                                       <div className="size-8 ml-2 bg-[#d7d7d7]"></div>
                                       <div className="size-8 ml-2 bg-[#d7d7d7]"></div>
                                   
                               </div>
                   </div>

                           <p className="h-2 w-36 bg-[#d7d7d7]  py-3 rounded-2xl my-8"></p>
                           <p className="h-2 w-16 bg-[#d7d7d7]  py-3 rounded-2xl my-8"></p>
                           
                           <div className="starMain flex items-center mt-8 mb-4">
                               <div className="stars flex">
                           {[...Array(5)].map((_, index) => {
                               return(
                                   <svg
                                   className="fill-[#d7d7d7] w-3 mx-[0.12] stroke-1 stroke-none"
                                   viewBox="0 0 50 50"
                                   >
                               <polygon points="25,2 32,18 49,18 35,29 40,46 25,36 10,46 15,29 1,18 18,18" />
                                   
                               </svg>
                               )
                           })}
                       </div>                            
                       <div className="line h-[0.06rem] grow bg-[#16161645]"></div>
                       </div>                            

                       </div>      
               </div>
               
            )
        })
    )
}