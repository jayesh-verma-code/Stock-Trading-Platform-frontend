import React from 'react'
import {Link} from 'react-router-dom';
import UniverseCard from '../Utility/UniverseCard'

const Universe = () => {
  const universeCardData = [
    {
      path: "./media/Product-universe-1.png",
      text: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals."
    },
    {
      path: "./media/Product-universe-2.svg",
      text: "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more"
    },
    {
      path: "./media/Product-universe-3.svg",
      text: "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more."
    },
    {
      path: "./media/Product-universe-4.png",
      text: "Systematic trading platform that allows you to create and backtest strategies without coding."
    },
    {
      path: "./media/Product-universe-5.png",
      text: "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs."
    },
    {
      path: "./media/Product-universe-6.png",
      text: "Personalized advice on life and health insurance. No spam and no mis-selling."
    },
  ]
  return (
    <div className='flex flex-col justify-center items-center gap-[2rem] px-[4rem] lg:px-[20rem] py-[4rem] text-center'>
      <h1 className='text-[3rem] text-gray-800 font-[500]'>The Zerodha Universe</h1>
      <p className='text-[1.8rem] text-gray-700'>Extend your trading and investment experience even further with our partner platforms</p>
      <div className='row py-[4rem]'>
        {universeCardData.map((card) => {
          return (
            <UniverseCard path={card.path} text={card.text} />
          )
        })}
      </div>
      <Link className='mb-[5rem] text-[2rem] px-[3rem] py-[1rem] bg-[#4982b8] text-white font-[500] rounded-xl w-fit' to="/signup">Sign up for free</Link>
    </div>
  )
}

export default Universe