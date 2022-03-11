import { data } from 'infinite-scroll/js/core';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';




const FilmDetails = () => {

    let params = useParams();
    console.log(params)

    const [movie, setMovie] = useState([]);
    

    useEffect(() => {
        // declare the async data fetching function
        const fetchData = async () => {
          // get the data from the api
          const data = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=d4f7b87d7cedfdfbbb297f46aa3e8779&language=en-US`);
          const json = await data.json();

          // set state with the result
          setMovie(json);
        }
        
        // call the function
        fetchData()
          // make sure to catch any error
          .catch(console.error);;
      }, [])
      

    
  return (
      
    <div>
         <div>
                <div className='movies-details'>
                <div className="movie-picture">
                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}  alt="" />
                </div>
                <div className="movie-info">
                    <div className=''>
                        
                        <h4>{movie.original_title}</h4><p>({movie.release_date})</p>
                        <p>{movie.tagline}</p>
                    </div>
                    <div className='rating'>
                        <h3>{movie.vote_average}</h3>
                    </div>
                    <div>
                        <h4>Overview</h4>
                        <p>{movie.overview}</p>

                        <h4>Genres</h4>
                        <p></p>
                    </div>
                </div>
            </div>
                    
            <div className='form-wrapper'>
                <form >
                    <input type="text" placeholder='First Name' name="first_name" />
                    <input type="text" placeholder='Second Name' name="second_name" />
                    <input type="text" placeholder='Email' name="user_email" />
                    <input type="text" placeholder='Phone number' name="phone_number" />
                    <button className='submit-button'>Get film</button>
                  </form>

                </div>
           </div>
    </div>
  )
}

export default FilmDetails;