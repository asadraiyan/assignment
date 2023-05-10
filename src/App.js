import { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Card';
import CardSummary from './Components/CardSummary';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Form from './Components/Form';

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
          <Route exact path="/" element={<Card setMoviedata={setMoviedata} />} />
          <Route exact path="/movie-detail" element={<CardSummary moviedata={moviedata} />} />
          <Route exact path="/movie-form" element={<Form moviedata={moviedata} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
