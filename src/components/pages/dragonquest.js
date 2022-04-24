import React, { useState,useEffect  } from "react";
import { Link, Navigate } from "react-router-dom";
import capituloServices from "../../services/capitulos";


function DragonQuest(){
    const [capitulos, setCapitulo] = useState();
    useEffect(() => {
        capituloServices.capituloAll()
        .then(res => setCapitulo(res.data))
        },[])
    console.log(capitulos)
    return(
        <div >
            <h2>series</h2>
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
export default DragonQuest; 