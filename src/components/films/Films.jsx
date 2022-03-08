import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./films.css"

class Films extends Component {
  constructor(props) {
    super(props);
    this.state = {movies: []};
  }

   addMore = async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=d4f7b87d7cedfdfbbb297f46aa3e8779&language=en-US&page=2");
    const data = await response.json();
    this.setState({ 
      movies: [...this.state.movies,...data.results]
    });
  }

  async componentDidMount() {
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=d4f7b87d7cedfdfbbb297f46aa3e8779&language=en-US&page=1");
    const data = await response.json();
    this.setState({movies: data.results});
  }

  render() {
    const movies = this.state.movies
    const movieList = movies.map((movie) =>

        <div className="movies-card">
          <img className='movie-img' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
          
          <div className="movie-title">
              <h5>{movie.title}</h5>
            </div>
      </div>
);
    return (
      <div> 
        <div className='movies'>{movieList}</div>
        <div className="add-more">
            <button onClick={this.addMore}>Add more</button>
          </div>
      </div>
    );
  }
}

Films.propTypes = {

};

export default Films;