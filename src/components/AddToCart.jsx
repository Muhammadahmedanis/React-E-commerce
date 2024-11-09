import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal, removeItem, updateQty } from '../redux/cartSlice';
import { FaPlus } from "react-icons/fa6";
import { TiMinus } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";

function AddToCart() {
    const dispatch = useDispatch();
    const{data: cartProducts, totalAmount} = useSelector((state) => state.cart);
    useEffect(() => {
        dispatch(getCartTotal())
    }, [useSelector(state => state.cart)])

    const handleRemove = (itemId) => {
        dispatch(removeItem({id: itemId}))
    };

    const increaseQty = (cartProductId, currentQty) => {
        const newQty = currentQty + 1;
        dispatch(updateQty({id: cartProductId, quantity: newQty}))
    };

    const decreaseQty = (cartProductId, currentQty) => {
        const newQty = Math.max(currentQty - 1, 1);
        dispatch(updateQty({id: cartProductId, quantity: newQty}))
    };

  return (
    <div className='bg-white p-4'>
        <div className='flex justify-center items-center pb-4 border-b-2'>
            <h1 className='text-xl font-semibold'>Shopping Cart</h1>
        </div>
        <div className='h-screen overflow-y-auto'>
            {
                cartProducts?.length === 0 ? ( <p className='font-bold text-xl text-center'>Your Cart is Empty</p> ) : (
                    <ul className='text-center p-2'>
                        {
                            cartProducts?.map((item, ind) => (
                                <li key={ind} className='flex justify-around items-center gap-2 mb-2'>
                                    <div className=''>
                                        <img className='object-cover w-[80px]' src={item.img} alt="" />
                                        <p className='font-semibold'>{item.name}</p>
                                        <p className='ml-2 text-gray-600'>{item.price}</p>
                                    </div>
                                    <div>
                                        <div className='flex items-center p-1 '>
                                            <div>
                                                <button onClick={() => decreaseQty(item.id, item.quantity)} className='rounded-circle bg-black text-white font-light text-[16px] p-1 border'><TiMinus /></button>
                                                <span className=''>{item.quantity || 1}</span>
                                                <button onClick={() => increaseQty(item.id, item.quantity)} className='rounded-circle bg-black text-white font-light text-[16px] p-1 border'><FaPlus /></button>
                                            </div>
                                        </div>
                                        <span className='font-bold'>$ {item.totalPrice}</span>
                                    </div>
                                    <div className='bg-black text-white text-xl p-1 hover:bg-red-500' onClick={() => handleRemove(item.id)}>
                                        <IoMdClose />
                                    </div>
                                </li>
                            ))
                        }
                        <div className='bg-black text-center text-white uppercase text-2xl p-1'>
                            ${totalAmount}
                        </div>
                    </ul>
                )
            }
        </div>
    </div>
  )
}

export default AddToCart