import React from "react";
import './login.css';
import { useState } from 'react';
import {NavLink} from 'react-router-dom';

export default function Login(props) {

    
    const[usuario, setusurio]=useState({
        email:'',
        pasword:''
    })
  
    const handleChange = (e)=>{
        setusurio({
          ...usuario,
          [e.target.name]: e.target.value
        })
  
    }

    const comprobar=()=>{
        console.log(usuario)
    
    }

    return(
        <div>
            <div className="formulario">
                <h1 className="login_title">Inicia sesión</h1>
                <p>Email</p>
                <input type="email" name='email' value={usuario.email} onChange={handleChange} required></input>
                <p>Contraseña</p>
                <input type="password" name='pasword' value={usuario.pasword} onChange={handleChange} required></input>
                <p className='crear'>¿No has creado una cuenta ? <NavLink to='/registro'>regístrate aquí</NavLink>.</p>
                <div className='envio' onClick={comprobar}> <p>Entrar</p></div>
            </div>
        </div>
    )
}