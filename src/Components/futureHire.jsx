import React from 'react'
import futureimg from "../assets/images/testimonial/future.jpg"
const FutureHire = () => {
  return (
    <div className="future ">
    <div className="fcontent flex">
      <h4>Future is here</h4>
      <p>
        The rapid advancement of technology has made Animation, VFX & games
        available to the masses, and this industry has become one of the
        fastest growing segments in the global media and entertainment market.
      </p>
    </div>
    
    <div className="futurebox ">
      <div className="lefttext">
        <p>
          According to the KPMG India-FICCI Indian Media and Entertainment
          Industry Report 2017, the Indian Animation and VFX industry grew at
          16.4 per cent in 2016 to reach a size of INR59.5 billion, driven
          majorly by a 31 per cent growth in VFX, with animation remaining
          steady at a growth rate of 9 percent. The VFX industry is fast
          emerging as an indispensable part of film making, and the
          cutting-edge work carried out by Indian studios has catapulted the
          country on to the global VFX scene. The total value of global
          animation industry was US$ 254 billion in 2017 and is projected to
          reach US$ 270 billion by 2020. This field is regarded as one of the
          favorite upcoming segments, where youngsters prove their proficiency
          way early in life. India is poised to become one of the world's
          leading markets in Gaming Sector. Currently valued at USD 890
          million, the Indian Gaming Industry is estimated for the annual
          growth rate of 14.3 per cent with mobile Gaming taking the lead at
          71% share. With its courses that are designed to make an aspirant
          job-ready, Sahasra Academy of media and Entertainment studies
          enables the students to progress towards an exceptional career.
        </p>
      </div>
      <div className="rightimg">
        <img src={futureimg} alt="" />
      </div>
    </div>
  </div>
);
  
}

export default FutureHire
