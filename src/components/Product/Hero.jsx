import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center px-[4rem] py-[8rem] text-center'>
      <h1 className='text-[4.5rem] font-[500] text-gray-700'>Zerodha Products</h1>
      <p className='text-[2rem] text-gray-700'>Sleek, modern and intuitive trading platforms </p>
      <p className='text-[1.6rem] mt-[1rem] text-gray-700'>Check out our <span className='text-blue-500'>investment offerings → </span></p>
      <div className='w-[75%] py-[4rem] border-b-[#86868638] border-b-1'></div>
    </div>
  )
}

export default Hero