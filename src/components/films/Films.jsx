import React from 'react'
import "./films.css"

const Films = () => {
  return (
    <div className='movies'> 
      <div className="movies-card">
          <img className='movie-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMMTcBQEEpgM1clE6PAHkS2FuPo90wcIZ4jQ&usqp=CAU" alt="" />
          <div className="movie-title">
              <h5>Dark Knight</h5>
            </div>
        </div>
        <div className="movies-card">
          <img className='movie-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMMTcBQEEpgM1clE6PAHkS2FuPo90wcIZ4jQ&usqp=CAU" alt="" />
          <div className="movie-title">
              <h5>Dark Knight</h5>
            </div>
        </div>
    </div>
  )
}

export default Films