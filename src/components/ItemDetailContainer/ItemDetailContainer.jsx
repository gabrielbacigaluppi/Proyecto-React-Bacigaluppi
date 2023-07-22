import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductsData } from "../asyncMock/asyncMock";
import ItemDetail from "./ItemDetail";
import './ItemDetailContainer.css';


function ItemDetailContainer() {
    const [product,setProduct] =useState({});
    const {id} = useParams();

    async function requestProduct(){
        const detail = await getProductsData(id);
        setProduct(detail);
    }

    useEffect(() => {
        requestProduct();
    },[]);

    return(
        <>
            <ItemDetail {...product}></ItemDetail>
        </>
    )
}

export default ItemDetailContainer;