import React from 'react'
import image from "../assets/images/footer/1.jpg"
const About = () => {
  return (
    <div className="future ">
    <div className="fcontent flex">
      <h4>Welcome to VFX Studio</h4>
      
    </div>
    
    <div className="futurebox ">
      <div className="lefttext">
        <p>
       VFX Academy of Media and Entertainment Studies (SAMES) are specialist VFX training institute in Hyderabad. We offer you job oriented courses in media and entertainment industry. Our institute has more than 10 years of experienced mentors. The teaching and learning process is carried out through the use of High end computers, Wacom tablets and other equipments. SAMES provides you with the best infrastructure, which helps students to suitably work and execute projects of their own field. The other facilities provided by SAMES are green screen room for production and digital film shootings, which sharpens the student's creative and technical skills. Understanding that the improvement in teaching, in-turn lead to the formation of Research and Development team, who plans and updates the curriculum of each course as per the current industry standards. The key objective of SAMES is implementing the practical methodologies and challenging day-to-day classroom assignments.The rapid advancement of technology has made Animation, VFX & games
        available to the masses, and this industry has become one of the
        fastest growing segments in the global media and entertainment market.

        </p>
      </div>
      <div className="rightimg">
        <img src={image} alt="" />
      </div>
    </div>
  </div>
  )
}

export default About
