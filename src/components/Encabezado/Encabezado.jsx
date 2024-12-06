import BotonYEntradaTexto from "../BotonYEntradaTexto/BotonYEntradaTexto.jsx";
import Titulo from "../Titulo/Titulo.jsx";

function Encabezado(){
    return(
        <div>
            <Titulo titulo="LISTA DE TAREAS DE TOMAS"/>
            <BotonYEntradaTexto/>
        </div>
    );
}

export default Encabezado;

//Este es el primer organismo del proyecto
//acá podría pasar el título como un props del padra y poder hacer que las listas de tareas se puedan hacer para distintas personas, pero por ahora lo simplificamos dejandolo así