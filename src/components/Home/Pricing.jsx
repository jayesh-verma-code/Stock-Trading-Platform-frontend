import React from 'react'
import HeadingPara from '../Utility/HeadingPara' 
import { ArrowRight } from 'lucide-react';

const Pricing = () => {
  return (
    <div className='row lg:px-[20rem] px-[4rem] py-[10rem] text-[#464646]'>
      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
        <HeadingPara 
        heading={"Unbeatable pricing"}
        para={"We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges."}/>
        <a className='flex items-center w-fit justify-center gap-4 text-[1.6rem] text-[#2885d1]' href=""><p>See pricing</p><ArrowRight className='pt-1' size={20} /></a>
      </div>
      <div className="col-lg-6 col-md-12 col-md-12 col-sm-12 col-12 scale-[0.8]">
        <div className="flex justify-center items-center">
          <img className='w-[15rem] pt-[2rem]' src="./media/Home-Pricing.svg" alt="" />
          <img className='w-[15rem] pt-[2rem]' src="./media/Home-Pricing.svg" alt="" />
          <img className='w-[15rem] pt-[2rem]' src="./media/Home-Pricing-2.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Pricing