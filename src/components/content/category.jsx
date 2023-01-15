import { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductos } from '../../utils/firebase';
import { DarkModeContext } from '../../context/darkModeContext';

const Category = () => {

    const {darkMode} = useContext(DarkModeContext);


    const [productos, setProductos] = useState([]);
    const { id } = useParams()
    useEffect(() => {
        getProductos().then(productos => {
            const productosCategoria = productos.filter(producto => producto[1].idCategoria === parseInt(id))
            console.log(productosCategoria)
            const cardProducto = productosCategoria.map(producto =>
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
                </div>)
            setProductos(cardProducto)
        })
    }, [id]);
    return (

        <div className={darkMode ? 'darkMode row': 'row'}>
            
            {productos}
        </div>


    );
}

export default Category;
