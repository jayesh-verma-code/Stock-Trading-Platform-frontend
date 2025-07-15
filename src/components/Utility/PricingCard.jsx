import React from "react";

const PricingCard = ({path, title, body}) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 flex flex-col items-center p-[3rem]">
      <img className="w-[20rem]" src={path} alt="price" />
      <h2 className="mb-[2rem] text-[2.5rem] font-[500] text-gray-700">{title}</h2>
      <p className="text-[1.5rem] w-[90%] text-center text-gray-600">
        {body}
      </p>
    </div>
  );
};

export default PricingCard;
