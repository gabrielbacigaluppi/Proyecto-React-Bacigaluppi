import { BsFillCartFill } from "react-icons/bs";
import "./CartWidget.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function CartWidget() {
  const [quantity, setQuantity] = useState(0);

  function sumOne() {
    setQuantity(quantity + 1);
  }

  function restOne() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className="carrito">
      <Link to="/cart"><BsFillCartFill></BsFillCartFill></Link>
      
      <span className="numero">{quantity}</span>
      <div className="btnCantidad">
        <button className="smallbtn" onClick={sumOne}>+</button>
        <button className="smallbtn" onClick={restOne}>-</button>
      </div>

    </div>
  );
}

export default CartWidget;
