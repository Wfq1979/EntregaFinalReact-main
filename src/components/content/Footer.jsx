import {memo} from 'react';
import '../../estilos/footer.css';

const Footer = () => {
  return (
    <>
      <div className='footer'>

        <h5 className="card-header">Cerveza Kon</h5>
        <p className="card-text">Pagina diseñada por Walter Facundo Quiroga, derechos reservados</p>
      </div>


    </>
  );
}

export default memo(Footer);
