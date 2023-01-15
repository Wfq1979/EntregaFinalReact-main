import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
const Contacto = () => {
    const {darkMode} = useContext(DarkModeContext);

    return (
        <> 
 <div className={darkMode ? 'darkMode row': 'row'}>
                       
            <form>
                <fieldset>
                    <legend>Dejanos tu consulta y te responderemos a la brevedad</legend>
                    <div className='columns m-auto' style={{ width: '70%', height: 'auto' }}>

                        <div className="form-group m-5" >
                            <label htmlFor="exampleInputEmail1" className="form-label mt-4">Dirección de email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese su email aquí" />
                            <small id="emailHelp" className="form-text text-muted">No compartiremos tu información con nadie mas</small>
                        </div>
                        <div className="form-group m-5">
                            <label htmlFor="exampleTextarea" className="form-label mt-4">Deje su comentario </label>
                            <textarea className="form-control" id="exampleTextarea" rows={3} defaultValue={""} />
                        </div>
                        <div className='d-flex justify-content-center aligne-item-center'>

                            <button type="submit" className="btn btn-primary " style={{ width: '190px', height: 'auto' }}><Link className="nav-link active" to="/">Enviar</Link></button>
                        </div>

                    </div>
                </fieldset>
            </form>





            </div>














        </>
    );
}

export default Contacto;
