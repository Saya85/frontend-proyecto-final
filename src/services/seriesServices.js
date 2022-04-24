
import axios from "axios";

const API_URL = 'http://localhost:3000/series/';


 
   export const seriesAll=()=> {
        
           return axios.get(API_URL + "")
               
  
    }
    export const getByName=(name)=> {
        try {
            const res =  axios.get(API_URL + name)
                .then((response) => {
                    return response.data;
                }).catch(() => {
                    return false;
                });
            return res;
        } catch (error) {
        }
    }


