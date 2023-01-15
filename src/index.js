import React from 'react';
import ReactDOM from 'react-dom/client';
import './estilos/index.css';
import App from './components/App';
import { CartProvider } from './context/cartContext';
// la llamada a bbd.js esta comentada ya que cargue la base de datos a firebase 1 vez, sino, cada vez que inicio el proyecto se cargan nuevamente los productos.
// import './utils/bbd.js'
import './utils/pruebas.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<CartProvider>

    <App />

</CartProvider> 
  
);

