import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import primera from '../../public/img/fondonegro.jpg';
import segunda from '../../public/img/fondobesh.jpg';
import tercera from '../../public/img/fondoverde.jpg';

const Carrusel = () =>{
  return(
    <>
    <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-interval="false">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={primera} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={segunda}  className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={tercera} className="d-block w-100" alt="..."/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </>
  );

}
export default Carrusel;