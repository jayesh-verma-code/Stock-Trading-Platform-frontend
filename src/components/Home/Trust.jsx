import React from "react";
import HeadingPara from "../Utility/HeadingPara";

const Trust = () => {
  return (
    <div>
      <div className="row lg:px-[20rem] px-[4rem]  items-center py-[4rem] pb-[0] text-[#464646]">
        <div className="col-lg-6 col-md-12 col-md-12 col-sm-12 col-12">
          <h1 className="text-[3.5rem] font-[500] mb-[4rem]">Trust with confidence</h1>
          <HeadingPara
            heading={"Customer-first always"}
            para={
              "That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India."
            }
          />
          <HeadingPara
            heading={"No spam or gimmicks"}
            para={
              "No gimmicks, spam, gamification, or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies."
            }
          />
          <HeadingPara
            heading={"The Zerodha universe"}
            para={
              "Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs."
            }
          />
          <HeadingPara
            heading={"Do better with money"}
            para={
              "NWith initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money."
            }
          />
        </div>
        <div className="col-lg-6 col-md-12 col-md-12 col-sm-12 col-12">
          <img src="./media/Home-Trust.png" alt="" />
        </div>
      </div>

      <img className="row px-[20rem] py-[4rem] pt-[1rem] scale-[0.6]" src="./media/Home-Trush-2.png" alt="" />
    </div>
  );
};

export default Trust;
