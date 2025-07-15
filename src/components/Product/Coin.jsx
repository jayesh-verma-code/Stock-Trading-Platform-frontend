import React from 'react'

const Coin = () => {
  return (
    <div className="">
      <div className="row lg:px-[20rem] px-[4rem] py-[4rem] text-gray-800">
        <div className="p-[1.5rem] col-lg-6 col-md-12 flex flex-col gap-[1rem] text-[1.7rem] items-center leading-[1.7]">
          <div className="overflow-hidden w-full  flex justify-center">
            <img src="./media/Product-coin.png" alt="jayesh_verma" />
          </div>
        </div>
        <div className="p-[1.5rem] col-lg-6 col-md-12 flex flex-col gap-[2rem] text-[1.7rem] items-center justify-center lg:items-start lg:pl-[10rem] leading-[1.7]">
          <h1 className="text-[3rem] text-gray-700 font-[500]">Coin</h1>
          <p className="w-full lg:w-[70%] text-gray-600">
            Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.
          </p>
          
          <div className="flex gap-[5rem]">
            <span className="text-blue-500">Coin →</span>
          </div>

          <div className="flex gap-[2rem]">
            <span><img className="w-[90%]" src="./media/google-store.svg" alt="" /></span>
            <span><img src="./media/apple-store.svg" alt="" /></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Coin