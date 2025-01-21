import React, { useEffect, useState } from 'react'
import { TiAdjustBrightness } from "react-icons/ti";
import { PiMoonStars } from "react-icons/pi";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [isDarkMode]);

  return (
    <div className='w-full h-16 dark:bg-black bg-gray-100 bg-opacity-100 flex justify-between items-center fixed top-0 z-50 lg:px-80 md:px-20 px-10 font-Acme'>
        <div className='flex lg:gap-4 gap-2  lg:text-xl md:text-lg text-base text-black dark:text-white'>
            <p className='cursor-pointer dark:hover:text-gray-300 hover:text-gray-400 transition duration-500 ease-in-out'>home</p>
            <p className='cursor-pointer dark:hover:text-gray-300 hover:text-gray-400 transition duration-500 ease-in-out'>about</p>
            <p className='cursor-pointer dark:hover:text-gray-300 hover:text-gray-400 transition duration-500 ease-in-out'>education</p>
        </div>
        <div className='flex gap-3'>
            <div className='cursor-pointer dark:text-white text-black hover:bg-gray-500 p-1 rounded transition duration-300 ease-in-out' onClick={() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? <TiAdjustBrightness size={30}/> : <PiMoonStars size={30}/> }
            </div>
        </div>
    </div>
  )
}

export default Navbar;
