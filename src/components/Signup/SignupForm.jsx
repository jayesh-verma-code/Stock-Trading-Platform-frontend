import React from 'react'
import {Link} from 'react-router-dom'

const SignupForm = () => {
  return (
    <div className="">
      <div className="row lg:px-[20rem] px-[4rem] py-[4rem] text-gray-800">
        <div className="p-[1.5rem] col-lg-6 col-md-12 flex flex-col gap-[1rem] text-[1.7rem] items-center leading-[1.7]">
          <div className="overflow-hidden w-full lg:w-[90%] flex justify-center">
            <img src="./media/Singup-form.svg" alt="signup" />
          </div>
        </div>

        <div className="p-[1.5rem] col-lg-6 col-md-12 flex flex-col gap-[2rem] text-[1.7rem] items-center justify-center lg:items-start lg:pl-[10rem] leading-[1.7]">
          <h1>Singup now</h1>
          <p>Or track your existing application</p>
          <div>
            <span><img className='w-[3rem]' src="./media/flag.png" alt="" /></span>
            <input type="text" placeholder='Enter your mobile number' />
            <Link>Get OTP</Link>
          </div>
          <p>By proceeding, you agree to the Zerodha terms & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default SignupForm