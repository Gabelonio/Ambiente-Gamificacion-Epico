import React from "react";
import "./registro.css";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";

import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { Button, Link } from "@mui/material";

/* Estilos del boton "Inscríbete" */
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  width: "144px",
  height: "44px",
  borderRadius: "10px",
  backgroundColor: "#008080",
  margin: "auto",
  marginTop: "45px",
  fontFamily: "Sarabun, sans-serif",
  "&:hover": {
    backgroundColor: "#218c8c",
  },
}));

export default function Registro(props) {
  const navigate = useNavigate();

  const [usuario, setusuario] = useState({
    email: "",
    pasword: "",
    nombre: "",
    institucion: "",
    rol: "estudiante",
  });

  const handleChange = (e) => {
    setusuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const comprobar = () => {
    console.log(usuario);
    //Antes de entrar deberia comprobar el usuario y determinar a donde debe navegar
    navigateToStudentView();
  };

  function navigateToStudentView() {
    navigate("/Estudiante");
  }

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos="fade-down" data-aos-once="true">
      <div className="formulario">
        <h1 className="registro_title">Inscríbete</h1>
        <form>
          <p>Nombre</p>
          <input
            type="text"
            name="nombre"
            value={usuario.nombre}
            onChange={handleChange}
            required
          ></input>
          <p>Institucion Educativa</p>
          <input
            type="text"
            name="institucion"
            value={usuario.institucion}
            onChange={handleChange}
            required
          ></input>
          <p>Rol</p>
          <input
            className="radio_input"
            type="radio"
            id="estudiante"
            name="rol"
            value="estudiante"
            onChange={handleChange}
            checked />
          <label htmlFor="estudiante">Estudiante</label>
          <input
            className="radio_input"
            type="radio"
            id="docente"
            name="rol"
            value="docente"
            onChange={handleChange} />
          <label htmlFor="docente">Docente</label>
          <p>Email</p>
          <input
            type="email"
            name="email"
            value={usuario.email}
            onChange={handleChange}
            required
          ></input>
          <p>Contraseña</p>
          <input
            type="password"
            name="pasword"
            value={usuario.pasword}
            onChange={handleChange}
            required
          ></input>
          <p className="crear">
            ¿Ya tienes una cuenta?
            <Link
              to="/login"
              underline="hover"
              component={RouterLink}
              sx={{ fontFamily: ["Sarabun", "sans-serif"].join(",") }}
            >
              inicia sesión
            </Link>
          </p>
        </form>
        <ColorButton variant="contained" onClick={comprobar}>
          Inscríbete
        </ColorButton>
      </div>
    </div>
  );
}
