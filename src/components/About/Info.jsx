import React from 'react'

const Info = () => {
  return (
    <div className='row lg:px-[20rem] px-[4rem] py-[4rem] text-gray-700'>
        <div className='p-[1.5rem] col-lg-6 col-md-12 flex flex-col gap-[2rem] text-[1.7rem] items-center lg:items-end leading-[1.7]'>
            <p className='w-full lg:w-[80%]'>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
            <p className='w-full lg:w-[80%]'>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India</p>
            <p className='w-full lg:w-[80%]'>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
        </div>
        <div className='p-[1.5rem] col-lg-6 col-md-12 flex flex-col gap-[2rem] text-[1.7rem] items-center lg:items-start leading-[1.7]'>
            <p className='w-full lg:w-[80%]'>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
            <p className='w-full lg:w-[80%]'><span className='text-blue-600'>Rainmatter</span>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
            <p className='w-full lg:w-[80%]'>And yet, we are always up to something new every day. Catch up on the latest updates on our <span className='text-blue-500'>blog</span> or see what the media is <span className='text-blue-500'>saying about us</span> or learn more about our business and product <span className='text-blue-500'>philosophies.</span></p>
        </div>
    </div>
  )
}

export default Info