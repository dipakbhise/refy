import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import PricingComponent from '@/components/Pricing'
import React from 'react'

const Pricing = () => {
  return (
    <React.Fragment>
      <Navbar/>
        <PricingComponent/>
        <Footer/>
    </React.Fragment>
  )
}

export default Pricing