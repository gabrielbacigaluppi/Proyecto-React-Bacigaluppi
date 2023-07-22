

function ItemDetail(product) {

    return (
      <>
        <div className="detalleProducto">
          <img  src={product.image} alt="imagen" />
          <h2>{product.title}</h2>
          <h4>$ {product.price}</h4>
          <small>{product.description}</small>
        </div>
      </>
    );
  }
  
  export default ItemDetail;