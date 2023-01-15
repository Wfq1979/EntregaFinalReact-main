import React, { useState, useEffect, useContext } from 'react';

import { Link } from 'react-router-dom'
import '../../estilos/App.css'
import { getProductos } from '../../utils/firebase';
// para contexto darkmode, consulto el contexto ya que el provider lo consulte en app.jsx  . Elemento que consulta el contexto lo tengo que importar
import { DarkModeContext } from '../../context/darkModeContext';



const ItemListContainer = () => {

    //consulto el darkmode, el toggle de useContext. darkMode es el estado actual del contexto que siempre puede modificarse, y la forma de modificarlo
const {darkMode} = useContext(DarkModeContext);


    const [productos, setProductos] = useState([]);
    useEffect(() => {
     
        const productosFirebase = getProductos().then(
            elementos => {
                
                const cardProducto = elementos.map(producto =>

                

                    <div key={producto[0]} className="card mb-3 m-5  d-flex justify-content-center align-items-center" style={{ width: '300px', height: 'auto' }}>
                        <h3 className="card-header">Cerveza {producto[1].nombre}</h3>
                        <div className="card-body">
                        </div>
                        <img style={{ width: '100%', height: '200px' }} src={producto[1].img} className="card-img-top" alt={producto[1].nombre} />
                        <div className="card-body">
                            <p className="card-text"> Categoría: {producto[1].nombreCategoria}</p>
                            <p className="card-text">Precio: {producto[1].precio}</p>
                            <p className="card-text">Stock disponible: {producto[1].stock}</p>
                            <button className='btn btn-dark verProductoBoton'><Link className='nav-link' to={`/producto/${producto[0]}`}>Ver Producto</Link></button>
                        </div>
                    </div>

                )
                setProductos(cardProducto)

                
            }
        )

    }, []);


    return (
        <>
            <div className={darkMode ? 'darkMode row': 'row'}>
                
                {productos}
                <p></p>
            </div>









        </>
    );
}

export default ItemListContainer;
