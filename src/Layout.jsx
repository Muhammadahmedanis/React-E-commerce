import React from 'react'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function Layout() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout