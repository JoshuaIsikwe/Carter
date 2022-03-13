import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "./home.css"

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {movies: []};
  }

  async componentDidMount() {
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=d4f7b87d7cedfdfbbb297f46aa3e8779&language=en-US&page=1");
    
    const data = await response.json();
    this.setState({movies: data.results});
  }


  render() {
    return (
      <div>
            <div className='home'>
          <div className="home-container">
            <video  src='./videos/car_video.mp4' autoPlay loop muted></video>
           
            <h1>Welcome to Fantastic Movies</h1>
            <p>We have a wide selection of films to watch</p>
            <div className=''>
            <Link to="/popular-films" className="button-37">Popular movies</Link>
            </div>
          </div>
        </div>
    </div>
    )
  }
}
