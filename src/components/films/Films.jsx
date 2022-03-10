import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./films.css"
import FilmDetails from './FilmDetails';
import { Link } from 'react-router-dom';

class Films extends Component {
  constructor(props) {
    super(props);
    this.state = {movies: [], page: 0};
    
  }

   addMore = async () => {
    let page = this.state.page;
    let newPage = page + 1;
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d4f7b87d7cedfdfbbb297f46aa3e8779&language=en-US&page=${newPage}`);
    const data = await response.json();
    this.setState({ 
      movies: [...this.state.movies,...data.results],
      page: newPage
    });
  }

   componentDidMount = async () => {
    window.onscroll = () => {
      console.log({ offsetHeight: document.documentElement.offsetHeight, inner: window.innerHeight + document.documentElement.scrollTop  });
      if (Math.ceil( window.innerHeight + document.documentElement.scrollTop) === document.documentElement.offsetHeight) {
        console.log('we at the bottom');
        this.addMore()
      }
    };
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=d4f7b87d7cedfdfbbb297f46aa3e8779&language=en-US&page=1");
    const data = await response.json();
    this.setState({movies: data.results, page: 1});
  }

  render() {
    const state = this.state
    const movies = this.state.movies
    const movieList = movies.map((movie) =>

        <div className="movies-card">
          <img className='movie-card-img' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" /> <span>{movie.voter_average}</span>
          
          <div className="movie-title">
              <h5><Link to={`/movies-details/${movie.id}`} >{movie.title}</Link>
    </h5>
            </div>
      </div>
);
    return (
      <div> 
        <div className='movies'>{movieList}</div>
        <div className="add-more">
            <button onClick={this.addMore}>Loading</button>
          </div>
      </div>
    );
  }
}

Films.propTypes = {

};

export default Films;