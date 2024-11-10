import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaSquareXTwitter } from "react-icons/fa6";
function Footer() {

  const list = [
    {
      id: 1,
      header: 'Shop',
      title: [
        {
          subtitle: 'living room',
        },
        {
          subtitle: 'new arrivals',
        },
        {
          subtitle: 'sofa & chair',
        },
        {
          subtitle: 'home & kitchen',
        },
        {
          subtitle: 'furniture decor',
        },
        {
          subtitle: 'lamp & lighting',
        },
        {
          subtitle: 'sales & special offers',
        },
      ],
    },
    {
      id: 2,
      header: 'About Us',
      title: [
        {
          subtitle: 'Blog',
        },
        {
          subtitle: 'Faqs',
        },
        {
          subtitle: 'Page 404',
        },
        {
          subtitle: 'Size Guide',
        },
        {
          subtitle: 'Contact Us',
        },
        {
          subtitle: 'Customer Services',
        },
      ],
    },
    {
      id: 3,
      header: 'ORDER',
      title: [
        {
          subtitle: 'View Bag',
        },
        {
          subtitle: 'My Account',
        },
        {
          subtitle: 'Cookie Policy',
        },
        {
          subtitle: 'Privacy Policy',
        },
      ],
    },
]

const icons = [
  {
    icon: <FaFacebook />,
  },
  {
    icon: <FaInstagram />,
  },
  {
    icon: <FaYoutube />,
  },
  {
    icon: <FaSquareXTwitter />,
  },
]


  return (
    <div className='bg-white text-black py-8 px-4'>
      <div className='flex flex-col lg:flex-row justify-around'>
        <div className='w-auto lg:w-1/2 text-center lg:text-justify'>
          <div className='flex flex-col lg:flex-row justify-center uppercase '>
            {
              list.map((val, ind) => (
                <div key={ind}>
                  <div className='text-2xl font-semibold mb-2'>{val.header}</div>
                  <div className='flex flex-col justify-center'>
                    {
                      val.title.map((item, key) => (
                        <span key={key} className='mr-2 mb-2 hover:text-red-500 cursor-pointer'>{item.subtitle}</span>
                      ))
                    }
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        <div className='w-auto lg:w-1/2 p-6 bg-gray-100 rounded-lg shadow-md'>
          <h1 className='text-2xl font-semibold mb-4'>SIGN UP FOR NEWSLETTER</h1>
          <p className='text-gray-600 mb-4'>Don't miss out on exciting prmotions and latest shopping news</p>
          <div className='flex'>
          <input className='w-auto lg:w-2/3 p-2 border-gray-300 rounded mb-4' type="text" placeholder='Your Email Address' />
          <button className='bg-black text-white p-2 ml-4 h-fit rounded hover:bg-red-500' type='button'>SUBSCRIBE</button>
          </div>
          <div className='flex'>
            {
              icons.map((val, ind) => (
                <div key={ind} className='bg-white py-2.5 px-4 rounded-sm mr-2 text-2xl hover:bg-red-500 hover:text-white duration-300'>
                  {val.icon}
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer