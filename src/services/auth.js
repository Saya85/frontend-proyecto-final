import axios from "axios";

import authHeader from './auth-header';

const API_URL = 'http://localhost:3000/user/';

class AuthService {
   getCurrentUser() {
      return JSON.parse(localStorage.getItem('userToken'));;
    }
  async login(email, password) {
      try {
        const res = await axios.post(API_URL+'login', {
            "email": email,
            "password": password
          })
          .then(response => {
            if (response.data.token) {
              localStorage.setItem("userToken", JSON.stringify(response.data.token));
            }
            return true;
           }).catch(error => {return false});
          return res;
      } catch (error) {
        
      }
  }     
    logout() {
      try {
        return axios.delete(API_URL+'logout', { headers: authHeader() })
          .then(() => {
            return true
          }).catch(() => {
            return false
          });
      } catch (error) {
      }
    }
  
    register(name,subname, email, password) {
      try {
        return axios.post(API_URL + "register", {
          "name": name,
          "subname": subname,   
          "email": email,
          "password": password
        }).then(() => {
          return this.login(email, password);
        })  
        .catch(() => {return false});
      } catch (error) {
        
      }
    }
   
  }
  
  export default new AuthService();