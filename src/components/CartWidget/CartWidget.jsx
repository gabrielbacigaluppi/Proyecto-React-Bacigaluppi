import { BsFillCartFill } from "react-icons/bs";
import "./CartWidget.css";

function CartWidget() {
  return (
    <div className="carrito">
        <BsFillCartFill></BsFillCartFill>
        <span className="numero">3</span>
    </div>

  );
}

export default CartWidget;
