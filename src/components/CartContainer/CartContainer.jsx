import React from "react";
import { useContext } from "react";
import { cartContext } from "../../App";
import { Link, useNavigate } from "react-router-dom";

function CartContainer() {
  const { cart, removeItemsInCart, totalCarrito } = useContext(cartContext);


  //   Hacer el conditional rendering, si no hay carrito mostrar lo siguiente:
  if (cart.length === 0) {
    return <h1>No hay productos en el carrito</h1>;
  }



  return (
    <div>
      <h1>Cart</h1>
      {cart.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <h2>Precio unitario: ${item.price}</h2>
            <h2>Cantidad a comprar: {item.count}</h2>
            <button onClick={() => removeItemsInCart(item.id)}>Eliminar</button>
          </div>
        );
      })}

      <div>Total de la compra: ${totalCarrito.toFixed(2)}</div>
      <Link to={"/checkout"}>
        <button>Comprar</button>
      </Link>
    </div>
  );
}

export default CartContainer;

