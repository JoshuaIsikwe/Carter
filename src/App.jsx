import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Films from './components/films/Films';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/PopularFilms' element={<Films/>}></Route>
            <Route path='/About' element={<About/>}></Route>
          </Routes>
      </Router>
  );
}

export default App;
