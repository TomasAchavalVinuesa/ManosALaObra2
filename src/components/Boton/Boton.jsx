function Boton(props){
    return(
        <button className={props.clase}>{props.texto}</button>
        //acá tengo la opción de usar props y reutilizar este átomo para ambos botones ADD y Delete
    );
}

export default Boton;