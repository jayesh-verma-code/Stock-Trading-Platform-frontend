import React from "react";

const Kite = () => {
  return (
    <div className="">
      <div className="row lg:px-[20rem] px-[4rem] py-[4rem] text-gray-800">
        <div className="p-[1.5rem] col-lg-6 col-md-12 flex flex-col gap-[1rem] text-[1.7rem] items-center leading-[1.7]">
          <div className="overflow-hidden w-full lg:w-[90%] flex justify-center">
            <img src="./media/Product-kite.png" alt="jayesh_verma" />
          </div>
        </div>
        <div className="p-[1.5rem] col-lg-6 col-md-12 flex flex-col gap-[2rem] text-[1.7rem] items-center justify-center lg:items-start lg:pl-[10rem] leading-[1.7]">
          <h1 className="text-[3rem] text-gray-700 font-[500]">Kite</h1>
          <p className="w-full lg:w-[70%] text-gray-600">
            Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.
          </p>
          
          <div className="flex gap-[5rem]">
            <span className="text-blue-500">Try demo →</span>
            <span className="text-blue-500">Learn more →</span>
          </div>

          <div className="flex gap-[2rem]">
            <span><img className="w-[90%]" src="./media/google-store.svg" alt="" /></span>
            <span><img src="./media/apple-store.svg" alt="" /></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kite;
