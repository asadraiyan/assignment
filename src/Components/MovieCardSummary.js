import React from 'react'
import { FcRating } from "react-icons/fc";
import { useNavigate } from "react-router-dom"


const MovieCardSummary = ({ moviedata }) => {
    const navigate = useNavigate()
    const handleButton = () => {

        navigate("/movie-form")
        localStorage.removeItem("userData")
    }

    return (
        <>
            <div className="box-container">
                <div className="img-box">
                    <img src={moviedata?.show?.image.medium} className='box-img' alt="" />
                </div>
                <div className="desc-container">
                    <p className='title'>{moviedata?.show?.name}</p>
                    <p className='rating'>Rating: {moviedata?.show?.rating.average} <FcRating /></p>
                    <span><span className='font-weight'>Genres: </span>{moviedata?.show?.genres}</span>
                    <p className='summary'>{moviedata?.show?.summary}</p>
                    <button className='button' onClick={handleButton}>Book a Ticket</button>
                </div>
            </div>

        </>
    )
}

export default MovieCardSummary
