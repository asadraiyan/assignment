import React, { useEffect, useState, } from 'react'
import { useNavigate } from "react-router-dom"
import { FcRating } from "react-icons/fc";



const MovieCard = ({ setMoviedata }) => {
    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    const getMovies = async () => {
        const response = await fetch("https://api.tvmaze.com/search/shows?q=all")
        const resJson = await response.json()
        // console.log(resJson)
        setUsers(resJson)
    }
    useEffect(() => {
        getMovies()
    }, [])

    const handleClick = (data) => {
        navigate("/movie-detail")
        setMoviedata(data)
        localStorage.setItem("movieData", JSON.stringify(data))
    }
    return (
        <>
            <div className="main-heading"><h1 className='heading'>List Of Movies</h1></div>
            <div className="card-wrapper">
                {
                    users.map((curelement) => {

                        return (
                            <>
                                <div className="card-container" key={curelement.id} onClick={() => handleClick(curelement)}>
                                    <img src={curelement.show.image?.medium} alt="" className='card-img' />
                                    <div className="card-body">
                                        <h4 className='card-title'>{curelement.show.name}</h4>
                                    </div>
                                    <div className="movie-detail">
                                        <span><span className='font-weight'>Genres: </span>{curelement.show?.genres}</span>
                                        <span><span className='font-weight'>Rating: </span>{curelement.show?.rating.average} <FcRating /></span>
                                    </div>
                                </div>

                            </>
                        )

                    })

                }
            </div>

        </>
    )
}

export default MovieCard
