import React from 'react'
import Sliders from '../components/Sliders'
import Category from '../components/Category'
import Arrival from '../components/Arrival'
import Popular from '../components/Popular'
import ContactUs from '../components/ContactUs'
import BestSeller from '../components/BestSeller'
import Banner from '../components/Banner'
import Brand from '../components/Brand'

function Home() {
  return (
    <div className='bg-white'>
      <div>
      <Sliders />
      <Category />
      <Arrival />
      <Popular />
      <BestSeller />
      <Banner />
      <Brand />
      </div>
      <ContactUs />
    </div>
  )
}

export default Home