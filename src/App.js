import './App.css';
import Mensaje from './components/Mensaje';
import Contador from './components/Contador'
import Multiplicador from './components/Multiplicador';

function App() {
  return (
    <div className="App">
      <div className="container mt-3">
        <div className="bg-secondary bg-opacity-25 rounded-3 m-2 p-3">
          <h1>Mi proyecto en React.JS</h1>
          <hr></hr>
          <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet quasi, iure aliquid
          voluptatem sapiente molestias ipsa magnam.
          </p>
          <hr></hr>
          <div className="row">
            <div className="col-md-4 col-12">
            <Mensaje 
            mensaje="Mensaje Nro. 1"
            parrafo="Lorem ipsum dolor sit,"
            color="gold"
            />

            </div>
            <div className="col-md-4 col-12">
            <Mensaje 
            mensaje="Mensaje Nro. 2" 
            parrafo="amet consectetur adipisicing elit. Eveniet quasi, iure aliquid"
            color="blue"
            />
            </div>
            <div className="col-md-4 col-12">
            <Mensaje 
            mensaje="Mensaje Nro. 3" 
            parrafo="voluptatem sapiente molestias ipsa magnam,"
            color="red"
            />
            </div>       

            <hr/>
            <Contador id="1" valorInicial="40" fondo="blue"/>     
            <Contador id="2" valorInicial="6" fondo="pink"/>     
            <hr/>

            <Multiplicador id="1" valorInicial={66} fondo="gold"/>
            <Multiplicador id="2" valorInicial={6} fondo="green"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
