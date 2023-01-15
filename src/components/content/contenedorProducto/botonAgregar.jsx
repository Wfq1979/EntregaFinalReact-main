import React, {useState} from 'react';

import { useContext } from 'react';
import { cartContext } from '../../../context/cartContext';



const BotonAgregar = ({producto}) => {

    const { agregarProducto} = useContext(cartContext)


    const [contador, setContador] = useState(1);

    function modificarCantidad(operacion){
       if (producto[1].stock >=1){
        if (operacion === "+") {
            if(contador < producto[1].stock) {setContador(contador + 1)};
            
            
        } else { if (contador >= 1) {setContador(contador - 1)}
        }
       }else {
        setContador("Sin stock")
       }
        
     }


    return (
        <>

<div className='d-flex flex-column align-items-center'>
            <div>
                <button className='btn btn-dark' onClick={()=> modificarCantidad("+")}>+</button>
                <button className='btn btn-dark' >{contador}</button>
                <button className='btn btn-dark' onClick={()=> modificarCantidad("-")}>-</button>
            </div>
            <div>
                <button className='botonAgregarCarrito btn btn-dark' onClick={()=> agregarProducto(producto,contador)}>Agregar al carrito</button>
            </div>     
</div>
                        




        </>
    );
}

export default BotonAgregar;
