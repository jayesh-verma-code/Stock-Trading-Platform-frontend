import React from 'react'

const UniverseCard = ({path, text}) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 flex flex-col gap-[1rem] justify-center items-center mb-[5rem]">
        <img className='w-[20rem]' src={path} alt="" />
        <p className='text-gray-400 font-[500] text-[1.2rem] w-[70%]'>{text}</p>
    </div>
  )
}

export default UniverseCard