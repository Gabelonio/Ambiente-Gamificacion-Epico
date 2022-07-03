import './saberMas.css';

export default function SaberMas(props) {

    return(
        <div>
            <div className='sm_title'>
                <div>
                    <h1> Promueve la motivación <br/>en el aprendizaje.</h1>
                </div>
                <div>
                    <p>
                    La motivación es el aspecto vital del por qué iniciamos,<br/> 
                    continuamos y terminamos nuestros compromisos y<br/>
                    proyectos.
                    </p>
                </div>
            </div>
            <div className='saberMas_contenedor'>
                <div className="sm_text">
                    <h1>Una nueva manera de conectar con alumnos</h1>
                    <button className='bt_home'>Unete</button>
                </div>
                <div  className="sm_img">
                <img alt='Img de presenatcion' src='https://www.pandasecurity.com/es/mediacenter/src/uploads/2020/07/pandasecurity-juegos-online.jpg'/>
                </div>
                <div className="sm_text">
                    <h1>Una nueva manera de conectar con alumnos</h1>
                    <button className='bt_home'>Unete</button>
                </div>
                <div  className="sm_img">
                <img alt='Img de presenatcion' src='https://www.pandasecurity.com/es/mediacenter/src/uploads/2020/07/pandasecurity-juegos-online.jpg'/>
                </div>
            </div>
        </div>
    )
}