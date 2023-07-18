import React from 'react'
import Typed from "react-typed";

const Banner = () => {
  return (
    <div className='w-full py-[100px]'>
        <div className='max-w-[1240px] mx-auto font-bold text-center'>
            <div>
                <h1 className='text-white text-xl  md:text-4xl'>Learn And Earn with Us </h1>
            </div>
            <div>
                <p className='text-white text-[8px] mt-5  md:text-[10px]'>Grow with us in your career field</p>
            </div>
            <div className='text-[50px] text-white mt-4'>
                Learn
                <Typed className='pl-5' strings={['Web Devlopment ',"Front End Developer",'Mern stack developer','Backend Developer']}
                    typeSpeed={100} loop={true} backSpeed={120}
                />
            </div>
        </div>
    </div>
  )
}

export default Banner