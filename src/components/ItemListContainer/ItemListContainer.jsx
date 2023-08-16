import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../services/firebase";
import { getCategoryData } from "../../services/firebase";
import Item from "./Item";
import "./ItemListContainer.css";
import { CircleLoader } from "react-spinners";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();

  async function requestProducts() {
    setIsLoading(true);
    let catalogue = categoryId
      ? await getCategoryData(categoryId)
      : await getData();
    setProducts(catalogue);
    setIsLoading(false);
  }

  useEffect(() => {
    requestProducts();
  }, [categoryId]);

  let titulo = categoryId ? categoryId : "¡Hola, bienvenido a Wave Trader!";

  if (isLoading) {
    return (
      <div className="app-container">
        <CircleLoader />
      </div>
    );
  }

  return (
    <div>
      <h1>{titulo}</h1>
      <div className="catalogo">
        {products.map((item) => (
          <Item {...item} key={item.id}></Item>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
