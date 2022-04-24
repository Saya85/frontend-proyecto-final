import React, { useState,useEffect  } from "react";
import { Link, useNavigate } from "react-router-dom";
import capituloServices from "../../services/capitulos";


function DragonBall(){
    const navigate = useNavigate();
    const [capitulos, setCapitulo] = useState();
    useEffect(() => {
        capituloServices.getBySerieId(2)
        .then(res => setCapitulo(res))
        },[])
        const gotocapitulo = (e)=>{
            console.log(e.target.className)
            navigate('/capitulo/' + e.target.className);
        }
    return(
        <div >
            <h1 className="titulo">Dragon Ball</h1>
            <ul className="d-flex flex-column justify-content-center ali">
                {capitulos&&
                    capitulos.map((capitulo,i)=>{
                        return(
                            <li className="capitulo" key={i} >
                                <h3 onClick={gotocapitulo} className={capitulo.id}>{capitulo.name}</h3>
                                <p onClick={gotocapitulo} className={capitulo.id}>{capitulo.description}</p>
                            </li>
                        )
                    })
                }
            </ul>
            <Link to='/series'><h3>Series</h3></Link>
        </div>
    )

}

export default DragonBall; 