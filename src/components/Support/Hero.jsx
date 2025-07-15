import React from 'react'
import {Search} from 'lucide-react';

const Hero = () => {
  return (
    <div className='px-[4rem] lg:px-[20rem] py-[6rem] bg-[#387ED1] text-white'>
        <h2 className='text-[2.5rem] pb-[4rem] font-[500]'>Support Portal</h2>
        <div className="row">
            <div className="col-lg-6 col-md-12 flex flex-col gap-[2rem]">
                <h3 className='text-[2.4rem] leading-[1.2]'>Search for an answer or browse help topics to create a ticket</h3>
                <div className='bg-[#f7f7f7] flex justify-between items-center text-gray-600 text-[1.5rem] rounded-xl'>
                    <input className='bg-[#f7f7f7] rounded-xl p-[1.5rem] w-[80%] border-0' type="text" placeholder='Eg: how do i activate F&O, why is my order getting rejected...' />
                    <span className='px-[1.5rem] text-gray-500'><Search /></span>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 underline text-[1.5rem] mb-[1rem]">Track account opening</div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 underline text-[1.5rem] mb-[1rem]">Track segment activation</div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 underline text-[1.5rem] mb-[1rem]">Intraday margins</div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 underline text-[1.5rem] mb-[1rem]">Kite user manual</div>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 lg:px-[4rem]">
                <h2 className='text-[2rem] font-[500] mb-[2rem]'>Featured</h2>
                <ul className='px-[3rem] text-[1.8rem] flex flex-col gap-[1rem]'>
                    <li className='flex gap-[1rem]'><div>1.  </div><span className='underline'> Quarterly Settlement of Funds (This month)</span></li>
                    <li className='flex gap-[1rem]'><div>2.  </div> <span className='underline'>Exclusion of F&O contracts on 8 securities from August 29, 2025</span></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Hero