import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './Components/MovieCard';
import MovieCardSummary from './Components/MovieCardSummary';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import MovieForm from './Components/MovieForm';

function App() {

  const [moviedata, setMoviedata] = useState()
  console.log("data", moviedata)

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("movieData"))
    setMoviedata(localData || "")
  }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<MovieCard setMoviedata={setMoviedata} />} />
          <Route exact path="/movie-detail" element={<MovieCardSummary moviedata={moviedata} />} />
          <Route exact path="/movie-form" element={<MovieForm moviedata={moviedata} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
