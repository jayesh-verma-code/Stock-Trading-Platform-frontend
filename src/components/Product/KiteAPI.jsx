import React from 'react'

const KiteAPI = () => {
  return (
    <div className="">

      <div className="row lg:px-[20rem] px-[4rem] py-[8rem] text-gray-800">

        <div className="p-[1.5rem] col-lg-6 col-md-12 flex flex-col gap-[2rem] text-[1.7rem] items-center justify-center lg:items-start lg:pl-[10rem] leading-[1.7]">
          <h1 className="text-[3rem] text-gray-700 font-[500]">Kite Connect API</h1>
          <p className="w-full lg:w-[70%] text-gray-600">
            Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.
          </p>
          
          <div className="flex gap-[5rem]">
            <span className="text-blue-500">Kite Connect →</span>
          </div>

        </div>

        <div className="p-[1.5rem] col-lg-6 col-md-12 flex flex-col gap-[1rem] text-[1.7rem] items-center leading-[1.7]">
          <div className="overflow-hidden w-full flex justify-center">
            <img src="./media/Product-kit-api.svg" alt="jayesh_verma" />
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default KiteAPI