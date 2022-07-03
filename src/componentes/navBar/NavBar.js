import React from 'react'
import './navBar.css';
import {NavLink} from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const pages = ['Saber Mas', 'Testimonios', 'Preguntas'];

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
        main: '#0971f1',
        darker: '#053e85',
    },
    login: {
        main: '#007233',
        dark: '#309672',
        contrastText: '#fff'
    },
    signup: {
        main: '#35331a',
        dark: '#5a5732',
        contrastText: '#fff',
    },
  },
});


export default function NavBar(props) {

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
        
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return(
        <div>
        <AppBar position="relative"  sx={{backgroundColor : "#7db952"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> {/* Icono Barra de navegacion */}
                    <NavLink className='link' to='/'>
                        <Typography
                            variant="h6"
                            noWrap
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily : ['Maven Pro', 'cursive'].join(','),
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            APP GAMIFICACION
                        </Typography>
                    </NavLink>{/* Nombre y Link del Titulo */}

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                        <MenuIcon />
                        </IconButton>{/* Menu desplegable en la vista pequeña */}
                        <Menu                            
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' }
                            }}
                        >
                            {pages.map((page) => {
                                const dir="/"+page.replace(/ /g, "");
                                return(
                                <MenuItem  
                                    key={page} onClick={handleCloseNavMenu} 
                                    className = "navigationOptions">
                                    <NavLink className='link' to={dir} >
                                        <Typography textAlign="center" sx={{fontFamily: ['Maven Pro', 'cursive'].join(',')}} >{page}</Typography>
                                    </NavLink>
                                </MenuItem>
                            )})}
                        </Menu>{/* Barra Navegacion en Vista Reducida*/}
                    </Box>
                    {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                    {/* <NavLink className='link' to='/'>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                    </NavLink>  */} {/* Display en Vista pequeña del titulo y logo */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) =>{ 
                            const dir="/"+page.replace(/ /g, "");
                            return(
                            <NavLink key={page} className='link' to={dir}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    className = "navigationOptions"
                                    sx={{ my: 2, color: 'white', display: 'block' , fontFamily: ['Maven Pro', 'cursive'].join(',')}}
                                >
                                    {page}
                                </Button>
                            </NavLink>
                        )} )}
                    </Box>{/* Barra de Navegacion en vista completa */}

                    <Box sx={{flexGrow: 0}}>
                        <ThemeProvider theme={theme}>
                            <Button sx={{fontFamily: ['Maven Pro', 'cursive'].join(','),
                                         marginRight: "1em" }} variant="contained" color = "login">
                                Inicia sesión
                            </Button>
                            <Button sx={{fontFamily: ['Maven Pro', 'cursive'].join(',')}} variant="contained" color = "signup">
                                Inscríbete
                            </Button>
                        </ThemeProvider>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
        </div>
    )
}