import { React, useState, useEffect } from 'react';
import { Link,  } from "react-router-dom";
import ComentarioServices from "../../services/comentario";



function Comentarios(props) {
    const [items, setItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            const {id} = props;
            console.log(props);
            ComentarioServices.comentarioCapitulo(id).then(response => {
                if (response === false) {
                    alert('No se puede mostrar los comentarios');
                } else {
                    console.log(response);
                    setItems(response);
                    setIsLoaded(true)
                }
            }).catch(error => {
                setIsLoaded(false);
            })
        } catch (error) {
            console.log(error)
        }
    }, []);

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

export default Comentarios