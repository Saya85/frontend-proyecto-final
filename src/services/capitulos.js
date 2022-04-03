import axios from "axios";

const API_URL = 'http://localhost:3000/capitulos/';

class capituloServices {
    capituloAll() {
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

    getBySerieId(id){
        try {
            const res = axios.get(API_URL + "" + id)
                .then((response) => {
                    return response.data;
                }).catch(() => {
                    return false;
                });
            return res;
        } catch (error) {
        }
    }
    getByCanon(canon,id){
        try {
            const res = axios.get(API_URL + "canon" + id,{
                 "canon": canon 
            })
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


export default new capituloServices();