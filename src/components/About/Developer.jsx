import React from "react";

const Developer = () => {
  return (
    <div className="mb-[6rem]">
        <h1 className="text-[3.5rem] font-[500] text-gray-800 text-center">Developer</h1>
      <div className="row lg:px-[20rem] px-[4rem] py-[4rem] text-gray-800">
        <div className="p-[1.5rem] col-lg-6 col-md-12 flex flex-col gap-[1rem] text-[1.7rem] items-center leading-[1.7]">
          <div className="overflow-hidden rounded-[50%] w-full lg:w-[70%]">
            <img src="./media/jayesh-verma.jpg" alt="jayesh_verma" />
          </div>
          <div>
            <h2 className="text-[2rem] font-[500]">Jayesh Verma</h2>
            <p className="text-[1.3rem] text-center text-gray-600">CEO and Founder</p>
        </div>
          </div>
        <div className="p-[1.5rem] col-lg-6 col-md-12 flex flex-col gap-[2rem] text-[1.7rem] items-center justify-center lg:items-start leading-[1.7]">
          <p className="w-full lg:w-[100%]">
            Jayesh Verma and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p className="w-full">
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p className="w-full">
            Playing football is his zen.
          </p>
          <p className="w-full">
            Connect on <span className="text-blue-500">Linkedin</span> / <span className="text-blue-500">Githhub</span> / <span className="text-blue-500">Instagram</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Developer;
