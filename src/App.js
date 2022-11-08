import './App.css';
import Mensaje from './components/Mensaje';
import Contador from './components/Contador'
import Multiplicador from './components/Multiplicador';
import Estructura from './components/Estructura';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Entrada from './components/Entrada';
import Navbar from './components/Navbar';
import RutaNoValida from './components/RutaNoValida';

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
            <hr/>

            </div>       
            {/* Punto de partida del Router */}
            <BrowserRouter>
            <Navbar/>
            <Switch>

              <Route exact path="/">
                <Redirect to="mensaje-5"/>
              </Route>

              {/* <Route path="/mensaje-4" component={Mensaje} />  Se podría llamar así al componenete también*/}
              <Route path="/entrada" component={() => <Entrada/>} />
              <Route path="/mensaje-4" component={() => <Mensaje
              mensaje="Mensaje N°4"
              parrafo="Lorem ipsu dolor"
              color="green"
              />} />
              <Route path="/mensaje-5" component={() => <Mensaje
              mensaje="Mensaje N°5"
              parrafo="amet consectetur adipisicing elit. Eveniet quasi, iure aliquid"
              color="gold"
              />} />

              {/* Ruteo de componentes con parametros*/}
              <Route path="/mensaje-6/:mensaje/:parrafo/:color" component={Mensaje}/>
              <Route path="/mensaje-7/:mensaje/:parrafo/:color" component={Mensaje}/>


              {/* Ruteo para rutas no validas*/}
              <Route component={RutaNoValida}/>

            </Switch>
            </BrowserRouter>

            <hr/>
            <Contador id="1" valorInicial="40" fondo="blue"/>     
            <Contador id="2" valorInicial="6" fondo="pink"/>     
            <hr/>

            <Multiplicador id="1" valorInicial={66} fondo="gold"/>
            <Multiplicador id="2" valorInicial={6} fondo="green"/>
            <hr/>
            <Estructura></Estructura>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
