import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductsData } from "../../services/firebase";
import ItemDetail from "./ItemDetail";
import "./ItemDetailContainer.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { cartContext } from "../../App";
import { useContext } from "react";
import { CircleLoader } from "react-spinners";

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const { addToCart } = useContext(cartContext);

  async function requestProduct() {
    setIsLoading(true);
    const detail = await getProductsData(id);
    setProduct(detail);
    setIsLoading(false);
  }

  useEffect(() => {
    requestProduct();
  }, []);

  function handleAddToCart(count) {
    addToCart(product, count);
    alert(`Agregaste ${count} unidades de ${product.title} al carrito`);
    setIsAddedToCart(true);
  }

  if (isLoading) {
    return (
      <div className="app-container">
        <CircleLoader  />
      </div>
    );
  }

  return (
    <>
      <ItemDetail {...product}></ItemDetail>
      {isAddedToCart ? (
        <Link to="/cart">
          <ButtonComponent>Ir al carrito</ButtonComponent>
        </Link>
      ) : (
        <ItemCount onAddToCart={handleAddToCart} stock={product.stock}></ItemCount>
      )}
      <Link to="/">
        <ButtonComponent>Volver al inicio</ButtonComponent>
      </Link>
    </>
  );
}

export default ItemDetailContainer;
