import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { Link } from "react-router-dom";
import './ItemListContainer.css';

function Item(props){
    const {id,image,title,price} = props;

    return(
        <div className="producto">
            <h1>{title}</h1>
            <img width="300" src={image} alt="imagen"></img>
            <p>$ {price}</p>
            <Link to={`/product/${id}`}>
                <ButtonComponent className="botonDetalle">
                    Ver Producto
                </ButtonComponent>
            </Link>
        </div>
    )

}

export default Item;