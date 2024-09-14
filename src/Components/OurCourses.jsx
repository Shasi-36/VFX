import React from 'react'
import image1 from "../assets/images/about/1.jpg"

const OurCourses = () => {
  return (
    <div className='cardcontainer'>
      <div className="left">
<img src={image1} alt="image" />
      </div>
      <div className="right">
        <div className='course'>
            <h5>OurCourses</h5></div>
        <div className='content'>
            <p>Through our courses, Students can become professionals and build a career in Media and Entertainment industry.</p>
        </div>
        <div className='grid '>
        <div className="card ">
            <div className="cardbody">
                <h5 className='cardtitle'>VFX</h5>
                <p className='cardtext'>Visual effects have been playing the magic seamlessly for long.</p>
                <a href="#">viewmore</a>
            </div>
        </div>
        <div className="card">
            <div className="cardbody">
                <h5 className='cardtitle'>ANIMATION</h5>
                <p className='cardtext'>Over the years, animation has grown by leaps and bounds.</p>
                <a href="#">viewmore</a>
            </div>
        </div>
        <div className="card">
            <div className="cardbody">
                <h5 className='cardtitle'>GAMING</h5>
                <p className='cardtext'>Bring your vision of exciting characters,</p>
                <a href="#">viewmore</a>
            </div>
        </div>
        <div className="card">
            <div className="cardbody">
                <h5 className='cardtitle'>MULTIMEDIA</h5>
                <p className='cardtext'>Build a career in Graphic and Web Designing.</p>
                <a href="#">viewmore</a>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default OurCourses
