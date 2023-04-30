import React from 'react'
import MainContainer from './MainContainer'
import SideBar from './SideBar'

function Body() {
  return (
   <div className='w-full flex gap-8 justify-between items-start'>
   <SideBar />
   <MainContainer />
  </div>
  )
}

export default Body
