import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './contenedorProducto/itemDetail';
import { getProducto } from '../../utils/firebase';


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        getProducto(id).then(prod => { setProducto([prod.id, prod.data()]) }
        )


    }, [])


    if (producto.length !== 0) {
        return (
            <ItemDetail producto={producto} />
        )

    }

}

export default ItemDetailContainer;
