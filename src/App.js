import "./App.css";
import * as React from "react";
import NavBar from "./componentes/navBar/NavBar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Testimonios from "./vistas/Testimonios";
import Preguntas from "./vistas/preguntas/Preguntas";
import Home from "./vistas/home/Home";
import SaberMas from "./vistas/saberMas/SaberMas";
import Login from "./vistas/login/Login";
import Footer1 from "./componentes/footer1/Footer1";
import Estudiante from "./vistas/estudiante/Estudiante";
import PerfilEst from "./vistas/estudiante/PerfilEst";
import ClasesEst from "./vistas/estudiante/ClasesEst";
import Registro from "./vistas/registro/Registro";

function App() {

  const [sesionIniciada, setSesionIniciada] = React.useState(false);

  return (
    <BrowserRouter>
      <NavBar sesionIniciada = {sesionIniciada} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Testimonios" element={<Testimonios />} />
        <Route path="/Preguntas" element={<Preguntas />} />
        <Route path="/SaberMas" element={<SaberMas />} />
        <Route path="/login"  element={<Login stateSetter = {setSesionIniciada}/>} />
        <Route path="/registro" element={<Registro stateSetter = {setSesionIniciada}/>} />
        <Route path="/Estudiante/*" element={<Estudiante />}>
          <Route path="Micuenta" element={<PerfilEst />} />
          <Route path="Clases" element={<ClasesEst />} />
        </Route>
        <Route path="*" element={<h1> pagina no encontrada</h1>} />
      </Routes>
      <footer>
        <Footer1 />
      </footer>
    </BrowserRouter>
  );
}

export default App;
