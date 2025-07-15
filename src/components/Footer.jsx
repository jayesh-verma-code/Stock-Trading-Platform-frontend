import React from 'react'
import { Github, Linkedin, Instagram, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <div>
      <div className="row lg:px-[20rem] py-[4rem] px-[4rem] bg-[#fafafa] text-[#747474]">
        <div className="col-lg-4 col-md-12 mb-[3rem]">
          <img className='w-[13rem] mb-[2rem]' src="./media/Zerodha-Logo.svg" alt="" />
          <p className='text-[1.2rem] w-[20rem] leading-[1.7] mb-[1rem]'>© 2010 - 2025, Zerodha Broking Ltd.
            All rights reserved.
          </p>
          <hr className='w-[52%] mb-[2rem] text-[#adadad8a]' />
          <div className='flex gap-[3rem] mb-[2rem]'>
            <Github />
            <Linkedin />
            <Instagram />
            <MessageCircle />
          </div>
          
          <div className='flex items-center gap-4'>
            <Mail /><span className='text-[1.3rem]'>jayeshvermaformalwork@gmail.com</span>
          </div>
        </div>

        <div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-[3rem]">
          <ul className='text-[1.5rem]'> <span className='text-[2rem] font-[500] text-[#595959]'>Account</span>
            <li className='py-[0.7rem]'>Open demat account</li>
            <li className='py-[0.7rem]'>Minor demat account</li>
            <li className='py-[0.7rem]'>NRI demat account</li>
            <li className='py-[0.7rem]'>Commodity</li>
            <li className='py-[0.7rem]'>Dematerialisation</li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-[3rem]">
          <ul className='text-[1.5rem]'> <span className='text-[2rem] font-[500] text-[#595959]'>Support</span>
            <li className='py-[0.7rem]'>Contact us</li>
            <li className='py-[0.7rem]'>Support Portal</li>
            <li className='py-[0.7rem]'>How to file a complain?</li>
            <li className='py-[0.7rem]'>Bulletin</li>
            <li className='py-[0.7rem]'>Circular</li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-[3rem]">
          <ul className='text-[1.5rem]'> <span className='text-[2rem] font-[500] text-[#595959]'>Compnay</span>
            <li className='py-[0.7rem]'>About</li>
            <li className='py-[0.7rem]'>Philosophy</li>
            <li className='py-[0.7rem]'>Press & media</li>
            <li className='py-[0.7rem]'>Careers</li>
            <li className='py-[0.7rem]'>Open Source</li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-[3rem]">
          <ul className='text-[1.5rem]'> <span className='text-[2rem] font-[500] text-[#595959]'>Quick links</span>
            <li className='py-[0.7rem]'>Upcoming IPOs</li>
            <li className='py-[0.7rem]'>Brokerage charges</li>
            <li className='py-[0.7rem]'>Market holidays</li>
            <li className='py-[0.7rem]'>Economic calendar</li>
            <li className='py-[0.7rem]'>Market</li>
          </ul>
        </div>
      </div>

      
    </div>
  )
}

export default Footer