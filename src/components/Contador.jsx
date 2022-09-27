import React from "react"


class Contador extends React.Component{

    constructor(props){
        super(props)
        console.log("Constructor del contador", this.props.id)

        this.incrementar = this.incrementar.bind(this)
    }


    state = {
        valor: Number(this.props.valorInicial)
    }

    incrementar(){

        //Funciona pero no hacer asi
        // let {id}= this.props
        // console.log(id);
        // this.forceUpdate()

       // this.setState({ valor: this.state.valor + 1}) ESTA OPCION VA PERFECTO - Le paso un objeto
        this.setState(prevstate => ({valor: prevstate.valor +1}),()=>{
            console.log(this.state.valor)
        }) // Le paso una función
    }

    render() {
        const {valor} = this.state
        const {fondo:backgroundColor, id} = this.props

        return(
            <div className="Contador">
                <div className="bg-opacity-25 rounded-3 my-4 p-4" style={{backgroundColor}}>
                    <h1>Contador Nro. {id}</h1>
                    <h4 className="alert alert-info">
                        Contador {valor}
                    </h4>

                    {/* <button className="btn btn-success" onClick={()=> this.incrementar()}>
                        Incrementar
                    </button> */}
                    <button className="btn btn-success" onClick={this.incrementar}>
                        Incrementar
                    </button>
                </div>
            </div>
        );
    }
}


export default Contador;