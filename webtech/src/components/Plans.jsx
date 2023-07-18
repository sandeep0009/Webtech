import React from 'react'

const Plans = () => {
  return (
    <div className='py-[100px]'>
        <div className=' mx-auto  px-2 md:grid grid-cols-3 gap-4'>
        <div className='shadow-xl border border-gray-900 h-[500px] my-4 hover:scale-75 duration-400 flex flex-col justify-center items-center'>
            <h3 className='font-bold text-center my-5'>Full Stack developer</h3>
            <h1 className='font-bold text-center my-5'> $-40</h1>
            <p className='text-center my-3 mx-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit repudiandae saepe adipisci aliquid est cum architecto deleniti. Debitis nobis ipsam rem in accusamus repellendus assumenda minus! Animi delectus earum quibusdam.
            </p>
            <button className='my-6 hover:bg-[#1f3e54] bg-[#001C30] text-white rounded w-[40%] h-[40px]'>Get this course</button>
        </div>
        <div className='shadow-xl border border-gray-900 h-[500px] my-4 hover:scale-75 duration-400 bg-gray-100 flex flex-col justify-center items-center'>
        <h3 className='font-bold text-center my-5'>MERN developer</h3>
            <h1 className='font-bold text-center my-5'> $-60</h1>
            <p className='text-center my-3 mx-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil facere porro cum autem eaque voluptatum? Rem architecto fugiat quibusdam ab doloribus, deserunt eos assumenda tempore, distinctio, at tempora officia quam.
            </p>
            <button className='my-6 hover:bg-[#173951] bg-[#001C30] text-white rounded w-[40%] h-[40px]'>Get this course</button>


        </div>
        <div className='shadow-xl border border-gray-900 h-[500px] my-4 hover:scale-75 duration-400 flex flex-col justify-center items-center'>
        <h3 className='font-bold text-center my-5'>FRONT-END OR BACKEND  developer</h3>
            <h1 className='font-bold text-center my-5'> $-20</h1>
            <p className='text-center my-3 mx-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, nam id? Illum delectus molestiae amet, quia necessitatibus nisi at? Ullam voluptatibus temporibus aut id corrupti dolores omnis, ea nulla. Sed!
            </p>
            <button className='my-6 bg-[#001C30] hover:bg-[#0d3c5d] text-white rounded w-[40%] h-[40px]'>Get this course</button>


        </div>

        </div>
    </div>
  )
}

export default Plans