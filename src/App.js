
import React from 'react';
//import MovieList from './MovieList/MovieList';
import data from './data';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './movieCard.css'
//import NavB from './MovieList/NavB';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import MovieAdd from './pages/MovieAdd';
import MovieL from './pages/MovieL';


const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<MovieL data={data} />} />
        <Route path='/movies/details' element={<MovieDetails />}  />
        <Route path='/add' element={<MovieAdd />} />
      </Routes>

      { /*<NavB />
       <MovieList data={data}/> */}
      



    </div>
  )
      }

export default App
