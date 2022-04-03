import React, { useState, useEffect} from "react";

import { Link, useParams  } from "react-router-dom";
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
    const [items, setItems] = useState( ()=>{
        console.log(id);
      ComentarioServices.comentarioCapitulo(id)
    .then(res => res.data)
    .catch(err => console.log(err))
    });
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    return (
        <div>
            <h2>Comentarios</h2>
            <ul>
            <li className="d-flex align-items-center mb-6">
                    <p className="col-4" >user</p>    
                    <p className='col-4'>fecha</p>
                    <p className='col-4'>comentario</p>
                    </li>
            {
            isLoaded && (
                items.map(comentario => (
                    <li className="d-flex align-items-center mb-6">
                    <p className="col-4" >{comentario.idUser}</p>    
                    <p className='col-4'>{comentario.comentario}</p>
                    <p className='col-4'>{comentario.createdAt}</p>
                    </li>
                )))}
            </ul>
        
        </div>
    )
    
}

export default CapituloContent