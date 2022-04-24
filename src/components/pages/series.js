
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
            <h1 className="titulo">series</h1>
            <ul className="d-flex">
                {serie&&
                    serie.map((anime,i)=>{
                        return(
                            <li key={i}>
                                <img src={anime.image} onClick={gotoserie} name={anime.name}></img>
                                <h3>{anime.name}</h3>
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