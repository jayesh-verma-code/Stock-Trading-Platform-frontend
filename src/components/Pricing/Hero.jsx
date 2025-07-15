import React from "react";
import PricingCard from "../Utility/PricingCard";

const Hero = () => {
    const pricingCardData = [
        {
            path: "./media/Home-Pricing.svg",
            title: "Free equity delivery",
            body: "All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage."
        },
        {
            path: "./media/Home-Pricing-2.svg",
            title: "Intraday and F&O trades",
            body: "Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades."
        },
        {
            path: "./media/Home-Pricing.svg",
            title: "Free direct MF",
            body: "All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges."
        },
    ]
  return (
    <div className="p-[4rem] text-center">
        <h1 className="text-[5rem] font-[500] text-gray-700">Charges</h1>
        <p className="text-[2rem] text-gray-600 mb-[4rem]">List of all charges and taxes.</p>
        <div className="row px-[4rem] lg:px-[20rem]">
          {pricingCardData.map((card) => {
            return (
                <PricingCard path={card.path} title={card.title} body={card.body} />
            )
          })}
        </div>
    </div>
  );
};

export default Hero;
