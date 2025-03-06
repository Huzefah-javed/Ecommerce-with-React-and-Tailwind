import { useDispatch, useSelector } from "react-redux"
import { RiDeleteBin5Line } from "react-icons/ri";
import { MainButton } from "../web Components/Buttons/MainButton";
import { DeleteAddToCart } from "../Store";


export const Cart = ()=> {
    const dispatch = useDispatch()
    const data = useSelector((state)=>state.ProductDetails.cartData)
        console.log(data)
        let totalPrice = 0

        const handleDeleteCart = (id) => {
           dispatch(DeleteAddToCart(id))

        }

        return (
            <div className="p-4 opacityAnimation">
            <div className="mt-48">
                <h1 className="font-extrabold text-5xl my-8">Shopping bag <span className="text-[1rem] font-medium">{data.length} items</span></h1>
                <div className="cartDetail relative flex gap-8">
                    <div className="products flex flex-col gap-4 grow border-t-[1px] p-8">
                        {data.map((product, index)=>{
                            
                                  totalPrice += product.price
                            return <div className="flex product-box-shadow rounded-2xl">

                              <div className="p-8 w-full flex  items-center">

                                <div className="productImage">
                                    <img src={product.thumbnail} alt="product" className="w-24 h-24
                                    " />
                                    </div>
                                    <div className="productDetails">
                                        <h2 className="text-lg font-bold">{product.title}</h2>
                                        <p className="text-sm my-2 text-gray-600">Unit price:{product.price}</p>
                                        <div className="mt-8  ml-36 w-full flex gap-8 justify-end text-sm text-gray-600">
                                            <span className=" flex items-center  gap-4">
                                            <button className=" h-[2.5rem] w-[2.5rem] bg-[#cfcfcf] font-bold text-[1.1rem]">-</button>
                                            <p className="text-[1rem]">1</p>
                                            <button  className="h-[2.5rem] w-[2.5rem] bg-[#cfcfcf] font-bold text-[1.1rem]">+</button>
                                            </span>
                                            <span className="font-bold text-[1.3rem] text-black">
                                                ${product.price}
                                            </span>
                                            </div>
                                        </div>
                             </div>   
                                        <div onClick={()=>handleDeleteCart(index)} className="bg-[#ebebeb] px-4 text-2xl h-full rounded-tr-2xl rounded-br-2xl cursor-pointer flex justify-center items-center"><RiDeleteBin5Line /> </div>
                             </div>
                        })}
                <div className="subtotal border-t-[1px] mt-4 py-8">
                     <p className="w-full text-3xl flex justify-between items-center font-bold mt-4 pt-2">Estimated Total <span>${totalPrice}</span></p>
                        <p className="w-full my-2 text-[0.85rem]">Final shipping and tax calculated during checkout.</p>
                        <img className="my-8" src="/payment-method.avif" alt="" />
                </div>
                    </div>
                    <div className="cartTotal sticky top-0 w-96 max-h-fit flex flex-col bg-[#ebebeb] p-8">
                        <h1 className="text-3xl font-bold">Order Summery</h1>
                        <p className="w-full flex justify-between items-center border-t-[1px] mt-4 py-2">Order SubTotal <span>${totalPrice}</span></p>
                        <p className="w-full flex justify-between items-center border-t-[1px] mt-4 py-2">Estimate Shipping <span className="text-4xl text-amber-700">+</span></p>
                        <p className="w-full flex justify-between items-center border-t-[1px] mt-4 py-2">Coupon Code <span className="text-4xl text-amber-700">+</span></p>
                        <p className="w-full text-2xl flex justify-between items-center font-bold border-t-[1px] mt-4 pt-2">Estimated Total <span className="font-bold text-[1rem]">${totalPrice}</span></p>
                        <p className="w-full text-[0.65rem]">Final shipping and tax calculated during checkout.</p>
                        <div className="w-full mt-5 flex justify-center"><MainButton paddingLR={true} text="Order Now"/></div>

                    </div>
                    
                </div> 
            </div>
        </div>
    ) 
}