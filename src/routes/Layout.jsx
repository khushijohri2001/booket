import React from 'react'
import { HamburgerMenu, Header } from '../components'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
   <>
   <Header/>
   <HamburgerMenu/>
   <Outlet/>
   </>
  )
}

export default Layout