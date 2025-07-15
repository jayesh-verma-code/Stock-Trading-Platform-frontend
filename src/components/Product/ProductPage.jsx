import React from 'react'
import Kite from './Kite'
import Console from './Console'
import Coin from './Coin'
import KiteAPI from './KiteAPI'
import VarsityMobile from './VarsityMobile'
import Universe from './Universe'
import Hero from './Hero'

const ProductPage = () => {
  return (
    <div>
      <Hero />
      <Kite/>
      <Console/>
      <Coin/>
      <KiteAPI/>
      <VarsityMobile/>
      <Universe/>
    </div>
  )
}

export default ProductPage