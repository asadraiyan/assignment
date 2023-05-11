import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"


const MovieForm = ({ moviedata }) => {

    const initialState = {
        movieName: moviedata ? moviedata?.show?.name : "",
        schedule: moviedata?.show.runtime ? `${moviedata?.show?.schedule?.days[0]} at ${moviedata?.show?.schedule?.time} (${moviedata?.show?.runtime}min)` : "",
        userName: "",
        phone: "",
        email: "",
    }
    const navigate = useNavigate()
    // console.log("moviedata", moviedata)
    // console.log("initialstate", initialState)

    const localData = JSON.parse(localStorage.getItem("userData"))
    // console.log("local data =", localData)

    const [formData, setFormData] = useState()
    // console.log("form data =", formData)

    useEffect(() => {
        setFormData(localData || initialState)
    }, [JSON.stringify(initialState)])


    const handleSubmitTicket = (e) => {
        e.preventDefault();

        if (formData.userName === "" || formData.phone === "" || formData.email === "") {
            alert("Please fill all the details")
        }
        else {
            alert(formData.userName + ", Your ticket is confirmed, Enjoy!")
            localStorage.setItem("userData", JSON.stringify(formData))
            navigate("/")
        }


    }

    const change = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    return (
        <>
            <div className='form-container'>
                <form className='form'>
                    <div className="form-group mt-4">
                        <label htmlFor="exampleInputPassword1">Movie Name</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Movie name" value={formData?.movieName} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Schedule</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Schedule" value={formData?.schedule} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">User Name</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="User Name" value={formData?.userName} onChange={change} name='userName' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Phone No.</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Phone.No" value={formData?.phone} onChange={change} name='phone' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={formData?.email} onChange={change} name='email' />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleSubmitTicket}>Confirm Ticket</button>
                </form>
            </div>
        </>
    )
}

export default MovieForm
