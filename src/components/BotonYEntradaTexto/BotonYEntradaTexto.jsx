import EntradaTexto from "../EntradaTexto/EntradaTexto.jsx"
import Boton from "../Boton/Boton.jsx";

function BotonYEntradaTexto(){
    return(
        <div className="todo-input">
            <EntradaTexto/>
            <Boton clase="add-button" texto="ADD"/>
        </div>
    );
}

export default BotonYEntradaTexto;

//Esta es la primera molécula