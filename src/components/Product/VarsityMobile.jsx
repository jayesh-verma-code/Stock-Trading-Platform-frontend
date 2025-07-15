import React from 'react'

const VarsityMobile = () => {
  return (
    <div className="">
      <div className="row lg:px-[20rem] px-[4rem] py-[4rem] text-gray-800">
        <div className="p-[1.5rem] col-lg-6 col-md-12 flex flex-col gap-[1rem] text-[1.7rem] items-center leading-[1.7]">
          <div className="overflow-hidden w-full  flex justify-center">
            <img src="./media/Product-varsity-mobile.png" alt="jayesh_verma" />
          </div>
        </div>
        <div className="p-[1.5rem] col-lg-6 col-md-12 flex flex-col gap-[2rem] text-[1.7rem] items-center justify-center lg:items-start lg:pl-[10rem] leading-[1.7]">
          <h1 className="text-[3rem] text-gray-700 font-[500]">Varsity mobile</h1>
          <p className="w-full lg:w-[70%] text-gray-600">
            An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.
          </p>

          <div className="flex gap-[2rem]">
            <span><img className="w-[90%]" src="./media/google-store.svg" alt="" /></span>
            <span><img src="./media/apple-store.svg" alt="" /></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VarsityMobile