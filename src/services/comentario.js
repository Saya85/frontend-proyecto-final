import axios from "axios";

import authHeader from './auth-header';

const API_URL = 'http://localhost:3000/comentario/';

class ComentarioServices {
    comentarioUser() {
        try {
            const res = axios.get(API_URL + "user", { headers: authHeader() })
                        .then((response) => {
                            return response.data;
                        }).catch(() => {
                            return false;
                        });
                    return res;
            } catch (error) {
            }
        }
    comentarioCapitulo(capitulo) {
        try {
            const res = axios.get(API_URL + "capitulo",{"capitulo": capitulo})
                .then((response) => {
                    return response.data;
                }).catch(() => {
                    return false;
                });
            return res;
        } catch (error) {
        }
    }
    crearComentario(comentario,idCapitulo) {
        try {
            const res = axios.post(API_URL + "crear",{
                "comentario": comentario,
                "idCapitulo": idCapitulo
            }, { headers: authHeader() })
                        .then((response) => {
                            return response.data;
                        }).catch(() => {
                            return false;
                        });
                    return res;
            } catch (error) {
            }
        }
        
    borrarComentario(id) {
        try {
            const res = axios.delete(API_URL + "borrar/" + id, 
            { headers: authHeader() })
                        .then((response) => {
                            return response.data;
                        }).catch(() => {
                            return false;
                        });
                    return res;
            } catch (error) {
            }
        }

    comentarioAll() {
        try {
            const res = axios.get(API_URL + "",)
                .then((response) => {
                    return response.data;
                }).catch(() => {
                    return false;
                });
            return res;
        } catch (error) {
        }
    }
}



export default new ComentarioServices();