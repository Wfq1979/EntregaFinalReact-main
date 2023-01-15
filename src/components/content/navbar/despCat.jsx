import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
const DespCat = ({ lista }) => {

    const [list, setList] = useState([]);
    useEffect(() => {
        const listaDrop = lista.map((categoria, indice) =>
            <Link key={indice} className='dropdown-item' to={`/category/${indice + 1}`}>{categoria}</Link>
        )
        setList(listaDrop)

    }, []);

    return (


        <>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle divNabvarLinks" data-bs-toggle="dropdown" href="https://www.google.com/" role="button" aria-haspopup="true" aria-expanded="false">Categorías</a>
                <div className="dropdown-menu">
                    {list}
                </div>
            </li>
        </>
    );
}
export default DespCat;
