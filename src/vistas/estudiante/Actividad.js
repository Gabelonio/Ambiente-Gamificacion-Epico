import React from 'react'
import "./actividad.css";
import { useParams } from "react-router-dom";
import ResmPersonaje from '../../componentes/resmPersonaje/ResmPersonaje';

//data de prueba
import claseData from '../../data_prueba/clases.json'
import actividadesData from '../../data_prueba/actividades.json'
import Pregunta from '../../tiposActividades/Pregunta';


const Actividad = ({usuarioo}) => {

    
    let usuario=usuarioo[0];
    let params = useParams();
    let idClass=params.idClass;
    let idActividad= params.idAct;
    let clase=[];
    let actividad=[];


    //agregar tipos de actividades aqui
    let tiposActividades={
      Pregunta:Pregunta
    }

      //conectar a la api res para traer los datos ya filtrados por las dos id
    function getDatos(){
      claseData.map(i=>{ if(i.id===idClass){clase=i} return true})
      actividadesData.map(i=>{ if(i.id===idActividad){actividad=i} return true})

    }

    //obtener el tipo de actividad para crear su correspondiente componente
    function crearActividad(){
      let ComponenteAct= tiposActividades[actividad.tipo]
      return (<ComponenteAct actividad={actividad}/>);
    }

    getDatos()

    const resPersonaje={
      tipo:clase.personaje,
      vida:clase.vida,
      experiencia:clase.experiencia,
      nivel:clase.nivel
      }



    return (
      <div className='contenedor_actividad'>
        <ResmPersonaje resPersonaje={resPersonaje} />
        {crearActividad()}
        <div className='actividad'>
        </div>
        
      </div>
    )
}

export default Actividad