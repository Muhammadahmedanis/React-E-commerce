import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaSquareXTwitter } from "react-icons/fa6";
function Footer() {

  const list = [
    {
      id: 1,
      header: 'Shop',
      title: [
        {
          subtitle: 'new arrivals',
        },
        {
          subtitle: 'sales & special offers',
        },
        {
          subtitle: 'living room',
        },
        {
          subtitle: 'furniture decor',
        },
        {
          subtitle: 'lamp & lighting',
        },
        {
          subtitle: 'sofa & chair',
        },
        {
          subtitle: 'home & kitchen',
        },
      ],
    },
    {
      id: 2,
      header: 'About Us',
      title: [
        {
          subtitle: 'Customer Services',
        },
        {
          subtitle: 'Blog',
        },
        {
          subtitle: 'Page 404',
        },
        {
          subtitle: 'Size Guide',
        },
        {
          subtitle: 'Faqs',
        },
        {
          subtitle: 'Contact Us',
        },
      ],
    },
    {
      id: 3,
      header: 'ORDER',
      title: [
        {
          subtitle: 'My Account',
        },
        {
          subtitle: 'View Bag',
        },
        {
          subtitle: 'Privacy Policy',
        },
        {
          subtitle: 'Cookie Policy',
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
      <div className='flex justify-between'>
        <div className='w-1/2'>
          <div className='flex justify-around uppercase'>
            {
              list.map((val, ind) => (
                <div key={ind}>
                  <div className='text-2xl font-semibold mb-2'>{val.header}</div>
                  <div className='flex flex-col'>
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

        <div className='w-1/2 p-6 bg-gray-100 rounded-lg shadow-md'>
          <h1 className='text-2xl font-semibold mb-4'>SIGN UP FOR NEWSLETTER</h1>
          <p className='text-gray-600 mb-4'>Don't miss out on exciting prmotions and latest shopping news</p>
          <input className='w-2/3 p-3 border-gray-300 rounded mb-4' type="text" placeholder='Your Email Address' />
          <button className='bg-black text-white p-3 ml-4 rounded hover:bg-red-500' type='button'>SUBSCRIBE</button>
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