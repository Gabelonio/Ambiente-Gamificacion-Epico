import Ficha from '../../componentes/ficha/Ficha';
import './clasesEst.css';


export default function ClasesEst(props){

    const data=['Matematicas 1', "id_ de la clase?"]
    return( <div>
               <div className="misClases">
                    <Ficha/>
               </div>

               <div className="ingresarClase">buscar clase</div>
            </div>)

}