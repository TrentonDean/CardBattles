import {React, useState} from "react";
import axios from "axios";
import cookies from 'js-cookie'

const GameStart = () => {

    const [name, setName] = useState(cookies.get("name"))

    return(
        <div>
            <h1>youre in {name}</h1>
        </div>
    )
}

export default GameStart