import { useQuery } from "@tanstack/react-query"
import { singleProductDetail } from "../Api data/ProductDataFetch"
import { useParams } from "react-router";
import { MainButton } from "../web Components/Buttons/MainButton";

export const ProductDetailPage =()=> {

    const { id } = useParams();
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['productDetail', id],
        queryFn: ()=>singleProductDetail(id)
    })

   if (isLoading) {
        return <h1>loading...</h1>
   }

   if (isError) {
        return <h1>{error}</h1>
   }
   console.log(data)
    return <div className="p-4">
            <div className="heroSection h-screen flex items-start justify-evenly mt-32">
                <div className="heroSection__images h-full w-full  flex justify-center items-center"><img className="h-full flex justify-center items-center" src={data.thumbnail} alt="Product image" /></div>
                <div className="heroSection__info flex basis-[40rem] justify-start flex-col items-start">
                    <p className="p-0.5 -skew-x-12 bg-black text-[0.75rem] flex justify-center items-center uppercase text-white font-extrabold">
                        {data.brand || "No brand"}
                    </p>
                    <h1 className="text-4xl font-bold text-black my-4">{data.title}</h1>
                     
                     <div className="flex">
                     {[...Array(5)].map((_, index) => {
                          const ratingData = data.rating;
                               return (
                                     <svg
                                       key={index}
                                       className={`${ratingData >= index + 1 || (ratingData - index) < 1 && ratingData - index > 0 ? "fill-black" : "fill-[#ffffff]"} w-4 mx-[0.12] stroke-1 stroke-black`}
                                       viewBox={`${(ratingData - index) < 1 && (ratingData - index) > 0 ? "0 0 24 24" : "0 0 50 50"}`}
                                         >
                                       {(ratingData - index) < 1 && (ratingData - index) > 0 ? (
                                         <path d="M22 9.74l-7.19-.62L12 2.5 9.19 9.13 2 9.74l5.46 4.73-1.64 7.03L12 17.77l6.18 3.73-1.63-7.03L22 9.74zM12 15.9V6.6l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.9z" />
                                         ) : (
                                         <polygon points="25,2 32,18 49,18 35,29 40,46 25,36 10,46 15,29 1,18 18,18" />
                                         )}
                                         </svg>
                                 );
                              })}
                              <p className="ml-3 underline text-[0.85rem]">{data.rating}({data.reviews.length})</p>
                     </div>
                     <p className="text-3xl py-4">${data.price} <span className="text-[1rem]">USD</span></p>
                     <p className= "py-4 font-sans">{data.description}</p>

                     <div className="size">
                        <h1 className="text-[#151515] text-2xl py-3 font-sans">size</h1>
                        <div className="buttons flex gap-2">
                            <button className="border-[0.5px] border-[#212121] p-3 transition-all duration-500 hover:bg-black hover:text-white">Depth: {data.dimensions.depth}cm</button>
                            <button className="border-[0.5px] border-[#212121] p-3 transition-all duration-500 hover:bg-black hover:text-white">Width: {data.dimensions.width}cm</button>
                            <button className="border-[0.5px] border-[#212121] p-3 transition-all duration-500 hover:bg-black hover:text-white">Height: {data.dimensions.height}cm</button>
                        </div>
                     </div>

                     <div className="cartButtons my-8 w-full flex justify-start gap-4 items-stretch">
                        <button className="flex gap-2 justify-center items-center border-[0.5px] px-4"><span className="text-2xl">-</span>1<span className="text-2xl">+</span></button>
                        <div className="grow-[2]"><MainButton text="Add to bag" paddingLR={true}/></div>
                        <button className="border-[0.5px] px-4">Buy Local</button> 
                     </div>
                </div>
            </div>
            <div className="detailSections mt-20 px-12">
                <div className="detailSection-info">
                    <h1 className="text-3xl font-extrabold text-black my-4">Product Details</h1>
                    <hr className="border-[#1a1a1a93]"/>
                    <div className="info px-24">
                        <p className="text-[1.2rem] my-16">{data.description}</p>
                        <div className="little-info w-full flex justify-between gap-4  flex-wrap">
                            <span className=" m-4 flex justify-center items-center flex-col grow  gap-4">
                            <h2 className="font-bold">Stock left</h2>
                            <p className="text-[0.8rem]">{data.stock}</p>
                            </span>
                            <span className=" m-4 flex justify-center items-center flex-col grow gap-4">
                            <h2 className="font-bold">Return policy</h2>
                            <p className="text-[0.8rem]">{data.returnPolicy}</p>
                            </span>
                            <span className=" m-4 flex justify-center items-center flex-col grow gap-4">
                            <h2 className="font-bold">product Warranty</h2>
                            <p className="text-[0.8rem]">{data.warrantyInformation}</p>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="Tech-specs">
                    <h1 className="text-3xl font-extrabold text-black my-4">Tech Specs</h1>
                    <hr className="border-[#1a1a1a93]"/>
                    <div className="specs px-24">
                        <div className="specsInfo flex justify-center gap-0 my-16">
                           <span className="grow flex flex-col gap-4">
                             <h2 className="bg-[#ebebeb] p-1 font-bold">Product weight</h2>
                             <p className="text-[0.8rem]">{data.weight}KG</p>
                           </span>
                           <span className="grow flex flex-col gap-4">
                             <h2 className="bg-[#ebebeb] p-1 font-bold">Product creation</h2>
                             <p className="text-[0.8rem]">{new Date(data.meta.createdAt).getDate()}-{new Date(data.meta.createdAt).getDay()}-{new Date(data.meta.createdAt).getFullYear()}</p>
                           </span>
                           <span className="grow flex flex-col gap-4">
                             <h2 className="bg-[#ebebeb] p-1 font-bold">More Info</h2>
                             <p className="text-[0.8rem]"><img className="h-16" src={data.meta.qrCode}></img></p>
                           </span>
                        </div>
                    </div>
                </div>
                <div className="Reviews">
                    <h1 className="text-3xl font-extrabold text-black my-4 flex items-baseline gap-2">Reviews <div className="flex">
                     {[...Array(5)].map((_, index) => {
                          const ratingData = data.rating;
                               return (
                                     <svg
                                       key={index}
                                       className={` ${ratingData >= index + 1 || (ratingData - index) < 1 && ratingData - index > 0 ? "fill-black" : "fill-[#ffffff]"} w-4 mx-[0.12] stroke-1 stroke-black font-light`}
                                       viewBox={`${(ratingData - index) < 1 && (ratingData - index) > 0 ? "0 0 24 24" : "0 0 50 50"}`}
                                         >
                                       {(ratingData - index) < 1 && (ratingData - index) > 0 ? (
                                         <path d="M22 9.74l-7.19-.62L12 2.5 9.19 9.13 2 9.74l5.46 4.73-1.64 7.03L12 17.77l6.18 3.73-1.63-7.03L22 9.74zM12 15.9V6.6l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.9z" />
                                         ) : (
                                         <polygon points="25,2 32,18 49,18 35,29 40,46 25,36 10,46 15,29 1,18 18,18" />
                                         )}
                                         </svg>
                                 );
                              })}
                              <p className="ml-3 underline font-light text-[0.85rem]">{data.rating}({data.reviews.length})</p>
                     </div></h1>    
                    <hr className="border-[#1a1a1a93]" />
                    <div className="review-details py-24">

                              <h1 className="rating h-20rem w-full flex justify-center items-center flex-col pb-16">
                                <div className="text-4xl py-4 font-bold">{data.rating}</div>
                                <div className="flex">
                     {[...Array(5)].map((_, index) => {
                          const ratingData = data.rating;
                               return (
                                     <svg
                                       key={index}
                                       className={` ${ratingData >= index + 1 || (ratingData - index) < 1 && ratingData - index > 0 ? "fill-orange-600" : "fill-[#ffffff]"} w-6 mx-[0.12] stroke-1 stroke-orange-600 font-light`}
                                       viewBox={`${(ratingData - index) < 1 && (ratingData - index) > 0 ? "0 0 24 24" : "0 0 50 50"}`}
                                         >
                                       {(ratingData - index) < 1 && (ratingData - index) > 0 ? (
                                         <path d="M22 9.74l-7.19-.62L12 2.5 9.19 9.13 2 9.74l5.46 4.73-1.64 7.03L12 17.77l6.18 3.73-1.63-7.03L22 9.74zM12 15.9V6.6l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.9z" />
                                         ) : (
                                         <polygon points="25,2 32,18 49,18 35,29 40,46 25,36 10,46 15,29 1,18 18,18" />
                                         )}
                                         </svg>
                                 );
                              })}
                             </div>
                              <div className="my-2 text-[#06040491]">{data.reviews.length} Reviews</div>
                              </h1>
                              <div className="reviews flex justify-center flex-col px-24">
                                   {data.reviews.map((review, _)=>{
                                    return(<>
                                     <span className="my-8 flex justify-between">
                                        <div className="profile flex gap-4">
                                            <div className="profilePic flex flex-col justify-center items-center  text-white h-12 w-12 rounded-full bg-[#6a6c77]">{review.reviewerName.slice(0,1)}</div>
                                            <div className="flex flex-col gap-2">
                                                <p className="name">{review.reviewerName}</p>
                                                <div className="flex">
                                                    {[...Array(5)].map((_, index) => {
                                                        const ratingData = data.rating;
                                                            return (
                                                                    <svg
                                                                    key={index}
                                                                    className={` ${ratingData >= index + 1 || (ratingData - index) < 1 && ratingData - index > 0 ? "fill-orange-600" : "fill-[#ffffff]"} w-3 mx-[0.12] stroke-1 stroke-orange-600 font-light`}
                                                                    viewBox={`${(ratingData - index) < 1 && (ratingData - index) > 0 ? "0 0 24 24" : "0 0 50 50"}`}
                                                                        >
                                                                    {(ratingData - index) < 1 && (ratingData - index) > 0 ? (
                                                                        <path d="M22 9.74l-7.19-.62L12 2.5 9.19 9.13 2 9.74l5.46 4.73-1.64 7.03L12 17.77l6.18 3.73-1.63-7.03L22 9.74zM12 15.9V6.6l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.9z" />
                                                                        ) : (
                                                                        <polygon points="25,2 32,18 49,18 35,29 40,46 25,36 10,46 15,29 1,18 18,18" />
                                                                        )}
                                                                        </svg>
                                                                );
                                                            })}
                                                            </div>
                                            <p className="text-[1.1rem] font-sans">{review.comment}</p>
                                            </div>
                                        </div>
                                            <p className="text-[0.8rem]">{new Date(review.date).getDate()}-{new Date(review.date).getDay()}-{new Date(review.date).getFullYear()}</p>
                                    </span> <hr className="border-[#1a1a1a53]" /></>)
                                   })}
                              </div>
                           </div>
                </div>
            </div>
         </div>
}