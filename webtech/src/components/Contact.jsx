import React from 'react'

const Contact = () => {
  return (
    <div className='bg-[#0E2954] py-4'>
        <div className='max-w-[1240px] mx-auto md:flex flex-col justify-between py-[60px]'>
        <div className=''>
            <h1 className='text-white text-3xl text-center items-center'>
            Contact Details :
            </h1>
            <span className='text-white text-center block  px-[2px] py-[3px]'>
            You Want to contact us then Feel free to contact us anytime.
                we Will try to serve you best services and will clear your all doubts.

            </span>
        </div>
        <div className=' text-center flex flex-col'>
            <input type="text" className=' block max-w-ws mx-auto outline-none  rounded  my-6 ' placeholder='Enter Name'/>
            <input type="text" className=' block max-w-ws mx-auto outline-none rounded my-6' placeholder='Enter Email '/>
            <input type="text" className=' block max-w-ws mx-auto outline-none rounded my-6' placeholder='Enter Phone-number'/>
<textarea className='w-[190px] mx-auto rounded my-6 outline-none'  id="" cols="20" rows="5" placeholder='Enter your doubt rounded '></textarea>
            <button className='w-[30%] mx-auto bg-[#24334b] hover:bg-[#253a5b] my-5 text-white p-3 item-center rounded'>Send mail</button>
        </div>
        </div>
    </div>
  )
}

export default Contact