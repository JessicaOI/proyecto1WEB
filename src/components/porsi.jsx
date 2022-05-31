import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import primera from '../../public/img/colornegro.jpg';
import segunda from '../../public/img/2c.png';
import tercera from '../../public/img/fondoverde.jpg';

const Carrusel = () =>{
  return(
    <>
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={primera} alt="First slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={segunda} alt="Second slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={tercera} alt="Third slide"/>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
    </>
  );

}
export default Carrusel;
