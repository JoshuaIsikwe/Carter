import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import FilmDetails from './components/films/FilmDetails';
import Films from './components/films/Films';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/popular-films' element={<Films/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/movies-details/:id' element={<FilmDetails/>}></Route>
          </Routes>
      </Router>
  );
}

export default App;