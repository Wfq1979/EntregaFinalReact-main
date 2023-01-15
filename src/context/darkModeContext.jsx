// la extension JS indica vanilla javascrypt y va  contener funciones,etc. los archivos del context pueden ser tanto js como jsx
// createContext es un hook de react para trabajar con contexto. se impora como el usestate
// el PROVIDER es una forma de proveer el contexto (enviar)

import React,{useState,createContext} from 'react';

// creo el contexto
const DarkModeContext = createContext()

// creo el provider, con el mismo nombre. en este caso el "props" serian propiedades que necesito darle al contexto para trabajar. en este caso no es obligatorio pero queda de ejemplo. se envian como {props.children}
const DarkModeProvider = (props) => {

    //variable o contexto. inicia en false porque no inicia la pagina en darkmode
const [darkMode, setDarkMode] = useState(false);


//forma de modificar el contexto. niego el darkmode para que siempre que hago click cambie el modo
const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    console.log(darkMode);
}


// el return se envia con el provider con lo que seria el valor del estado y cada una de las funciones que editen dicho contexto (en este caso 1, pero en un carrito van a ser varias - agregar, eliminar, etc)

    return (
        <>
            
<DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>

{props.children}

</DarkModeContext.Provider>


        </>
    );
}

// no se puede utilizar el export default, ya que tengo 2 elementos para exportar y no solo 1
//el contexto se llama si o si en un elemento padre (app e index.js, dependiendo de para que lo neceisto en mi aplicacion) Para consulta de base de datos de usuarios o carrito, se envia a index.js. En este caso el darkmode no es necesario en el index.js por la composición del mismo (lo uso en app.js que tiene todas las rutas solamente)

export {DarkModeContext, DarkModeProvider};
