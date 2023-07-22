import CartWidget from "../CartWidget/CartWidget";
import logo from "../../logo.jpg";
import "./CreateMenu.css";
import { Link } from "react-router-dom";

function CreateMenu() {
  return (
    <>
      <nav className="navegacion">
        <Link to='/'><img src={logo} className="App-logo" alt="logo" /></Link>
        <ul className="menus">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category/Ropa">Ropa</Link>
          </li>
          <li>
            <Link to="/category/Calzado">Calzado</Link>
          </li>
          <li>
            <Link to="/category/Accesorios">Accesorios</Link>
          </li>
          <li>
            <Link to="/category/Relojes">Relojes</Link>
          </li>
        </ul>
        <CartWidget></CartWidget> 

      </nav>
    </>
  );
}

export default CreateMenu;
