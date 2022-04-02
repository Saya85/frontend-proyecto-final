import { useEffect } from "react"
import { Navigate } from "react-router-dom";
import AuthService from '../../services/auth'

const Logout = () => {

    useEffect(() => {
        AuthService.logout()
            .then(res => console.log('Logout completado'))
    })

    return <Navigate to='/'/>
}

export default Logout