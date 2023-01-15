/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

const Desplegable = () => {
  return (
    <>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle divNabvarLinks" data-bs-toggle="dropdown" href="https://www.google.com/" role="button" aria-haspopup="true" aria-expanded="false">Seguinos!</a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="https://www.instagram.com/cervezakon/" target="_blank" >Instagram</a>
          <a className="dropdown-item" href="https://www.facebook.com/cerveza.kon.3"target="_blank">Facebook</a>
          <a className="dropdown-item" href="https://www.youtube.com/user/nicocesaDJ/featured"target="_blank">Youtube</a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="https://www.google.com/" target="_blank">Dejanos tu foto con nosotros</a>
        </div>
      </li>
    </>
  );
}

export default Desplegable;
