import React from 'react'
import { FcRating } from "react-icons/fc";
import { useNavigate } from "react-router-dom"


const CardSummary = ({ moviedata }) => {
    const navigate = useNavigate()
    const handleButton = () => {
        navigate("/movie-form")
        localStorage.removeItem("userData")
    }

    const localData = JSON.parse(localStorage.getItem("movieData"))

    const movie = localData ? localData : moviedata

    console.log("localData =", localData)

    return (
        <>
            <div className="box-container">
                <div className="img-box">
                    <img src={movie?.show?.image.medium} className='box-img' alt="" />
                </div>
                <div className="desc-container">
                    <p className='title'>{movie?.show?.name}</p>
                    <p className='rating'>Rating: {movie?.show?.rating.average} <FcRating /></p>
                    <h3 className='top'>Genres: <span className='genre'> {movie?.show?.genres} </span></h3>
                    <p className='summary'>{movie?.show?.summary}</p>
                    <button className='button' onClick={handleButton}>Book a Ticket</button>
                </div>
            </div>

        </>
    )
}

export default CardSummary
