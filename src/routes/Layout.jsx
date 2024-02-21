import React from 'react'
import { Header } from '../components'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
   <>
   <Header/>
   <Outlet/>
   </>
  )
}

export default Layout