
import React, { useState, useEffect} from "react";
import { Link, useParams, useNavigate  } from "react-router-dom";
const seriesServices = require("../../services/seriesServices");


function Series(){
    const navigate = useNavigate();
    const [serie, setSerie] = useState();
    useEffect(() => {
        seriesServices.seriesAll()
        .then(res => setSerie(res.data))
        },[])
    console.log(serie)
    const gotoserie = (e)=>{
        console.log(e.target.name)
        navigate('/series/' + e.target.name);
    }
    return(
        <div >
            <h2>series</h2>
            <ul className="d-flex">
                {serie&&
                    serie.map((anime,i)=>{
                        return(
                            <li key={i} onClick={gotoserie} >
                                <img src={anime.image} name={anime.name}></img>
                                <h4>{anime.name}</h4>
                                <p>{anime.description}</p>
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    )

}

export default Series