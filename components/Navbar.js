import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white flex justify-between px-4 h-16 items-center">
        <div className='logo font-bold text-xl'>Scheduling!</div>
        <ul className="flex justify-between gap-4">
            <li className="">Home</li>
            <li className="">About</li>
            <li className="">Contact</li>
            <li className="">Login</li>
            <li className="">Register</li>
        </ul>
    </nav>
  )
}

export default Navbar