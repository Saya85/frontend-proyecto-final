import React, { useState, useEffect} from "react";

import { Link, useParams, useNavigate  } from "react-router-dom";
import ComentarioServices from "../../services/comentario";

/* class AlquilerContent extends React.Component{
    constructor(props){
        super(props)
        this.state = { calidad: 'HD', fecha: '', submitDone: false}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
 */
function CapituloContent(){
    const { id } = useParams();
    const navigate = useNavigate();
    const [isLoaded, setIsLoaded] = useState(false);
    const [comentarios, setComentarios] = useState();
    const comentar = (e)=>{
        
        navigate('/comentario/' + id);
    }
    useEffect(() => {
            ComentarioServices.comentarioCapitulo(id)
                .then(res =>{
                   // console.log(res);
                    setComentarios(res)
                    setIsLoaded(true);
                })
    } ,[])
        
    
    return (
        <div>
            <h2>Comentarios</h2>
            <li onClick={comentar}>comentar</li>
            <ul>
            <li className="d-flex align-items-center mb-6">
                    <p className="col-4" >user</p>    
                    <p className='col-4'>fecha</p>
                    <p className='col-4'>comentario</p>
                    </li>
            {
            comentarios && (
                //console.log("comentarios")
                //comentarios.map(comentario => (console.log(comentario)))
                 comentarios.map((comentario, i) => (
                     
                    <li key={i} className="d-flex align-items-center mb-6">
                    <p className="col-4" >{comentario.idUser}</p>    
                    <p className='col-4'>{comentario.comentario}</p>
                    <p className='col-4'>{comentario.createdAt}</p>
                    </li> 
                ))
                //) 
            )}
            </ul>
        
        </div>
    )

}

export default CapituloContent