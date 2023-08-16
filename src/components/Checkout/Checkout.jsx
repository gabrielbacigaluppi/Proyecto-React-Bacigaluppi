import React, { useState } from "react";
import { useContext } from "react";
import { cartContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../services/firebase";

function Checkout() {
  const { cart, emptyCart, totalCarrito } = useContext(cartContext);
  const navigate = useNavigate();

  const [buyer, setBuyer] = useState({
    firstname: "",
    lastname: "",
    age: "",
  });

  // 1. Vamos a crear nuestro objeto de orden de compra
  // 2. Guardarlo en Firestore

  async function handleCheckout() {
    const orderData = {
      items: cart,
      buyer: buyer,
      date: new Date(),
      total: totalCarrito,
    };
    console.log(orderData)
    const idOrder = await createOrder(orderData);

    navigate(`/orderConfirm/${idOrder}`);

    emptyCart();
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBuyer((prevBuyer) => ({
      ...prevBuyer,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Datos del comprador:", buyer);
    // vaciarCarrito();
  };

  const isFormValid = buyer.firstname && buyer.lastname && buyer.age;

  return (
    <div>
      <h2>Confirme sus datos de compra</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="firstname"
            value={buyer.firstname}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Apellido:
          <input
            type="text"
            name="lastname"
            value={buyer.lastname}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Edad:
          <input
            type="number"
            name="age"
            value={buyer.age}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit" disabled={!isFormValid} onClick={handleCheckout}>
          Finalizar compra
        </button>
      </form>
    </div>
  );
}

export default Checkout;
