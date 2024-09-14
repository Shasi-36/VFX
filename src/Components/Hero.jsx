import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import slider1 from "../assets/images/Sider/slider-2d.jpg";
import slider2 from "../assets/images/Sider/slider-ani.jpg";
import slider3 from "../assets/images/Sider/slider-DFM.jpg";
import slider4 from "../assets/images/Sider/slider-game.jpg";
import slider5 from "../assets/images/Sider/slider-grap.jpg";
import slider6 from "../assets/images/Sider/slider-vfx.jpg";

const Hero = () => {
  return (
    <div>
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider2}
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider3}
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider4}
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider5}
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider6}
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Hero
