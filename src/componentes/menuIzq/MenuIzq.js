import { Link } from 'react-router-dom';
import './menuIzq.css';


export default function MenuIzq({opciones, usuario}) {

    console.log(usuario);

    function eleccion(e){

        const op = document.querySelectorAll('.opciones');

        op.forEach(item=>{
            item.classList.remove('activa')
        })

        e.currentTarget.classList.toggle('activa')

        const a= document.querySelector('.animacion_menu_izq');
        a.classList.toggle('esconder')

    }

    const animation =(e)=>{
        
        const a= document.querySelector('.animacion_menu_izq');
        a.classList.toggle('esconder')
    }


    return( 
        <div>
        <div className='contenedor_menu'>
            <div className="menu_izt">
                <div className='resm_perfil'>
                    <div className='img_perf'>
                        <img src='https://marketplace.canva.com/EAEkB8aSmJU/1/0/1600w/canva-rosa-y-amarillo-gato-moderno-dibujado-a-mano-abstracto-imagen-de-perfil-de-twitch-R-0ekToDIBE.jpg' alt='imagen de perfil'/>
                    </div>
                    <p>{usuario.nombre}</p>
                    <p>{usuario.tipo}</p>
                </div>
                {opciones.map(op=>{ 
                        const dir= op.replace(/ /g, "");
                    return <div key={op} className='opciones' onClick={eleccion}>
                                <Link className='link' to={dir}>{op}</Link>
                            </div>})}
            </div>    
        </div>

        <div className='menu_despl_izq'>
                <div className='desplegar' onClick={animation}>
                    <i className="fa-solid fa-bars"></i>
                </div>

                <div className='animacion_menu_izq esconder'>
                    <div className='resm_perfil'>
                        <div className='img_perf'>
                            <img src='https://marketplace.canva.com/EAEkB8aSmJU/1/0/1600w/canva-rosa-y-amarillo-gato-moderno-dibujado-a-mano-abstracto-imagen-de-perfil-de-twitch-R-0ekToDIBE.jpg' alt='imagen de perfil'/>
                        </div>
                        <p>{usuario.nombre}</p>
                        <p>{usuario.tipo}</p>
                    </div>
                    {opciones.map(op=>{ 
                            const dir= op.replace(/ /g, "");
                        return <div key={op+'2'} className='opciones' onClick={eleccion}>
                                    <Link className='link' to={dir}>{op}</Link>
                                </div>})}
                </div>
                
        </div>

        </div>
        
        )

}


