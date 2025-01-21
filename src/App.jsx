import React from 'react';
import Hero from './Sections/Hero';
import Navbar from './Components/Navbar';
import { Projects } from './Components/Projects';
import { EducationList } from './Components/Education';

const App = () => {
  return (
    <div className='w-full flex flex-col items-center font-Calistoga dark:text-white text-black'>
      <Navbar/>
      <div className='w-full h-screen'>
        <Hero/>
      </div>
      <div className='dark:bg-black w-full flex flex-col justify-center lg:px-80 md:px-20 px-10 lg:-mt-20 md:-mt-28 -mt-40 z-30 pb-10'>
        <div className='text-2xl md:text-3xl lg:text-4xl pb-6'>Projects:</div>
        <Projects/>
      </div>
      <div className='dark:bg-black w-full h-full flex flex-col justify-center lg:px-80 md:px-20 px-10'>
        <div className='text-2xl md:text-3xl lg:text-4xl pb-6'>Education:</div>
        <EducationList/>
      </div>
    </div>
  )
}

export default App