import { React, useState, useEffect  } from 'react';
import { Link, Navigate, useParams, useNavigate } from "react-router-dom";
import ComentarioServices from "../../services/comentario";
import AuthService from "../../services/auth";


 function Comentarios(){
    const navigate = useNavigate();
    const { id } = useParams();
    const [isLoaded, setIsLoaded] = useState(false);
    const [comentarios, setComentarios] = useState();
    const [formData, setFormData] = useState({
        comentario: ""
    });
    const handleSubmit =(e) => {
            console.log(e.target.name)
            ComentarioServices.crearComentario(formData.comentario, id)
            .then(res =>{
                // console.log(res);
                navigate('/capitulo/' + id)
                 setComentarios(res)
                 setIsLoaded(true)
             })
 } 
 const handleChange = (e)=>{
    setFormData({...formData, [e.target.name]: e.target.value})
}
   /*  useEffect(() => {
        ComentarioServices.crearComentario(comentario, idCapitulo)
                .then(res =>{
                   // console.log(res);
                    setComentarios(res)
                    setIsLoaded(true);
                })
    } ,[])
     */
    return ( 
        <form onSubmit={handleSubmit}>
            <div className='coment'>
                <label>
                    <textarea name='comentario' value={formData.comentario} onChange={handleChange}/>
                </label>
                <input type="submit" value="Submit" />
                <Link to='/series'><h3>Series</h3></Link>
            </div>
        </form>   
    )
}

export default Comentarios