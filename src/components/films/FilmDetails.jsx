import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';




const FilmDetails = () => {

    let params = useParams();
    console.log(params)

    const [movie, setMovie] = useState([]);

    // curl 'https://api.trello.com/1/members/me/boards?key={d9524fcf8892baaafe1c847d46c9886b}&token={f2c645402a38899b07160cb8e4adad79e07e7447a2f7b996a5959207e1e74e80}'

    // trello api key - d9524fcf8892baaafe1c847d46c9886b
    // trello account token - f2c645402a38899b07160cb8e4adad79e07e7447a2f7b996a5959207e1e74e80

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
      
 
        const [firstName, setFirstName] = useState();
        const [surname, setSurname] = useState();
        const [email, setEmail] = useState();
        const [phoneNumber, setNumber] = useState();
        const handleSubmit= (e) => {
          console.log(surname)
          e.preventDefault();
        }
      
        
    

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
            <form onSubmit={e => { handleSubmit(e) }}>
        <input 
        placeholder='First name'
          name='firstName' 
          type='text'
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <input 
        placeholder='Surname'
          name='surname' 
          type='text' 
          value={surname}
          onChange={e => setSurname(e.target.value)}
        />
        <input
        placeholder='Email'
          name='email' 
          type='text'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          placeholder='Phone Number'
          name='phoneNumber' 
          type='tel'
          value={phoneNumber}
          onChange={e => setNumber(e.target.value)}
        />
        <input 
          type='submit' 
          value='Get film' 
        />
      </form>

                </div>
           </div>
    </div>
  )
}

export default FilmDetails;