import React from "react";
import './login.css';
import { useState } from 'react';
import { Link as RouterLink} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { Button, Link } from "@mui/material";

//data de prueba, debe llegar por get a la api rest
import data from '../../data_prueba/usuarios.json';

/* Estilos del boton "Entrar" */
const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    width: '144px',
    height: '44px',
    borderRadius: '10px',
    backgroundColor: '#008080',
    margin: 'auto',
    marginTop: '45px',
    fontFamily: "Sarabun, sans-serif",
    '&:hover': {
      backgroundColor: '#218c8c',
    },
}));

export default function Login(props) {

    const navigate = useNavigate();
    
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
    
        //datos que se resiven por la api res
        props.sesion(data)

        if(data===null){
            window.alert("Datos incorrectos");
        }else{
            navigateToStudentView();
        }
        
    }

    function navigateToStudentView(){
        navigate('/Estudiante');
    }

    return(
        <div>
            <div className="formulario">
                <h1 className="login_title">Inicia sesión</h1>
                <p>Email</p>
                <input type="email" name='email' value={usuario.email} onChange={handleChange} required></input>
                <p>Contraseña</p>
                <input type="password" name='pasword' value={usuario.pasword} onChange={handleChange} required></input>
                <p className='crear'>¿No has creado una cuenta?   
                    <Link   to='/registro'
                            underline="hover"
                            component={RouterLink}
                            sx={{fontFamily: ['Sarabun', 'sans-serif'].join(',')}}>regístrate aquí
                    </Link>
                </p>
                <ColorButton variant="contained" 
                             onClick={comprobar}>
                                Entrar
                </ColorButton>
            </div>
        </div>
    )
}