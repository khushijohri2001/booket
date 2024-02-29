import React from 'react'
import AnnouncementBar from './AnnouncementBar'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='sticky top-0 z-[100]'>
      <AnnouncementBar />
      <Navbar />
    </div>
  )
}

export default Header