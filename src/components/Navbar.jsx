import { NavLink } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Mi proyecto de React</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/entrada">Entrada</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/mensaje-4">Mensaje 4</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/mensaje-5">Mensaje 5</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/mensaje-6/Hola-06/parrafo-06/red">Mensaje 6</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/mensaje-7/Hola-07/parrafo-07/blue">Mensaje 7</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>


     );
}
 
export default Navbar;