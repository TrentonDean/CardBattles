import {React, useState} from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Welcome = () => {

    const [name, setName] = useState("")
    const [errors, setErrors] = useState([])

    const navigate = useNavigate()

    const subHandler = (e) => {
        e.preventDefault()

        axios.post("http://localhost:8000/player", {name})
            .then((res) => {
                navigate("/start")
            }).catch((err) => {
                setErrors(err)
            })
    }

    return(
        <div className="welcome">
            <h1 className="mt-4">Card Battles!</h1>
            <h5>Enter a name and get started!</h5>
            <form className="col-6 mx-auto mt-4" onSubmit={subHandler}>
                <div className="form-floating">
                    <input type="text" className="form-control text-center" id="name" placeholder="Name" value={name} onChange = {(e) => {setName(e.target.value)}}/>
                    <label htmlFor="name">Name</label>
                </div>
                {errors ? <p className="red-text">{errors}</p> : null }
            </form>
        </div>
    )
}

export default Welcome