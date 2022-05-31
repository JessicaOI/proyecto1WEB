import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import primera from '../../public/img/fondonegro.jpg';
import segunda from '../../public/img/fondobesh.jpg';
import tercera from '../../public/img/fondoverde.jpg';
import cuarta from '../../public/img/fondoazul.jpg';
import quinta from '../../public/img/fondorosado.jpg';

const Carrusel = () =>{
  return(
    <>
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-touch="false" data-bs-interval="false">
      <div className="carousel-indicators" style={{padding: "54px"}}>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"
        style={{
          display: "block",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          borderLeft: "80px",
          }}></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" 
        style={{
          display: "block",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          }}></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"
        style={{
          display: "block",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          }}></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"
        style={{
          display: "block",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          }}></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"
        style={{
          display: "block",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          }}></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" style={{height: "100vh"}}>
          <img src={primera}className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item" style={{height: "100vh"}}>
          <img src={segunda} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item" style={{height: "100vh"}}>
          <img src={tercera} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item" style={{height: "100vh"}}>
          <img src={cuarta} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item" style={{height: "100vh"}}>
          <img src={quinta} className="d-block w-100" alt="..."/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </>
  );

}
export default Carrusel;
