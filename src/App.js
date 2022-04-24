import './App.css';
import "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/layout';
import Series from './components/pages/series'
import Home from './components/home';
import Login from './components/users/login';
//import LoginAdmin from './components/admin/login-admin';
import Logout from './components/users/logout';
//import Capitulo from './components/pages/capitulo';
import Register from './components/users/register';
import Logued from './components/layout/layout-perfil';
import DragonBall from './components/pages/dragonball';
import Naruto from './components/pages/naruto';
import DragonQuest from './components/pages/dragonquest';
//import Comentarios from './components/pages/comentarios';
//import CapituloContent from './components/pages/capitulo-content';
//import RegisterAdmin from './components/admin/register-admin';
//import Alquileres from './components/alquiler/alquileres';
//import AlquileresAdmin from './components/admin/all-alquileres';
//import Alquiler from './components/alquiler/alquiler';


function App() {
  return (
    <div className="App">
      <Routes>
        {/* Paths Principales */}
        <Route path='/' element={<Layout/>}>
          <Route path='' element= {<Home/>}/>
          <Route path='/login' element={<Login/>}/> 
          <Route path='/series' element={<Series/>}/>
          <Route path='/register' element={<Register/>}/> 
          <Route path='/series/dragon%20ball' element={<DragonBall/>}/> 
          <Route path='/series/naruto' element={<Naruto/>}/> 
          <Route path='/series/dragon%quest' element={<DragonQuest/>}/> 
      </Route>  
        {/* <Route path='/logued' element={<Logued/>}>
          
          <Route path='/logout' element={<Logout/>}/>  */}
           {/* <Route path='/movies' element={<Movies/>}/>
           <Route path='/alquiler/:id' element={<Alquiler/>}/>
           <Route path='/alquileres' element={<Alquileres/>}/> 
           <Route path='/capitulo/:id' element={<CapituloContent/>}/>
          <Route path='/comentarios' element={<Comentarios/>}/>*/}
     
       {/*  <Route path='/admin' element={<LayoutAdmin />}>
          <Route path='' element= {<Home/>}/>
           <Route path='login' element={<LoginAdmin />} /> 
           <Route path='register' element={<RegisterAdmin />} /> 
           <Route path='alquileres' element={<AlquileresAdmin />}/>
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;