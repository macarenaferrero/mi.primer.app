import React from "react";

const Mensaje = ({mensaje, parrafo, color:fondoColor}) => {
    //console.log(props)
    //console.log(props['mensaje']) //bracket notation
    //console.log(props.mensaje) //dot notation

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