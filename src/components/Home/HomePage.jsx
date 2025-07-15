import React from 'react'
import Navbar from './../Navbar'
import Hero from './Hero'
import Trust from './Trust'
import Pricing from './Pricing'
import Education from './Education'
import OpenAccount from './../OpenAccount'
import Footer from './../Footer'
import Developer from '../About/Developer'


const HomePage = () => {
  return (
    <div className='font-["Roboto"]'>
        <Hero />
        <Trust />
        <Pricing />
        <Education />
        <OpenAccount />
        <Developer/>
    </div>
  )
}

export default HomePage
