import CartWidget from "../CartWidget/CartWidget";
import logo from "../../logo.jpg";
import "./CreateMenu.css";

function CreateMenu() {
  return (
    <>
      <nav className="navegacion">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="menus"> 
          <a href="">Home</a>
          <a href="">Productos</a>
          <a href="">Clientes</a>
          <a href="">Contacto</a>
        </div>
        <CartWidget></CartWidget>
      </nav>
    </>
  );
}

export default CreateMenu;
