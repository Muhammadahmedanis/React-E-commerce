import { useState } from "react";
import { FaCartShopping, FaHeart, FaEye, } from "react-icons/fa6";

const products = [
  {
    id: 1,
    img: "/images/product/product1.jpg",
    name: "BEDROOM",
    price: "55.00",
  },
  {
    id: 2,
    img: "/images/product/product2.jpg",
    name: "OFFICE",
    price: "55.00",
  },
  {
    id: 3,
    img: "/images/product/product6.jpg",
    name: "LIGHTING",
    price: "55.00",
  },
  {
    id: 4,
    img: "/images/product/product5.jpg",
    name: "BATHROOM",
    price: "55.00",
  },
  {
    id: 5,
    img: "/images/product/product4.jpg",
    name: "KITCHEN",
    price: "55.00",
  },
  {
    id: 6,
    img: "/images/product/product3.jpg",
    name: "INTERIOR",
    price: "55.00",
  },
  {
    id: 7,
    img: "/images/product/product7.jpg",
    name: "LIVING ROOM",
    price: "55.00",
  },
  {
    id: 8,
    img: "/images/product/product8.jpg",
    name: "DECOR",
    price: "55.00",
  },
  {
    id: 9,
    img: "/images/product/product9.jpg",
    name: "LIVING ROOM",
    price: "55.00",
  },
  {
    id: 10,
    img: "/images/product/product10.jpg",
    name: "SOFA",
    price: "55.00",
  },
  {
    id: 11,
    img: "/images/product/product11.jpg",
    name: "LIVING ROOM",
    price: "55.00",
  },
  {
    id: 12,
    img: "/images/product/product12.jpg",
    name: "SOFA",
    price: "55.00",
  },
];

    
function BestSeller() {
  const[menuItem, setMenuItem] = useState(products);
  const filterItems = (name) => {
    const newItems = products.filter((item) => item.name === name);
    setMenuItem(newItems); 
    if(name === 'all'){
      setMenuItem(products)
      return;
    }
  }

  return (
    <div className='mt-16 text-center bg-white'>
      <h1 className='font-bold text-4xl m-2 p-2 uppercase'>Best Seller</h1>
      <p className='mb-8 uppercase'>shop the new selection of new arrivals at out store. fill out your wishlist item </p>
      <div className=''>
        <div className="flex justify-center">
          <button className="bg-gray-200 px-3 py-1 mr-1 text-black font-semibold hover:bg-black hover:text-white transition-all duration-300" onClick={() => filterItems('all')}>All</button>
          <button className="bg-gray-200 px-3 py-1 mr-1 text-black font-semibold hover:bg-black hover:text-white transition-all duration-300" onClick={() => filterItems('DECOR')}>DECOR</button>
          <button className="bg-gray-200 px-3 py-1 mr-1 text-black font-semibold hover:bg-black hover:text-white transition-all duration-300" onClick={() => filterItems('KITCHEN')}>KITCHEN</button>
          <button className="bg-gray-200 px-3 py-1 mr-1 text-black font-semibold hover:bg-black hover:text-white transition-all duration-300" onClick={() => filterItems('LIVING ROOM')}>LIVING ROOM</button>
          <button className="bg-gray-200 px-3 py-1 mr-1 text-black font-semibold hover:bg-black hover:text-white transition-all duration-300" onClick={() => filterItems('SOFA')}>SOFA</button>
        </div>
        <div className="grid grid-cols-4 flex-wrap m-10 overflow-hidden text-center relative">
        { menuItem?.map((val, ind) => (
          <div className="mx-auto max-w-xs relative" key={ind}>
              <div className="p-1 hover:bg-gray-200 hover:shadow transition-all duration-300 relative group">
                <img src={val.img} alt="prodImg" className="mx-auto " />
                <div className="icon absolute top-0 right-0 transform translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ">
                  <div className="flex flex-wrap flex-col p-2 m-1 mt-1">
                    <FaCartShopping size={35} className="p-2 mb-1 bg-white hover:bg-red-500 hover:text-white" />
                    <FaHeart size={35} className="p-2 mb-1 bg-white hover:bg-red-500 hover:text-white" />
                    <FaEye size={35} className="p-2 mb-1 bg-white hover:bg-red-500 hover:text-white" />
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="font-semibold uppercase">{val.name}</div>
                <div className="">{val.price}</div>

              </div>
            </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default BestSeller;