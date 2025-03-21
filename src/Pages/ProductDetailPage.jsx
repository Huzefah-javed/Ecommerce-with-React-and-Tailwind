import { useQuery } from "@tanstack/react-query"
import { singleProductDetail } from "../Api data/ProductDataFetch"
import { NavLink, useParams } from "react-router";
import { MainButton } from "../web Components/Buttons/MainButton";
import { useEffect, useRef, useState } from "react";
import { addToCartData } from "../Store";
import { useDispatch, useSelector } from "react-redux";
import { FaCheckCircle } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ProductDetailPage =()=> {
  
  const dispatch = useDispatch()

  const[headerVisibility, setHeaderVisibility] = useState(false)
  const [productDetails, setProductDetails] = useState(null)
  const [addToCartNotify,setAddToCartNotify] = useState(false)
  const[lastPointScrollProductImg, setLastPointScrollProductImg] = useState(0)
  const[liveScrollProductImg, setLiveScrollProductImg] = useState(0)
  const productHeroSection = useRef(null)
  const productImgSec = useRef(null)
  
  const cartData = useSelector((state)=>state.ProductDetails.cartData)

     useEffect(()=>{
       const handleScrollHeader =()=> {
         if (productHeroSection.current) {

          console.log(productImgSec.current.scrollWidth, productImgSec.current.clientWidth , productImgSec.current.scrollLeft)
          if (productHeroSection.current.getBoundingClientRect().top <= 0 && productHeroSection.current.getBoundingClientRect().bottom <= 40) {
            setHeaderVisibility(true)
          }else{
            setHeaderVisibility(false)
          }
        }
      }
          document.addEventListener('scroll', handleScrollHeader)
         return ()=> document.removeEventListener('scroll', handleScrollHeader)
        
      
     },[])
  const { id } = useParams();
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['productDetail', id],
        queryFn: ()=>singleProductDetail(id)
      })
      
      useEffect(()=>{
        if (data) {
          setProductDetails({...data, quantity: 1})
          }
     },[data])

     useEffect(()=>{

      const handleProductScroll =()=> {
        setLiveScrollProductImg(productImgSec.current.scrollLeft)
        setLastPointScrollProductImg(productImgSec.current.scrollLeft + productImgSec.current.clientWidth)
      }

      if (productImgSec.current) {
        productImgSec.current.addEventListener("scroll", handleProductScroll)
        
      }
      return ()=> productImgSec.current?.removeEventListener("scroll", handleProductScroll)
     },[data])
     if (isLoading) {
       return <div className="h-dvh flex justify-center items-center"><div className="loader"></div></div>
      }
      
      if (isError) {
        return <h1>{error}</h1>
      } 

   const handleQuantity = (action)=> {
    if (action === "inc") {
        setProductDetails((prev)=>{

          return {...prev, quantity: prev.quantity + 1, price: parseFloat((Number(prev.price) / prev.quantity + Number(prev.price)).toFixed(2))}
        })
      }else{
        setProductDetails((prev)=>{
          return {...prev, quantity: prev.quantity - 1, price: parseFloat(Number(prev.price)-(Number(prev.price) / prev.quantity).toFixed(2))}
        })

    }
   }


   const handleAddToCart = (productDetails)=> {
    const itemExists = cartData.some((item) => item.id === productDetails.id);

    if (!itemExists) {
      dispatch(addToCartData(productDetails));
      console.log("Product Added");
      setAddToCartNotify(true);
      scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    } else {
      alert("Product already in cart");
   }
  }
   
  const handleCloseAddToCartNotify=()=>{
    setAddToCartNotify(false)
  }

  const handleImageScroll = (action) => {
    if (action === "right") {
      productImgSec.current.scrollBy({
        left: -productImgSec.current.scrollWidth / productDetails.images.length,
        behavior: "smooth",
      });
    } else {
      productImgSec.current.scrollBy({
        left: productImgSec.current.scrollWidth / productDetails.images.length,
        behavior: "smooth",
      });
    }
  };


        return(<>    {window.innerWidth> 769?<header className={`fixed top-0 ${headerVisibility? "z-20 opacity-100 visible": "-z-50 opacity-0 invisible"} transition-all duration-300 ease-in bg-white shadow-2xl overflow-hidden w-full h-16 flex justify-between px-6 py-12 items-center`}>
          <div className="product flex md:gap-2 lg:gap-4 items-center">
            <img className="productImg w-20" src={data.thumbnail} />
            <p className="font-bold md:text-[0.7rem] lg:text-[1.1rem]">{data.title}</p>
          </div>
          <nav className="flex gap-20">
            <a href="#products" className="md:text-[0.7rem] lg:text-[1.1rem] font-bold relative before:absolute before:w-full before:h-2 before:bg-[#cd4c1d] before:top-[4rem] before:left-0 hover:before:top-[3.3rem] before:transition-all before:duration-200 before:ease-in">Product Detail</a>
            <a href="#techSpecs" className="md:text-[0.7rem] lg:text-[1.1rem] font-bold relative before:absolute before:w-full before:h-2 before:bg-[#cd4c1d] before:top-[4rem] before:left-0 hover:before:top-[3.3rem] before:transition-all before:duration-200 before:ease-in">Tech Specs</a>
            <a href="#reviews" className="md:text-[0.7rem] lg:text-[1.1rem] font-bold relative before:absolute before:w-full before:h-2 before:bg-[#cd4c1d] before:top-[4rem] before:left-0 hover:before:top-[3.3rem] before:transition-all before:duration-200 before:ease-in">Reviews</a>
          </nav>
          <div onClick={()=>{handleAddToCart(productDetails)}} className="w-[12rem]"><MainButton paddingLR={true} text="Add to bag"/></div>
        </header>
        :
         <div className={`buttons flex gap-2 fixed bottom-0 ${headerVisibility? "z-20 opacity-100 visible": "-z-50 opacity-0 invisible"} transition-all duration-300 ease-in bg-white shadow-2xl overflow-hidden w-full  flex justify-center px-6 py-12 `}>
               <button className="flex gap-2 justify-center items-center border-[0.5px] px-4">
                <button disabled={productDetails?.quantity <= 1} onClick={()=>handleQuantity("dec")} className="text-2xl disabled:text-gray-400">
                  -
                  </button>
                   {productDetails?.quantity}<button disabled={productDetails?.quantity >= productDetails?.minimumOrderQuantity } onClick={()=>handleQuantity("inc")} className="disabled:text-gray-400 text-2xl">
                    +
                    </button>
                   </button>
                        <div onClick={()=>{handleAddToCart(productDetails)}} className="grow-[2]"><MainButton text="Add to bag" paddingLR={true}/></div>
                        <button className="border-[0.5px] px-4">Buy Local</button>              
                     </div>}
        <div className={`cart-checkout absolute top-[20%] flex flex-col gap-4 md:left-[60%] left-[20%] md:w-[25rem] min-w-[15rem] transition-all duration-200 ease-in ${addToCartNotify? "z-50 opacity-100 visible": "-z-50 opacity-0 invisible"} bg-white box-shadow p-6 flex flex-col items-center`}>
          <div className="cart-checkout__header flex justify-between items-center w-full py-4 px-
          6">
            <span className="flex items-center justify-start gap-1"><FaCheckCircle className="text-amber-700" /> <span className="font-bold">Added To bag</span></span>
            <span className="text-2xl cursor-pointer" onClick={()=>handleCloseAddToCartNotify()}><IoCloseOutline/></span>
            </div>
            <div className="cart-checkout-body flex items-center justify-center gap-2">
              <img className="w-20" src={productDetails?.thumbnail} />
              <h1>{productDetails?.title}</h1>
            </div>
            <NavLink to="/cart" className="w-full text-center"><MainButton text="Checkout Bag"/></NavLink>
        </div>
           <div className={`p-4 opacityAnimation before:transition-all before:duration-200 before:ease-in ${addToCartNotify? "before:absolute before:z-30 before:h-full before:w-full before:bg-[#00000062]": ""}`}>
            <div className="heroSection h-screen flex items-start flex-col lg:flex-row gap-10 justify-evenly mt-48" ref={productHeroSection}>
                <div ref={productImgSec} className="heroSection__images relative h-full w-full justify-start snap-x snap-mandatory gap-0 flex items-center overflow-x-scroll overflow-y-hidden p-0 m-0">
               <button onClick={()=>handleImageScroll("right")} className={`text-2xl rounded-[50%] p-4 flex items-center justify-center bg-[#f3f3f3] ${liveScrollProductImg <= productImgSec.current?.clientWidth? "opacity-0 -left-4 invisible": "opacity-100 left-0"} transition-all duration-300 ease-in text-black sticky top-[50%] cursor-pointer`}><IoIosArrowBack/></button>
                  {
                  productDetails?.images.map((photo)=>{
                    return(
                   <div className="min-w-full h-full flex justify-center mx-4 snap-center items-center"> <img className="h-full" src={photo} alt="Product image" /></div>
                    
                  )
                })
              }
              <button onClick={()=>handleImageScroll("left")}  className={`text-2xl text-black sticky top-[50%] rounded-[50%] ${lastPointScrollProductImg + 100 >= productImgSec.current?.scrollWidth? "opacity-0 -right-4 invisible": "opacity-100 right-0"} transition-all duration-300 ease-in p-4 flex items-center justify-center bg-[#f3f3f3] cursor-pointer`}><IoIosArrowForward/></button>
                  </div>
                <div className="heroSection__info flex basis-[40rem] justify-start flex-col items-start">
                    <p className="p-0.5 -skew-x-12 bg-black text-[0.75rem] flex justify-center items-center uppercase text-white font-extrabold">
                        {productDetails?.brand || "No brand"}
                    </p>
                    <h1 className="text-4xl font-bold text-black my-4">{productDetails?.title}</h1>
                     
                     <div className="flex">
                     {[...Array(5)].map((_, index) => {
                          const ratingData = productDetails?.rating;
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
                              <p className="ml-3 underline text-[0.85rem]">{productDetails?.rating}({productDetails?.reviews.length})</p>
                     </div>
                     <p className="text-3xl py-4">${(productDetails?.price / productDetails?.quantity).toFixed(2)} <span className="text-[1rem]">USD</span></p>
                     <p className= "py-4 font-sans">{productDetails?.description}</p>

                     <div className="size">
                        <h1 className="text-[#151515] text-2xl py-3 font-sans">size</h1>
                        <div className="buttons flex gap-2">
                            <button className="border-[0.5px] border-[#212121] p-3 transition-all duration-500 hover:bg-black hover:text-white">Depth: {productDetails?.dimensions.depth}cm</button>
                            <button className="border-[0.5px] border-[#212121] p-3 transition-all duration-500 hover:bg-black hover:text-white">Width: {productDetails?.dimensions.width}cm</button>
                            <button className="border-[0.5px] border-[#212121] p-3 transition-all duration-500 hover:bg-black hover:text-white">Height: {productDetails?.dimensions.height}cm</button>
                        </div>
                     </div>

                     <div className="cartButtons my-8 w-full flex justify-start gap-4 items-stretch">
                        <button className="flex gap-2 justify-center items-center border-[0.5px] px-4"><button disabled={productDetails?.quantity <= 1} onClick={()=>handleQuantity("dec")} className="text-2xl disabled:text-gray-400">-</button>{productDetails?.quantity}<button disabled={productDetails?.quantity >= productDetails?.minimumOrderQuantity } onClick={()=>handleQuantity("inc")} className="disabled:text-gray-400 text-2xl">+</button></button>
                        <div onClick={()=>{handleAddToCart(productDetails)}} className="grow-[2]"><MainButton text="Add to bag" paddingLR={true}/></div>
                        <button className="border-[0.5px] px-4">Buy Local</button> 
                     </div>
                </div>
            </div>
            <div className="detailSections mt-20 md:px-12">
                <div className="detailSection-info" id="products">
                    <h1 className="text-3xl font-extrabold text-black my-4">Product Details</h1>
                    <hr className="border-[#1a1a1a93]"/>
                    <div className="info  md:px-24">
                        <p className="text-[1.2rem] my-16">{productDetails?.description}</p>
                        <div className="little-info w-full grid md:grid-cols-3 md:grid-rows-1 grid-cols-2 grid-rows-2">
                            <span className=" m-4 flex justify-center items-center flex-col grow  gap-4">
                            <h2 className="font-bold">Stock left</h2>
                            <p className="text-[0.8rem]">{productDetails?.stock}</p>
                            </span>
                            <span className=" m-4 flex justify-center items-center flex-col grow gap-4">
                            <h2 className="font-bold">Return policy</h2>
                            <p className="text-[0.8rem]">{productDetails?.returnPolicy}</p>
                            </span>
                            <span className=" m-4 flex justify-center items-center flex-col grow gap-4">
                            <h2 className="font-bold">product Warranty</h2>
                            <p className="text-[0.8rem]">{productDetails?.warrantyInformation}</p>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="Tech-specs" id="techSpecs">
                    <h1  className="text-3xl font-extrabold text-black my-4">Tech Specs</h1>
                    <hr className="border-[#1a1a1a93]"/>
                    <div className="specs md:px-24">
                        <div className="specsInfo flex justify-center gap-0 my-16">
                           <span className="grow flex flex-col gap-4">
                             <h2 className="bg-[#ebebeb] p-1 font-bold">Product weight</h2>
                             <p className="text-[0.8rem]">{productDetails?.weight}g</p>
                           </span>
                           <span className="grow flex flex-col gap-4">
                             <h2 className="bg-[#ebebeb] p-1 font-bold">Product creation</h2>
                             <p className="text-[0.8rem]">{new Date(productDetails?.meta.createdAt).getDate()}-{new Date(productDetails?.meta.createdAt).getDay()}-{new Date(productDetails?.meta.createdAt).getFullYear()}</p>
                           </span>
                           <span className="grow flex flex-col gap-4">
                             <h2 className="bg-[#ebebeb] p-1 font-bold">More Info</h2>
                             <p className="text-[0.8rem]"><img className="h-16" src={productDetails?.meta.qrCode}></img></p>
                           </span>
                        </div>
                    </div>
                </div>
                <div className="Reviews" id="reviews">
                    <h1  className="text-3xl font-extrabold text-black my-4 flex items-baseline gap-2">Reviews <div className="flex">
                     {[...Array(5)].map((_, index) => {
                          const ratingData = productDetails?.rating;
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
                              <p className="ml-3 underline font-light text-[0.85rem]">{productDetails?.rating}({productDetails?.reviews.length})</p>
                     </div></h1>    
                    <hr className="border-[#1a1a1a93]" />
                    <div className="review-details py-24">

                              <h1 className="rating h-20rem w-full flex justify-center items-center flex-col pb-16">
                                <div className="text-4xl py-4 font-bold">{productDetails?.rating}</div>
                                <div className="flex">
                     {[...Array(5)].map((_, index) => {
                          const ratingData = productDetails?.rating;
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
                              <div className="my-2 text-[#06040491]">{productDetails?.reviews.length} Reviews</div>
                              </h1>
                              <div className="reviews flex justify-center flex-col md:px-24">
                                   {productDetails?.reviews.map((review, _)=>{
                                    return(<>
                                     <span className="my-8 flex justify-between">
                                        <div className="profile flex gap-4">
                                            <div className="profilePic flex flex-col justify-center items-center  text-white h-12 w-12 rounded-full bg-[#6a6c77]">{review.reviewerName.slice(0,1)}</div>
                                            <div className="flex flex-col gap-2">
                                                <p className="name">{review.reviewerName}</p>
                                                <div className="flex">
                                                    {[...Array(5)].map((_, index) => {
                                                        const ratingData = productDetails?.rating;
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
</>)}

export default ProductDetailPage;