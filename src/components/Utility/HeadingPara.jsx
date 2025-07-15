import React from 'react'

const HeadingPara = ({heading, para}) => {
  return (
    <div className='font-[500] mb-[3rem]'>
        <h3 className='text-[2rem] mb-[1rem]'>{heading}</h3>
        <p className='w-[80%] text-[1.7rem] font-["Roboto"] font-[400] leading-[1.8] text-[#7a7a7a]'>{para}</p>
    </div>
  )
}

export default HeadingPara