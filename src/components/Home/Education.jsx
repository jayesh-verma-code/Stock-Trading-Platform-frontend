import React from 'react'
import { ArrowRight } from 'lucide-react';

const Education = () => {
  return (
    <div className='row lg:px-[20rem]  px-[4rem] text-[#464646]'>
      <div className="flex justify-center items-center mb-[4rem] col-lg-6 col-md-12 col-sm-12 col-12">
        <img className='scale-[0.9]' src="./media/Home-Education.svg" alt="" />
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
        <h1 className='text-[3.5rem] font-[500] mb-[6rem]'>Free and open market education</h1>
        <p className='text-[1.8rem] text-[#626262] mb-[1.5rem]'>
          Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
        </p>
        <a className='mb-[3rem] flex items-center w-fit justify-center gap-4 text-[1.6rem] text-[#2885d1]' href=""><p>Varsity</p><ArrowRight className='pt-1' size={20} /></a>
        <p className='text-[1.8rem] text-[#626262] mb-[1.5rem]'>
          TradingQ&A, the most active trading and investment community in India for all your market related queries.
        </p>
        <a className='flex items-center w-fit justify-center gap-4 text-[1.6rem] text-[#2885d1]' href=""><p>TradingQnA</p><ArrowRight className='pt-1' size={20} /></a>
      </div>
    </div>
  )
}

export default Education