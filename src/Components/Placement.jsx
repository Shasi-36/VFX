import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import image1 from "../assets/images/Partners/1.png"
import image2 from "../assets/images/Partners/2.png"
import image3 from "../assets/images/Partners/3.png"
import image4 from "../assets/images/Partners/4.png"
import image5 from "../assets/images/Partners/5.png"
import image6 from "../assets/images/Partners/6.png"

const Placements = () => {
  return (
    <div className="partners">
<div className="placement">
  <h5>PLACEMENTS</h5>
  <p>At SAMES, We provide our students 100% Placement assistance with career development training and
  Show Reel/Demo Reel.</p>
</div>
   <div className="carousel">
   <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slide"
          src={image2}
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slide"
          src={image3}
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slide"
          src={image4}
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slide"
          src={image5}
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slide"
          src={image6}
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
</div>
</div>
  )
}

export default Placements;
