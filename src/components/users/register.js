import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import AuthService from "../../services/auth";

/* class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name:"", password: "", confPassword: "", email: "", submitDone: false, passwordMatch: false }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }  */
function Register(){
    const [submitDone, setSubmitDone] = useState(false);
    const [ passwordMatch, setPasswordMathch] =useState (false);
    const [formData, setFormData] = useState({
        nameUser: "",
        subname:"",
        password: "",
        confPassword: "",
        email: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        try { 
            if(formData.confPassword != formData.password) return(
                setPasswordMathch(true)
            )
            
        AuthService.register(
            formData.name,formData.subname,formData.email,formData.password)
            .then((res)=>{
                if(res){
                    setSubmitDone(true);
                }
            })    
        } catch (error) {
    }
}     
    const handleChange = (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    

      return(
        <div className="h-80 pb-5 d-flex flex-column align-items-between justify-content-center">
            <div>
                <h2 className="mb-5">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="container d-flex flex-column align-items-between justify-content-center" >
                        <label className="row m-2">
                            <p className="col-6">Nombre:</p>
                            <input className="col-6" name="name" type='text' required value={formData.name} onChange={handleChange} />
                        </label>
                        <label className="row m-2">
                            <p className="col-6">apellido:</p>
                            <input className="col-6" name="subname" type='text' required value={formData.subname} onChange={handleChange} />
                        </label>
                        <label className="row m-2">
                            <p className="col-6">email:</p>
                            <input className="col-6" name="email" type='email' required value={formData.email} onChange={handleChange} />
                        </label>
                        <label className="row m-2">
                            <p className="col-6">contrase??a:</p>
                            <input className="col-6" name="password" type='password' required value={formData.password} onChange={handleChange} />
                        </label>
                        <label className="row m-2">
                            <p className="col-6">confirmar contrase??a:</p>
                            <input className="col-6" name="confPassword" type='password' required value={formData.confPassword} onChange={handleChange} />
                        </label>
                    </div>
                    <button className="mt-5" type="submit">Acceder</button>
                </form>
                {passwordMatch && <p className="passwordMatch">Las contrase??as no coinciden.</p>}
                {submitDone && <Navigate to='/series'/>}

            </div>
        </div>
      )
  
}

export default Register;
