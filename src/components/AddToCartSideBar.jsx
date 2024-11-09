import React, { useState } from 'react';
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import { IoCloseCircle } from "react-icons/io5";
import { useSelector } from 'react-redux';
import AddToCart from './AddToCart';

function AddToCartSideBar() {
    const { totalItems } = useSelector((state) => state.cart);
    const [showSideBar, setShowSideBar] = useState(false);

    const showRightBar = () => {
        setShowSideBar(true);
    };
    
    const hideRightBar = () => {
        setShowSideBar(false);
    };

    return (
        <div className="flex">
            <div>
                <FaHeart className="hover:text-red-500 text-2xl" />
            </div>
            <div className="relative">
                <div className="hover:text-red-500 text-2xl cursor-pointer" >
                    <FaCartShopping size={30} onClick={showRightBar} />
                </div>
                {showSideBar && (
                    <div className="fixed top-14 right-0 w-80 bg-white shadow-lg">
                        <AddToCart />
                        <span className="absolute top-2 right-2 cursor-pointer text-gray-600" onClick={hideRightBar}>
                            <IoCloseCircle />
                        </span>
                    </div>
                )}
                <span className="absolute -top-2 text-white -right-2 bg-red-600 rounded-full py-0 px-[6px]">
                    {totalItems}
                </span>
            </div>
        </div>
    );
}

export default AddToCartSideBar;