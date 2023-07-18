import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
const Header = () => {
  const[toggle,settoggle]=useState("true");
  const handleToggle = () => {
    settoggle(!toggle);
  };


  return (
    <div className='header flex justify-between'>
        <div className='text-white'>
      
            WebTech
        </div>
        <div className='md:hidden'>
       {toggle ?   (<AiOutlineMenu  onClick={handleToggle} className= " text-white text-2xl"/> ):(
        <AiOutlineClose onClick={()=>handleToggle} className= " text-white text-2xl"/>)
       }
       </div>
        <ul className='hidden md:flex gap-5 text-white ' >
            <li>Home</li>
            <li>About</li>
            <li>Login</li>
            <li>Resources</li>
        </ul>
        <ul className={`duration-300 md:hidden gap-5 w-full h-screen text-white fixed  bg-[#0E2954] top-[60px]  ${toggle?'left-[0]':'left-[-100%]'}` }>
            <li className='p-6'>Home</li>
            <li className='p-6'>About</li>
            <li className='p-6'>Login</li>
            <li className='p-6'>Resources</li>
        </ul>
    </div>
  )
}

export default Header