import React, { useState,useEffect  } from "react";
import { Link, Navigate } from "react-router-dom";
const seriesServices = require("../../services/seriesServices");


function Naruto(){
    const [capitulos, setCapitulo] = useState();
    useEffect(() => {
        seriesServices.getByName('Naruto')
        .then(res => console.log(res.data))
        },[])
   
    return(
        <div >
            <h2>Naruto</h2>
            <ul className="d-flex">
                {capitulos&&
                    capitulos.map((anime,i)=>{
                        return(
                            <li key={i}>
                                <img src={anime.image}></img>
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
export default Naruto; 