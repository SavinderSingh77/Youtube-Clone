import React from 'react'
import MainContainer from './MainContainer'
import SideBar from './SideBar'

function Body() {
  return (
   <div className='flex h-[100vh] justify-between items-center'>
   <SideBar />
   <MainContainer />
  </div>
  )
}

export default Body
