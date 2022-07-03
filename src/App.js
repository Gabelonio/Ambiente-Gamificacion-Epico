import './App.css';
import * as React from 'react';
import NavBar from './componentes/navBar/NavBar';


import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Testimonios from './vistas/Testimonios';
import Preguntas from './vistas/Preguntas';
import Home from './vistas/Home';
import SaberMas from './vistas/SaberMas';
import Footer1 from './componentes/footer1/Footer1';



function App() {

  return (
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route  path='/'    element={<Home/>}  />
          <Route  path='/Testimonios'    element={<Testimonios/>}  />
          <Route  path='/Preguntas'    element={<Preguntas/>}  />
          <Route  path='/SaberMas'    element={<SaberMas/>}  />
          <Route  path='*'  element={<h1> pagina no encontrada</h1>} />
        </Routes>
        <footer>
          <Footer1/>
        </footer>        
    </BrowserRouter>
  );
}

export default App;
