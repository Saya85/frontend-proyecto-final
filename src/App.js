import './App.css';
import "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/layout';
import Series from './components/pages/series'
import Home from './components/home';
import Login from './components/users/login';
import Logout from './components/users/logout';
import Register from './components/users/register';
import DragonBall from './components/pages/dragonball';
import Naruto from './components/pages/naruto';
import DragonQuest from './components/pages/dragonquest';
import Comentarios from './components/pages/comentarios';
import Capitulo from './components/pages/capitulo';


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
          <Route path='/series/DragonBall' element={<DragonBall/>}/> 
          <Route path='/series/Naruto' element={<Naruto/>}/> 
          <Route path='/series/DragonQuest' element={<DragonQuest/>}/>
          <Route path='/capitulo/:id' element={<Capitulo/>}/> 
          <Route path='/comentario/:id' element={<Comentarios/>}/>
        </Route>  
      </Routes>
    </div>
  );
}

export default App;