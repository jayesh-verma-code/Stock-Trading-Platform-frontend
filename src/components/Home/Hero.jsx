import React from 'react'

const Hero = () => {
  return (
    <div className='w-full flex justify-center items-center flex-col p-[4rem] text-[#464646]'>
      <img className='lg:w-[60%] mb-[50px]' src="./media/Home-Hero.png" alt="Hero" />
      <h1 className='text-[5rem] font-[500] mb-4'>Invest in everything</h1>
      <p className='text-[2rem] mb-[30px]'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
      <a href=""><button className='font-[500] py-[1rem] px-[3rem] bg-[#2e88c5] text-[2rem] rounded-[5px] text-white'>Sign up for frees</button></a>
    </div>
  )
}

export default Hero