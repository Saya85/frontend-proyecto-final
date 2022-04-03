
import axios from "axios";

const API_URL = 'http://localhost:3000/series/';

class seriesServices {
    seriesAll() {
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
    getByName(name) {
        try {
            const res = axios.get(API_URL + "" + name)
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
export default new seriesServices();