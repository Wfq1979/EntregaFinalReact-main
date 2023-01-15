CERVECERÍA KON

Este proyecto es la continuación y actualización del realizado tanto en los cursos de "Desarrollo web" y "javascrypt", el cual se trata de una cervecería creada por un amigo.
En esta pagína lo que vamos a poder apreciar una cartilla con todos sus productos, los mismos estando catalogados entre "cervezas rubias" "cervezas negras" y "cervezas rojas".
Al ir haciendo click en las tarjetas de cada producto, vamos a podeer ingresar a una descripción mas detallada del mismo, con actualización del stock disponible y una breve reseña.

Actualmente el mismo esta creado utilizando plantillas de bootstrap, modificados por mis clases de css. Para los íconos actualmente uso las imagenes de "FONTAWSOME"; 
Al mismo se le incorporaron tanto FIREBASE como base de datos para la carga de productos y ordenes de compra, y SWEETALERT2 para la creacion de alertas en los distintos puntos

Como manejarse por el sitio:
- En la página principal se van a observar todos los productos, indistinto de la categorìa a la cual pertenezcan, pudiendo ver el detalle de los mismos con "ver producto"
- En el Navbar vamos a tener un menu desplegable con las distintas categorias para poder navegarlas, una pestaña de contacto (no funcional), linkeo a las redes sociales (funcional) en otro dropdown y un icono para poder visualizar el carrito de compras
- Dentro de cada categoría vamos a poder ingresar a los productos que la componen con "ver producto" para ver su detalle
-Dentro del detalle de cada producto tendremos una descripcion del mismo, con la posibilidad de agregar la cantidad del mismo que deseemos comprar, y la posibilidad de volver tanto a la categoria como al home.
- Al cargar los productos al carrito de compras, nos aparecera al lado de sus datos "eliminar" para poder quitar puntualmente cada elemento. Este boton nos redirecciona al home para poder visualizar en pantalla la actualizaciòn del carrito (ya que de caso contrario, se borra el elemento pero no cambia la visibilidad en pantalla)
- Al finalizar compra, nos redirigira a un formulario a completar, a partir de el cual se creara la orden de compras (en firebase) y devolvera por un alert el ID de la orden de compra y el precio final de la misma. A la misma orden de compra de firebase se le cargan los productos dentro del carrito para poder ver su id, precio y cantidad pedida al momento de la misma (de la misma forma que se carga la fecha de la compra)

* Actualmente el formulario de busqueda del Navbar es meramente estetico, con intencion futura de que aplique un filtro a los productos.
* El icono del sol del Navbar aplica el DarkMode en todas las págimas.
* Agrego al proyecto un video de la pantalla viendose la funcionalidad actual de la misma, asi como un gif pedido en una preentrega sobre funcionalidad pasada.
* Dentro de "botonAgregar.jsx" se encuentra la funcionalidad del boton para agregar productos al carrito y sus contadores.
* Dentro de "cartContext.jsx" se encuentra la funcionalidad de los botones del carrito y las alertas
* Dentro de "cart.jsx" se encuentra el renderizado del carrito.