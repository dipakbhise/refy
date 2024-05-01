import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import PricingComponent from '@/components/pricing/Pricing'
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