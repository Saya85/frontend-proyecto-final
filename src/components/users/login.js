
import React, { useState } from 'react';
import { Link, Navigate } from "react-router-dom";
import AuthService from "../../services/auth";

/* 
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: '', password: '', isLogged: false };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    } */

function Login(){
    const [isLogged, setIsLogged] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
  

    const handleSubmit =(e) => {
        e.preventDefault();
        const res = AuthService.login(formData.email, formData.password)
        .then((res)=>{
            if (res) {
            setIsLogged(true);
        } else {
            alert('Datos incorrectos o usuario invalido.')
        } 
        })
       
        // AuthService.login(this.state.user, this.state.password).then(res => {
        //     if(res) {
        //         this.setState({isLogged: true})
        //     } else {
        //         alert('Datos incorrectos o usuario invalido.')
        //     }
        // })
    }

    const handleChange = (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }
      /*   const { isLogged } = this.state; */
        return (
            <div>
                {isLogged && (
                    <Navigate to="/series" replace={true} />
                )}
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Correo Electronico
                            <input
                                name='email' value={formData.email} onChange={handleChange} required type="text" className="form-control" placeholder="Enter your Email">
                            </input>
                        </label>
                        <br></br><br></br>
                        <label>Contraseña
                            <input
                                name='password' value={formData.password} onChange={handleChange} required type="password" className="form-control" placeholder="Enter your Password">
                            </input>
                        </label>
                    </div>
                    <br></br>
                    <div className='summit d-flex justify-content-center flex-column'>
                        <button type="submit" className="btn btn-primary margin-right-7">Login</button>
                        <Link to="/register">Registrarse</Link>
                    </div>
                </form>
            </div>
        );
    
}
export default Login;