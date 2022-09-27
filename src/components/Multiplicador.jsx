//Usar sfc

import { useState } from "react";
import './Multiplicador.css';
import './Multiplicador.scss'

const Multiplicador = (props) => {
    console.log(props)

    const {id, valorInicial, fondo:backgroundColor} = props
    
    const multiplicar = () =>   {
        setMultiplicador(prevstate => prevstate *4)
    }
    
    const [multiplicador, setMultiplicador] = useState(valorInicial)

    return ( 
        <div className="multiplicador">
            <div className="bg-opacity-25 rounded-4 my-4 p-4" style={{backgroundColor}}>
                <h1>Multiplicador Nro {id}</h1>
                <h4 className="alert alert-warning">
                    Multiplicador {multiplicador}
                </h4>
                <div className="parrafo mb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet quasi, iure aliquid
                voluptatem sapiente molestias ipsa magnam.
                </div>

                <button className="btn btn-success ms-4" onClick={()=> setMultiplicador(multiplicador *2)}>
                    Multiplicar *2
                </button>
                <button className="btn btn-success ms-4" onClick={multiplicar}>
                    Multiplicar *4
                </button>
            </div>
        </div>
     )
}
 
export default Multiplicador;