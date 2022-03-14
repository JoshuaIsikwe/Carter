import React from 'react'
import "../films/films.css"

const About = () => {
  return (
    <div className='about'>
      <div className="about-container">
        <h1>Developer Information</h1>
        <div className="info-container">
       <div className='c-info-item'><h5>Name:</h5><h5 className='dets'> Joshua</h5></div>
        <div className='c-info-item'><h5>Surname:</h5><h5 className='dets'>Isikwe</h5></div>
        <div className='c-info-item'><h5>Email:</h5><h5 className='dets'>Isikwejoshua@gmail.com</h5></div>
        <div className='c-info-item'><h5>Phone Number:</h5><h5 className='dets'>+27 74726 1744</h5></div>
        
       </div>
      </div>
    </div>
  )
}

export default About