import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <div>
          <nav class="navbar navbar-expand-md navbar-dark sticky-top bg-dark">
            <div class="container-fluid">
              <Link to="/"><a class="navbar-brand" href="#">Fantastic Films</a></Link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav me-auto mb-2 mb-md-0">
                    <li class="nav-item">
                    <Link to="/"><a class="nav-link active" aria-current="page" href="#">Home</a></Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/popular-films"><a class="nav-link" href="#">Popular movies</a></Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/about"><a class="nav-link" href="#">About the developer</a></Link>
                    </li>
                </ul>
              </div>
            </div>
          </nav>
    </div>
  )
}

export default navbar 