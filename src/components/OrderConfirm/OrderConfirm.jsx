import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOrder } from "../../services/firebase";

function OrderConfirm() {
  const [orderData, setOrderData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getOrder(id).then((order) => {
      console.log(order);

      setOrderData(order);
    });
  }, [id]);

  return (
    <div>
      <h1>Compra realizada!</h1>
      {orderData !== null ? (
        <div>
          Detalle de compra:
          <p>ID de compra: {id}</p>
          <p>Nombre: {orderData.buyer["firstname"]}</p>
          <p>Apellido: {orderData.buyer["lastname"]}</p>
          <p>Edad: {orderData.buyer["age"]}</p>
          <p>Total compra: ${orderData.total}</p>
          <p>Productos comprados: </p>
          {orderData.items.map((item) => {
            return (
              <p key={item.id}>
                Producto: {item.title} - Cantidad: {item.count} - Precio unitario: ${item.price} - Precio total: ${item.count*item.price}
              </p>
            );
          })}
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default OrderConfirm;
