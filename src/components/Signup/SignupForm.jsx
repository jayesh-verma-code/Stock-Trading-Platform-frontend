import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Signup from './Signup';
import Login from './Login';

const SignupForm = () => {
  const [signup, setSignup] = useState(true);

  return (
    <div className="">
      <div className="row lg:px-[20rem] px-[4rem] py-[4rem] text-gray-800">
        <div className="p-[1.5rem] col-lg-6 col-md-12 flex flex-col gap-[1rem] text-[1.7rem] items-center leading-[1.7]">
          <div className="overflow-hidden w-full lg:w-[90%] flex justify-center">
            <img src="./media/Singup-form.svg" alt="signup" />
          </div>
        </div>

        <div className="p-[1.5rem] col-lg-6 col-md-12 flex flex-col text-[1.7rem] items-center justify-center lg:items-start lg:pl-[10rem] leading-[1.7]">
          <div className='Signup-login flex w-[24.2rem] mb-[2rem]'>
            <div style={signup ? {backgroundColor: "#155DFC", color : "white"} : {}} onClick={() => setSignup(true)} className='cursor py-[0.5rem] px-[2rem] bg-blue-100 w-[12.1rem]  rounded-l-xl flex justify-center text-[1.7rem] items-center font-[500] text-blue-300'>Signup</div>
            <div style={!signup ? {backgroundColor: "#155DFC", color: "white"} : {}} onClick={() => setSignup(false)} className='cursor py-[0.5rem] px-[2rem] bg-blue-100 w-[12.1rem]  rounded-r-xl flex justify-center text-[1.7rem] items-center font-[500] text-blue-300'>Login</div>
          </div>
          <p className='text-[1.5rem] text-gray-400 mb-[2 rem]'>Or track your existing application</p>

          {signup ? <Signup /> : <Login />}
          

          <p className='text-[1rem] text-gray-500'>By proceeding, you agree to the <span className='text-blue-500'>Zerodha terms</span> & <span className='text-blue-500'>privacy policy</span></p>
        </div>
      </div>
    </div>
  )
}

export default SignupForm