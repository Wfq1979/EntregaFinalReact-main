// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection, doc, addDoc, getFirestore,getDocs, getDoc, updateDoc, deleteDoc} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "cerveza-kon.firebaseapp.com",
  projectId: "cerveza-kon",
  storageBucket: "cerveza-kon.appspot.com",
  messagingSenderId: "211812425434",
  appId: "1:211812425434:web:dc709c93648460af39cfe3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//obtencion de base de datos (db/bdd) de firebase
const bdd = getFirestore()

const cargarBaseDeDatos =async () => {
const promise = await fetch('./json/productos.json')
const productos = await promise.json()
//con el for each hago que por cada producto de mi archivo json se cargue a mi base de detos de firebase.
productos.forEach(async(producto) => {
  //si la coleccion existe le agrega datos, si no existe, la crea y le agrega datos. coleccion guardada en bdd, llamada "productos" en firebase
     await addDoc(collection(bdd, "productos"), 
     {
      //el id es autogenerado (no lo defino)
        nombre: producto.nombre,
        idCategoria: producto.idCategoria,
        nombreCategoria: producto.nombreCategoria,
        tamanio: producto.tamanio,
        precio: producto.precio,
        stock: producto.stock,
        img:producto.img,
        descripcion: producto.descripcion

     })
})
}

//para ver todos los productos en mi home(itemlistcontainer)
const getProductos = async () =>{
const elementos = await getDocs(collection(bdd, "productos"))
const items = elementos.docs.map(producto =>[producto.id,producto.data()])
return items
}

//Para ver 1 solo producto en itemdetailcontainer
const getProducto = async (id)=> {
const producto = await getDoc(doc(bdd,"productos", id))
return producto
}

//Actualizar: es mas facil pisar informacion que cambiarla.
//modifico cualquier parte.
const updateProducto = async (id,info) => {
  const estado = await updateDoc(doc(bdd,"productos", id),info)
  return estado
}

//eliminar elemntos de base de datos
const deleteProducto = async(id) =>{
const estado = await deleteDoc(doc(bdd,"productos",id))
return estado
}

//crear un nuevo producto
const createProducto = async (objetoProducto) => {
  const estado = await addDoc(collection(bdd,"productos"), {
    nombre: objetoProducto.nombre,
    idCategoria: objetoProducto.idCategoria,
    nombreCategoria: objetoProducto.nombreCategoria,
    tamanio: objetoProducto.tamanio,
    precio: objetoProducto.precio,
    stock: objetoProducto.stock,
    img:objetoProducto.img,
    descripcion: objetoProducto.descripcion
  })
  return estado
}

// genera un id automatico con precio y datos del cliente
const crearOrdenDeCompra = async (precioTotalCompra, nombre,apellido,email,direccion,dni,productos,fecha) =>{
const ordenDeCompra = await addDoc(collection(bdd, "ordenDeCompra"), {
  nombre:nombre,
  apellido:apellido,
  email:email,
  direccion:direccion,
  dni:dni,
 precioTotal: precioTotalCompra,
 productos:productos,
 fecha:fecha
})
return ordenDeCompra
}

const getOrdenDeCompra= async(id) => {
const ordenCompra = await getDoc(doc(bdd,"ordenDeCompra",id))
return ordenCompra
}


export {cargarBaseDeDatos,getProductos, getProducto, updateProducto, deleteProducto, createProducto, crearOrdenDeCompra,getOrdenDeCompra};

//este archivo solo exporta funciones relacionadas con firebase, no las ejecuta