import React, {createContext,  useState} from 'react';

// ES6 Modules or TypeScript
import Swal from 'sweetalert2'




const cartContext =createContext()



const CartProvider = (props) => {
    
    const [cart, setCart] = useState([]);


    const agregarProducto = (prod,cant) => {
        
const aux = cart

let indice = cart.findIndex(producto => producto[0]===prod[0])
if(indice !== -1) {
    aux[indice].cantidad = cant
} else {
    const prodCart = {...prod, cantidad: cant}
    aux.push(prodCart)
}
setCart(aux)
console.log(aux)

Swal.fire({
    title: 'Producto agregado correctamente.',
    width: 400,
    padding: '3em',
    color: '#716add',
    background: 'antiquewhite',
    backdrop: ` rgba(0,0,123,0.4) `
  })
    }


    const quitarProducto = (prod) =>{
        const aux = cart
        let indice = cart.findIndex(producto => producto[0]===prod[0])
        aux.splice(indice,1);
        setCart(aux);
        console.log(aux);
        

        let timerInterval
Swal.fire({
  title: 'Producto eliminado correctamente',
  text:"Para visualizar los cambios reingrese al carrito",
  timer: 1500,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
     
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    
  }
})
    }


    return (
        <>
            

<cartContext.Provider value={{cart, agregarProducto,quitarProducto}}>

{props.children}
</cartContext.Provider>

        </>
    );
}

export {cartContext,CartProvider};

