
import React, { useContext, useEffect, useState } from 'react';
import { cartContext } from '../../context/cartContext';
import { DarkModeContext } from '../../context/darkModeContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';





const Cart = () => {
    const { darkMode } = useContext(DarkModeContext);
    const { cart, quitarProducto } = useContext(cartContext)
    const [cartLocal, setCartLocal] = useState([]);
    const {precioFinalEstado} = useState();


//calculo del precio total del carrito
    let preciosParciales = [];
    console.log(cart);
    cart.forEach(elemento => {
        const precioIndividual = elemento[1].precio * elemento.cantidad;
        preciosParciales.push(precioIndividual)
    });

    const initialValue = 0;
    const precioFinal = preciosParciales.reduce(
        (a, b) => a + b,
        initialValue
    );

    

    const finalizarCompra = () => {
             
        Swal.fire({
            title: 'Complete los siguientes datos para finalizar compra',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },})
    }

    useEffect(() => {

        




        const prodMostrar = cart.map(producto =>
            <div key={producto[0]} className="card mb-3  m-2  d-flex  justify-content-center align-items-center" style={{ width: '80%' }} >
                <div className="card-body d-flex flex-row ">
                    <h5 className="card-title m-2 ">Cerveza {producto[1].nombre}</h5>
                    <p className="card-text m-2">Precio unidad: $ {producto[1].precio}</p>
                    <p className="card-text m-2">Cantidad: {producto.cantidad}</p>
                    <p className="card-text m-2">Precio Total: $ {producto[1].precio * producto.cantidad}</p>
                    <button className='btn btn-dark m-2' onClick={() => quitarProducto(producto)} ><Link className='nav-link' to={`/`}>Eliminar</Link></button>
                </div>
            </div>)
        setCartLocal(prodMostrar)

    }, [cart]);

    if (cart.length !== 0) {
        return <div className={darkMode ? 'darkMode row m-5' : 'row m-5'} >
             {cartLocal}
             
              <div className='d-flex flex-row align-item-center justify-content-around' style={{width:"75%"}} >
                     <h2>Total $ {precioFinal}</h2>
                     <button className='botonDetalle btn btn-dark' onClick={() => finalizarCompra()} >
                    <Link className='nav-link' to={`/form`}>Finalizar compra</Link>
                    </button>
                    <button className='botonDetalle btn btn-dark'>
                    <Link className='nav-link' to={`/`}>Volver al catalogo</Link>
                    </button>
                </div> 
            </div>
    } else { return <> <h1>No existen elementos en el carrito </h1> <button className='botonDetalle btn btn-dark'><Link className='nav-link' to={`/`}>Volver al catalogo</Link></button> </> }


}

export default Cart;


