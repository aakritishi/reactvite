import React from 'react'

const Header = () => {
  return (
    <div className='w-full shadow-md shadow-gray-500 py-5'>
      <div className='w-[90%] mx-auto flex justify-between'>
        <div>img-logo</div>
        <ul className='flex justify-between gap-7'>
          <li>About us</li>
          <li>Services</li>
          <li>Shop</li>
          <li>Contact</li>
        </ul>
        <div>
          Login
        </div>
    </div>
    </div>
  )
}

export default Navbar