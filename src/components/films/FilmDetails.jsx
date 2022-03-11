import React from 'react'
import { useParams } from 'react-router-dom';




const FilmDetails = props => {

    let params = useParams();
    console.log(params)

  return (
      
    <div>
         <div>
                <div className='movies-details'>
                <div className="movie-picture">
                    <img src="data:image/jpeg;base64,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" alt="" />
                </div>
                <div className="movie-info">
                    <div className=''>
                        <h4>{params.id}</h4><p>(2006)</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className='rating'>
                        <h3>Rating: 68</h3>
                    </div>
                    <div>
                        <h4>Overview</h4>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum necessitatibus voluptas doloremque possimus laborum. Quia aliquam, maiores fugit animi sint veniam vitae corporis, voluptates ut ex eligendi fuga, labore enim.

                        <h4>Genres</h4>
                        <p>Animation,Adventure, Comedy, Family</p>
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