import React from 'react'
import "./clase.css";
import { useParams } from "react-router-dom";
import clase from '../../data_prueba/clases.json'
import actividades from '../../data_prueba/actividades.json'
import Actividad from '../../componentes/actividadBtn/Actividad';
import { useNavigate } from "react-router-dom";

export default function Clase (props){

  

  let params = useParams();
  let idClass=params.idClass;

  function getClase(){
    //conseguir actividades de la clase con id y su relacion con el usuario 
    //se mantiene el usuario en los props 
  }
  getClase();
  
  const divFondoStyle = {
    backgroundImage: 'url(' + clase[0].img + ')',
    margin: "0",
    padding: "0",
    width: "99vw",
    height: "100vh",
    color: "black",
    backgroundSize:"100% 100%"
  };

  const navigate = useNavigate();

  function navigateClases() {
    navigate("/Estudiante/Clases");
  }


  return (
    <div className='contenedor_clase'> 
        <div className='fondo' style={divFondoStyle} >
        <button className='regresar' onClick={navigateClases}>IR A CLASES</button>
        {actividades.map(i=>{return(<Actividad data={i} idClass={idClass} key={i.id}></Actividad>)})}
        </div>
    </div>
  )
}
