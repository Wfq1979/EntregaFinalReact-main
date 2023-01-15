import React from 'react';
import '../estilos/App.css';
import NavBar from './content/navbar/navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemListContainer from './content/itemListContainer';
import ItemDetailContainer from './content/itemDetailContainer';
import Cart from './content/cart';

import Category from './content/category';
import FormularioCompra from './content/formularioCompra';
import Contacto from './content/Contacto';
import Footer from './content/Footer';

//importo solo el provider ya que en el app no muestro informcion - el que provee informacion no la puede consumir- o sea llamo el provider aca porque no lo uso, pero los componentes hijos si
import { DarkModeProvider } from '../context/darkModeContext';

const App = () => {

    
    return (

        <>
<DarkModeProvider>

<BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path="/" element={<ItemListContainer/>} />
              <Route path="/producto/:id" element={<ItemDetailContainer/>} />
              <Route path="/category/:id" element={<Category/>} />
              <Route path="/form" element={<FormularioCompra/>} />
              <Route path="/contacto" element={<Contacto/>} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="*" element={<h1>Error 404, pagina no encontrada.</h1>} />
            </Routes>
            <Footer/>
          </BrowserRouter>
</DarkModeProvider>


        </>
    );
}

export default App;



