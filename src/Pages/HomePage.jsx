import React from 'react'

import Hero from "../Components/Hero"
import OurCourses from "../Components/OurCourses"
import FutureHire from '../Components/futureHire'
import Placements from '../Components/Placement'
import Bottom from '../Components/Bottom'
import Footer from '../Components/Footer'


const HomePage = () => {
  return (
    <div>
      <Hero/>
      <OurCourses/>
      <FutureHire/>
      <Placements/>
      <Bottom/>
      <Footer/>
    </div>
  )
}

export default HomePage
