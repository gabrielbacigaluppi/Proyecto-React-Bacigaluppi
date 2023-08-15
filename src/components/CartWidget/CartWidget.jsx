import { BsFillCartFill } from "react-icons/bs";
import "./CartWidget.css";
import { Link } from "react-router-dom";
import { cartContext } from "../../App";
import { useContext } from "react";

function CartWidget() {
  const context = useContext(cartContext);

  return (
    <div className="carrito">
      <Link to="/cart"><BsFillCartFill></BsFillCartFill></Link>
      <span>{context.getTotalItemsInCart()}</span>
    </div>
  );
}

export default CartWidget;
