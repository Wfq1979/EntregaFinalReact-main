import {memo} from 'react';
import { Link } from 'react-router-dom';
const Logo = () => {
  return (
    <>
      <h1 className='logo'>
        <Link className="nav-link active" to="/">Cerveza Kon</Link>
        </h1>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        
        <span className="navbar-toggler-icon" />
      </button>
    </>
  );
}

export default memo(Logo);
