// import { createProducto, updateProducto, getProducto,deleteProducto, crearOrdenDeCompra, getOrdenDeCompra } from "./firebase";



// //con la info del objeto nuevo
// const producto = {
// "idCategoria":1,
// "nombreCategoria": "Rubias",
// "nombre": "Rubia bronceada",
// "tamanio": "250ml",
// "precio": 170,
// "stock":20,
// "img": "https://firebasestorage.googleapis.com/v0/b/cerveza-kon.appspot.com/o/imagenes%2Frubia.webp?alt=media&token=5faedc4c-3248-45c9-adcf-eafc3597b785",
// "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, repellendus quis ab voluptas minima excepturi!"
// };

// // createProducto(producto).then(estado => console.log(estado))
// //Ojo que cada vez que recargo se carga ded nuevo el producto.

// //con metodo get puedo consultar por un producto para ver su estado, le doy el ID del producto que busco 
// getProducto("").then(producto =>{
//     console.log(producto)
// })


//actualizar producto. para jsx usar useEffect
//con el id del producto a actualizar entre ""
// getProducto("").then(producto =>{
//    const produ = producto[1]
//    produ.stock -=5
//    produ.precio *=1.25
//    updateProducto("", produ)
// })

// eliminar producto por id. cuidado porque no nos devuelve estados distintos se elimine o no el elemento
// deleteProducto("").then(estado =>{
//     console.log(estado)
// })

//crear orden de compra
// crearOrdenDeCompra(350,"pepito","perez", "a@a.com","calle falsa 123", "35169385").then(orden => console.log(orden.id))

//consultar orden de compra. dato a mostrarle al usuario al finalizar compra
// getOrdenDeCompra("QTaC3i9GqWkN8S9r0JDJ").then(orden => {console.log(orden.id);})


/*
window.location.href = "/"; */