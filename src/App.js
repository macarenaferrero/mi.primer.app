import './App.css';
import Mensaje from './components/Mensaje';

function App() {
  return (
    <div className="App">
      <div class="container mt-3">
        <div class="bg-secondary bg-opacity-25 rounded-3 m-2 p-3">
          <h1>Mi proyecto en React.JS</h1>
          <hr></hr>
          <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet quasi, iure aliquid
          voluptatem sapiente molestias ipsa magnam.
          </p>
          <hr></hr>
          <div class="row">
            <div class="col-md-4 col-12">
            <Mensaje 
            mensaje="Mensaje Nro. 1"
            parrafo="Lorem ipsum dolor sit,"
            color="gold"
            />

            </div>
            <div class="col-md-4 col-12">
            <Mensaje 
            mensaje="Mensaje Nro. 2" 
            parrafo="amet consectetur adipisicing elit. Eveniet quasi, iure aliquid"
            color="blue"
            />
            </div>
            <div class="col-md-4 col-12">
            <Mensaje 
            mensaje="Mensaje Nro. 3" 
            parrafo="voluptatem sapiente molestias ipsa magnam,"
            color="red"
            />
            </div>            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
