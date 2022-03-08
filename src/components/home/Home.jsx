import React from 'react'
import "./home.css"

const Home = () => {
  return (
    <div>
        <div className='home'>
      <div className="home-container">
        <video src="/videos/car_video.mp4" autoPlay loop muted ></video>
        <h1>Welcome to Fantastic Movies</h1>
        <p>We have a wide selection of films to watch</p>
        <div className=''>
          <button className='button-37'  role="button">Browse Films</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home