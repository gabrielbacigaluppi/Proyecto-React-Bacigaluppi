import { useState } from "react";

function ItemCount({stock, onAddToCart}) {
  const [quantity, setQuantity] = useState(1);

  function sumOne() {
    if(quantity === stock){
    }
    else{
    setQuantity(quantity + 1);
    }
  }

  function restOne() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className="carrito">      
      <span className="numero">{quantity}</span>
      <div className="btnCantidad">
        <button className="smallbtn" onClick={sumOne}>+</button>
        <button className="smallbtn" onClick={restOne}>-</button>
        <button className="smallbtn" onClick={()=>onAddToCart(quantity)} >Agregar al carrito</button>
      </div>

    </div>
  );
}

export default ItemCount;


