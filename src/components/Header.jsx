import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { FaCartShopping, FaHeart  } from "react-icons/fa6";
import AddToCartSideBar from './AddToCartSideBar';
function Header() {
  const NavItem = [
    {path: '/', link:'Home'},
    {path: '/feature', link: 'FEATURES'},
    {path: '', link: 'SHOP'},
    {path: '', link: 'BLOG'},
    {path: '', link: 'CONTACT'},
  ]

  const[menuOpen, setMenuOpen] = useState(false);
  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className={menuOpen ? '' : 'w-full bg-white sticky top-0 z-10 drop-shadow-md'}>
      <div className='flex flex-wrap justify-between place-items-center px-2 py-3 pl-5 pr-4 '>
        <div className='sm:hidden'>
          { menuOpen ? '' : <FaBars onClick={handleToggleMenu} />}
        </div>
        <div>
          <Link to='/' className='font-bold text-3xl '>
            WOOD <span className='text-yellow-500 '>COM</span>
          </Link>
        </div>
        <div className={`${menuOpen ? "transform translate-x-0" : 'transform -translate-x-full'} sm-flex bg-white fixed inset-y-0 left-0 z-50  w-64 overflow-y-auto transition-transform ease-in-out duration-300`} style={{zIndex: '1111'}}>
          <FaTimes onClick={handleToggleMenu} className='absolute top-3 right-3' />
          <ul className='flex flex-col p-4 m-8 font-bold '>
            {
              NavItem.map((item, ind) => (
                <div className='mb-3' key={ind}> 
                  <li className='mr-5 hover:text-red-600' > <NavLink to={item.path}></NavLink> {item.link}</li> 
                </div>
              ))
            }
          </ul>
        </div>

        <div className='hidden sm:flex '>
        <ul className='flex uppercase font-semibold '>
            {
              NavItem.map((item, ind) => (
                <div className='mb-3' key={ind}> 
                  <li className='mr-5 hover:text-red-600' > <NavLink to={item.path}></NavLink> {item.link}</li> 
                </div>
              ))
            }
          </ul>
        </div>

        <div className='padding: 10px'>
          <AddToCartSideBar />
          {/* <div>
            <FaHeart className='hover:text-red-500 text-2xl' />
          </div>
          <div className='relative'>
            <FaCartShopping className='hover:text-red-500 text-3xl' />
            <span className='absolute -top-3 text-white -right-2 bg-red-500 rounded-full px-[6px] py-[0px]'>0</span>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Header