import React from "react";

const Mensaje = (props) => {
    //console.log(props)
    //console.log(props['mensaje']) //bracket notation
    //console.log(props.mensaje) //dot notation

 //const {mensaje, parrafo, color:fondoColor} = props

//console.log(props.match?.params) // OpTIONAL CHAINING (?.)

//Si match viene undefined, desectructurá props
const {mensaje, parrafo, color:fondoColor} = props.match?.params || props // || Short circuit operation

console.log(props.match?.params) // OpTIONAL CHAINING (?.)



//Creo una función con el estilo
const funcionEstilo = (color) => {
    let colorElegido
    if(color === 'gold' )
    {
        colorElegido ={
        backgroundColor: 'purple',
        fontSize: '20px'
        }    
    }else{
        colorElegido={
            backgroundColor: color,
            fontSize: '10px'
        }      
    }
    return colorElegido
}

    return ( 
        <div className="mensaje">
            <div className="rounded-3 m-2 p-2 bg-opacity-25" style={funcionEstilo(fondoColor)}>
            <h1>{mensaje}</h1>
            <p>{parrafo}</p>
            </div>
        </div>
     );
}
 
export default Mensaje;