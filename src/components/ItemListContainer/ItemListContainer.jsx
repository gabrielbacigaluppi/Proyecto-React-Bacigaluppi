import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getData, { getCategoryData } from "../asyncMock/asyncMock";
import Item from "./Item";
import './ItemListContainer.css';

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  async function requestProducts() {
    let catalogue = categoryId
      ? await getCategoryData(categoryId)
      : await getData();
    setProducts(catalogue);
  }

  useEffect(() => {
    requestProducts();
  }, [categoryId]);

  let titulo = categoryId ? categoryId : "¡Hola, bienvenido a Wave Trader!";

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
