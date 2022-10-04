import { useState } from "react";
import { Fragment } from "react";
import Parrafo from "./Parrafo";


const Estructura = () => {

    const [mostrar, setMostrar] = useState(true)
    const [personas] = useState([
        'Lujan',
        'Enzo',
        'Maca',
        'Agustin'
    ])

    console.log(personas)

    const cambiarMostrar = () => {
        setMostrar(!mostrar)
    }

   /*  const sumar = (a,b)=>{
        return a+b
    } */

    //Simplificacion de arroy Function
    const sumar = (a,b) =>(a+b)

    console.log(sumar(2,4))

    const [alumnos] = useState([
        {nombre: 'Enzo', apellido: 'Meonis', edad: 22, curso: true, foto: 'https://cdn2.iconfinder.com/data/icons/diversity-v2-0-volume-01/64/aging-elderly-asian-male-256.png'},
        {nombre: 'Macarena', apellido: 'Perez', edad: 29, curso: false, foto: 'https://cdn2.iconfinder.com/data/icons/health-care-and-first-responders/64/pulmonologist-asian-female-coronavirus-256.png'},
        {nombre: 'Canela', apellido: 'Ferrero', edad: 21, curso: true, foto: 'https://cdn2.iconfinder.com/data/icons/health-care-and-first-responders/64/nurse-white-female-coronavirus-256.png'},
        {nombre: 'Paleta', apellido: 'Garcia', edad: 32, curso: false, foto: 'https://cdn2.iconfinder.com/data/icons/health-care-and-first-responders/64/police-black-male-coronavirus-256.png'}
    ])

    return (
        // <Fragment> Diferentes formas de hacer el fragmento, el return solo puede devolver un bloque.
        <>
            <div className="estructura">
            <div className="bg-primary bg-opacity rounded-3 mt-3 p-5 mb-5">
                <h3>Componenete estructura</h3>

                {/* -------------------------- */}
                <h3>Componente Condicional</h3>

                <button className="btn btn-info my-2" onClick={()=> cambiarMostrar()}>
                    {mostrar ? 'Ocultar': 'Mostrar'}
                </button>

                {
                    mostrar ? <Parrafo p="Soy un parrafo!" clase="alert alert-success"/> :
                            <Parrafo p="Soy un parrafo en peligro!" clase="alert alert-danger"/>
                }

                <hr/>
                    {/*Operador Corto Circuito | Short Circuit Operador  

                    El párrafo sólo se muestra si está true. El comando &&
                     genera que se cumpla si la primera condición es verdadera*/}

                    {
                        mostrar &&
                        <Parrafo p="Short Circuit Operator" clase="alert alert-warning" />

                    }
                <hr/>
                <h4>Loop Rendering</h4>

                <h5>
                    Array de strings en una lista
                </h5>

                {/* <ul>
                    {
                        personas.map((persona, indice)=>{
                            return (
                                <li key={indice}>{indice + 1} {persona}</li>
                            )
                        })
                    }
                </ul> */}

                {/* Otra forma de ver lo mismo, simplificando */}

                <ul>
                    {
                        personas.map((persona, indice)=>
                        (<li key={indice}>{indice + 1} {persona}</li>)
                        )
                    }
                </ul>

                <h5>Array de objetos en una tabla</h5>

                    <div className="table-responsive">
                        <table className="table table-dark">
                            <thead >
                                <tr>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Edad</th>
                                    <th>Curso</th>
                                    <th>Foto</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                            //Tambien podria concatenar con la función filter y filtrar los que NO están en el curso
                                    
                                alumnos.map((alumno, idx)=>(

                                <tr key={idx}>
                                    <td>{alumno.nombre}</td>
                                    <td>{alumno.apellido}</td>
                                    <td>{alumno.edad}</td>
                                    <td>{alumno.curso ? 'Si': 'No'}</td>
                                    <td>
                                        <img src={alumno.foto} alt={alumno.nombre} width="50"/>
                                    </td>                                          
                                </tr>

                                ))}
                            </tbody>
                        </table>
                    </div>

            </div>

            </div>
            
            <h1> Hola Mundo</h1> 
        </>
        // </Fragment>


);
}
 
export default Estructura;