import {memo} from 'react';
import { Link } from 'react-router-dom';

const Links = () => {
  
  
    
  return (
    <>  
     <li className="nav-item ">
      <Link className="nav-link active divNabvarLinks" to="/contacto">Contacto</Link>
      </li>
      <li className="nav-item ">
      <Link className="nav-link active divNabvarLinks" to="/cart"><i className="fa-solid fa-cart-shopping"></i></Link>
      </li>

    </>
  );
}

export default memo(Links);