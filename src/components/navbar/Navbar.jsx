import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import "./navbar.css"


const navbar = () => {
  return (
    <Navbar bg="warning" variant="dark" expand="lg">
    <Container>
    <Link to="/"><a className="nav-link active text-success fs-3 text-decoration-none" aria-current="page" href="#">Fantastic movies</a></Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav ">
        <Nav className=" justify-content-end ">
        <li class="nav-item">
                    <Link to="/"><a class="nav-link active text-success" aria-current="page" href="#">Home</a></Link>
                    </li>
                    <li class="nav-item success">
                      <Link to="/popular-films"><a class="nav-link text-success" href="#">Popular movies</a></Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/about"><a class="nav-link text-success" href="#">About the developer</a></Link>
                    </li>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default navbar 