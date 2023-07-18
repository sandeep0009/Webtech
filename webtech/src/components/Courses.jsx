import React from 'react'
import course from "../image/course.png"

const Courses = () => {
  return (
    <div className='max-w-[1240px] mx-auto my-[30px] item-center  md:grid grid-cols-2 '>
        <div className=' col-span-1'>
            <img className='h-[240px] m-auto'  src={course} alt="image" />
        </div>
        <div className=' col-span-1  justify-center my-4'>
        We provide Following courses for which you can subscribe and learn and upgrade to your new carrer :
        <ul className='my-4 text-justify  flex flex-col items-centerr mx-auto justify-center'>
            <li>
                Full Stack Development
            </li>
            <li>
                Mern Stack Development
            </li>
            <li>
                Front End Developer
            </li>
            <li>Backend Developer</li>
        </ul>
        <button className='w-full block md:w-[30%] bg-[#0E2954] text-white p-3 rounded'>
            Click to Start
        </button>

        
        </div>

    </div>
  )
}

export default Courses