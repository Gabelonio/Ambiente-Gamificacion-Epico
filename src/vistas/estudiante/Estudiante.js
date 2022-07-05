import {Outlet } from "react-router-dom";
import './estudiante.css';
import MenuIzq from '../../componentes/menuIzq/MenuIzq';

//data de prueba, debe llegar por proops despues de iniciar sesion
import data from '../../data_prueba/usuarios.json';


export default function Estudiante(props) {
    const opciones=['Mi cuenta','Clases','Misiones Pendientes'];
    return( <div className="contenedor_Est">
                <MenuIzq opciones={opciones} usuario={data[0]}/>
                {console.log(data)}
                <Outlet></Outlet>
            </div>)
}