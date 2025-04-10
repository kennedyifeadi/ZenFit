import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'   
import Nav from '../components/Nav'
import Newsletter from '../components/Newsletter'

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default MainLayout