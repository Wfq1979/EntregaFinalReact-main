import React from 'react';

const Busqueda = ({ busqueda }) => {
    return (
        <>

            <form className="d-flex">
                <input className="form-control me-sm-2" type="text" placeholder={busqueda} />
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
            </form>
        </>
    );
}

export default Busqueda;
