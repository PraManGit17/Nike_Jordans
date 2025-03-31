import React from 'react'
import './Header.css'

const Header = () => {
  return (

    <header className="w-screen bg-white px-10 p-8 text-white text-xl" id= "header">

      <div className='flex justify-between'>
        <span>Nike</span>
        <div className='flex gap-30'>
          <span>Featured</span>
          <span>Legacy</span>
          <span>ShowRoom</span>
        </div>

        <div className='flex gap-8'>
          <span>search</span>
          <span>cart</span>
          <span>edit</span>
        </div>
      </div>
    </header>
  )
}

export default Header
