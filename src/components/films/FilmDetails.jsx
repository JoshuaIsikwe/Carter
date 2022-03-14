import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const apiKey = "6eb508bda626ff893db446eff50d0066";
const apiToken = "ae4a73cb0e40c46f6e642f5f7429394534b35e3b5a4c7c21438e5389eec20497";
const listId = "5a4b3c4cbe0188ca9c0b2059";

const customFieldMap = {
    firstName: "5ffc223c1b802319cb6192fb",
    surname: "5ffc224be427094809dd7b7c",
    email: "5ffc22574a33172aa21ccda1",
    phoneNumber: "5ffc22612d199f8b0e325ef4",
    movie: "5ffc672ef7f3ca718a1a9b93",
};


const FilmDetails = () => {

  const userRating = (vote) => {
    if (vote === 0) {
        return "secondary"
    }
    if (vote < 50) {
        return "danger"
    }
    if (vote >= 50 && vote < 70) {
        return "warning"
    }
    if (vote >= 70) {
        return "success"
    }
}

    let params = useParams();

    const [movie, setMovie] = useState(null);

    const createTrelloCard = (params) => {
      fetch(`https://api.trello.com/1/cards?key=${apiKey}&token=${apiToken}`, {
            "method": "POST",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json"
          },
          "body": JSON.stringify({
                "name": `${params.firstName} ${params.surname}`,
                "idList": listId,
          })
      })
      .then(res => res.json()).then(jsonData => {
          const cardId = jsonData.id;
          console.log("created card:", cardId);
          const requests = Object.keys(params).map(key => {
              return fetch(`https://api.trello.com/1/cards/${cardId}/customField/${customFieldMap[key]}/item?key=${apiKey}&token=${apiToken}`, {
                  "method": "PUT",
                  "headers": {
                      "Accept": "application/json",
                      "Content-Type": "application/json"
                  },
                  "body": JSON.stringify({
                      "value": {
                          "text": params[key]
                      }
                  })
              })
          })
          Promise.all(requests).then(responses => {
              console.log(responses);
              alert("Submission Successful :)")
          });
      })
  }

    //Fetch Genres from Array
    const renderGenres = () =>{
        if (movie !== null) {
            return movie.genres.map((genre) => genre.name).join(", ")
      }
    }

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
      
 
        const [firstName, setFirstName] = useState("");
        const [surname, setSurname] = useState("");
        const [email, setEmail] = useState("");
        const [phoneNumber, setNumber] = useState("");
        const handleSubmit= (e) => {
            e.preventDefault();
          createTrelloCard({
              firstName: firstName,
              surname: surname,
              email: email,
              phoneNumber: phoneNumber,
              movie: movie.original_title,
          })
        }
        const isFormValid= () => !((firstName === "")  || (surname === "")  || (email === "") || (phoneNumber === ""))

  if(movie===null){
      return "no movie found"
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
                        <h4>{movie.original_title} <span className='fs-6 fw-normal'>({movie.release_date.split("-")[0]})</span></h4>
                        <p>{movie.tagline}</p>
                    </div>
                    <div  className={`h-auto d-inline-block w-25 bg-${userRating(movie.vote_average * 10)}`}>
                        <h3>Rating:{movie.vote_average}</h3>
                    </div>
                    <div>
                        <h4>Overview</h4>
                        <p>{movie.overview}</p>

                        <h4>Genres</h4>
                        <p>{renderGenres()}</p>
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
                  className={`submit-button ${isFormValid() ? "" : "disabled"}`}
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