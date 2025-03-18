import { useDispatch, useSelector } from "react-redux"
import { RiDeleteBin5Line } from "react-icons/ri";
import { MainButton } from "../web Components/Buttons/MainButton";
import { DeleteAddToCart } from "../Store";
import { useEffect, useState } from "react";


const Cart = ()=> {

    const [cartItem, setCartItem] = useState([])

    const dispatch = useDispatch()
    const data = useSelector((state)=>state.ProductDetails.cartData)

        useEffect(()=>{
            if(data){
                setCartItem(data)
            }
        },[data])
        let totalPrice = 0

        const handleQuantity =(action, id)=>{
            setCartItem((prev)=>{
             return prev.map((item)=>{
                    if (item.id === id) {
                        if (action === "inc") {
                            console.log(item.quantity, item.price)
                            return {...item, quantity:item.quantity + 1, price: parseFloat((Number(item.price) / item.quantity + Number(item.price)).toFixed(2))}
                        }else{
                            return {...item, quantity:item.quantity - 1, price: parseFloat(Number(item.price) - (Number(item.price) / item.quantity).toFixed(2))}
                        }
                    }else{
                        return item
                    }
                        
                })
            })
        }

        const handleDeleteCart = (id) => {
           dispatch(DeleteAddToCart(id))
        }

        return (
            <div className="p-4 opacityAnimation">
            <div className="mt-48">
                <h1 className="font-extrabold text-5xl my-8">Shopping bag <span className="text-[1rem] font-medium">{data.length} items</span></h1>
                <div className="cartDetail relative flex justify-center flex-col md:flex-row gap-8">
                    <div className="products flex flex-col justify-center gap-4 grow border-t-[1px] md:p-8 p-4">
                        {cartItem.length!== 0?cartItem.map((product, index)=>{
                                  totalPrice += product.price
                            return <div className="flex justify-between product-box-shadow w-full rounded-2xl">
                                <div className="flex flex-col">
                              <div className="p-8 w-full flex items-start">

                                <div className="productImage">
                                    <img src={product.thumbnail} alt="product" className="h-20 w-20
                                    " />
                                    </div>
                                    <div className="productDetails pl-2">
                                        <h2 className="text-lg font-bold">{product.title}</h2>
                                        <p className="md:text-sm text-[0.6rem] my-2 text-gray-600">Unit price: ${(product.price/ product.quantity).toFixed(2)}</p>
                                        </div>
                                        </div>

                                        <div className=" p-4 md:justify-end w-full flex md:gap-8 gap-4 justify-between items-center text-sm text-gray-600">
                                            <span className=" flex items-center gap-2  md:gap-4">
                                            <button onClick={()=>handleQuantity("dec", product.id)} disabled={product.quantity <= 1} className="disabled:text-[#ababab] md:size-10 size-7 bg-[#cfcfcf] font-bold text-[1.1rem]">-</button>
                                            <p className="text-[1rem]">{product.quantity}</p>
                                            <button onClick={()=>handleQuantity("inc", product.id)} disabled={product.minimumOrderQuantity <= product.quantity} className="md:size-10 size-7 disabled:text-[#ababab] bg-[#cfcfcf] font-bold text-[1.1rem]">+</button>
                                            </span>
                                            <span className="font-bold md:text-[1.3rem] text-[1rem] text-black">
                                                ${product.price.toFixed(2)}
                                            </span>
                                            </div>
                             </div>   
                                        <div onClick={()=>handleDeleteCart(index)} className="bg-[#ebebeb] px-4 text-2xl h-auto rounded-tr-2xl rounded-br-2xl cursor-pointer flex justify-center items-center"><RiDeleteBin5Line /> </div>
                             </div>
                        }):<div className="text-2xl font-bold uppercase">No Item in the cart</div>}
                <div className="subtotal border-t-[1px] mt-4 py-8">
                     <p className="w-full text-3xl flex justify-between items-center font-bold mt-4 pt-2">Estimated Total <span>${totalPrice.toFixed(2)}</span></p>
                        <p className="w-full my-2 text-[0.85rem]">Final shipping and tax calculated during checkout.</p>
                        <img className="my-8" src="/payment-method.avif" alt="" />
                </div>
                    </div>
                    <div className="cartTotal sticky top-0 w-96 max-h-fit flex flex-col bg-[#ebebeb] p-8">
                        <h1 className="text-3xl font-bold">Order Summery</h1>
                        <p className="w-full flex justify-between items-center border-t-[1px] mt-4 py-2">Order SubTotal <span>${totalPrice.toFixed(2)}</span></p>
                        <p className="w-full flex justify-between items-center border-t-[1px] mt-4 py-2">Estimate Shipping <span className="text-4xl text-amber-700">+</span></p>
                        <p className="w-full flex justify-between items-center border-t-[1px] mt-4 py-2">Coupon Code <span className="text-4xl text-amber-700">+</span></p>
                        <div className="md:relative md:visible md:opacity-100 invisible absolute opacity-0">
                        <p className="w-full text-2xl flex justify-between items-center font-bold border-t-[1px] mt-4 pt-2">Estimated Total <span className="font-bold text-[1rem]">${totalPrice.toFixed(2)}</span></p>
                        <p className="w-full text-[0.65rem]">Final shipping and tax calculated during checkout.</p>
                        <div className="w-full mt-5 flex justify-center"><MainButton paddingLR={true} text="Order Now"/></div>

                        </div>
                    </div>

                        </div>
                </div> 
                        <div className="md:invisible md:opacity-0 sticky bottom-0 -right-4 bg-white w-full">
                        <p className="w-full text-2xl flex justify-between items-center font-bold mt-4 mr-5 pt-2">Estimated Total <span className="font-bold text-[1rem]">${totalPrice.toFixed(2)}</span></p>
                        <div className="w-full mt-5 flex justify-center"><MainButton paddingLR={true} text="Order Now"/></div>
            </div>
        </div>
    ) 
}

export default Cart;