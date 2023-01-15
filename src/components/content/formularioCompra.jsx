import { useState, useContext } from 'react';
import { crearOrdenDeCompra } from '../../utils/firebase';
import { cartContext } from '../../context/cartContext';
import Swal from 'sweetalert2';
import { DarkModeContext } from '../../context/darkModeContext';
const FormularioCompra = () => {

    const {darkMode} = useContext(DarkModeContext);

    const [nombre, setNombre] = useState(``);
    const [apellido, setApellido] = useState(``);
    const [mail, setMail] = useState(``);
    const [mail2, setMail2] = useState(``);
    const [direccion, setDireccion] = useState(``);
    const [dni, setDni] = useState(``);
    const { cart } = useContext(cartContext);

    const datosFormulario = () => {

        // calculo del precio total del carrito
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


//Cruzado de datos de formulario E-mail para validar y crear orden de compra.
if (mail === mail2) {

    const fechaCompra = Date();
  //crear orden de compran
  crearOrdenDeCompra(precioFinal, nombre, apellido, mail, direccion, dni, cart,fechaCompra).then(orden => {

    Swal.fire(
        {
            icon: 'success',
            title: nombre + ' ' + 'Tu orden de compra es la ' + orden.id + ' por un valor total de $' + precioFinal,
            text: 'Gracias por elegirnos',

        }

    ).then(() => {
        window.location = "/"

    });


})
} else { Swal.fire(
    {
        icon: 'error',
        title: 'El E-mail no coincide',
    }

)}
}



    return (
        <div className={darkMode ? 'darkMode m-5 p-5': 'm-5 p-5'} >

            <form onSubmit={ev => { ev.preventDefault(); datosFormulario() }}>

                <fieldset style={{ width: '500px', margin: "auto" }}>
                    <legend>Formulario de compra</legend>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="form-label mt-4">Nombre</label>
                        <input required value={nombre} onChange={ev => { setNombre(ev.target.value) }} type="text" name='nombre' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese su nombre" />

                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="form-label mt-4">Apellido</label>
                        <input required value={apellido} type="text" name='apellido' onChange={ev => { setApellido(ev.target.value) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese su apellido" />

                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email</label>
                        <input required value={mail} type="email" name='mail' onChange={ev => { setMail(ev.target.value) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese su mail" />

                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="form-label mt-4">Repite Email</label>
                        <input required value={mail2} type="email" name='mail2' onChange={ev => { setMail2(ev.target.value) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Repita su mail" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="form-label mt-4">Direccion</label>
                        <input required value={direccion} type="text" name='direccion' onChange={ev => { setDireccion(ev.target.value) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese su direccion" />

                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="form-label mt-4">DNI</label>
                        <input required value={dni} type="number" name='dni' onChange={ev => { setDni(ev.target.value) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese su DNI" />

                    </div>

                    <button type="submit" className="btn btn-primary">Comprar</button>
                </fieldset>
            </form>


        </div>
    );
}

export default FormularioCompra;
