import React from 'react';

import primera from '../../public/img/fondonegro.jpg';
import segunda from '../../public/img/fondobesh.jpg';
import tercera from '../../public/img/fondoverde.jpg';
import cuarta from '../../public/img/fondoazul.jpg';
import quinta from '../../public/img/fondorosado.jpg';

import bts from '../../public/img/bts.png';
import tomorrow from '../../public/img/tomorrow.png';
import butter from '../../public/img/butter.png';
import tomorrow2 from '../../public/img/tomorrow2.png';
import lee from '../../public/img/lee.png';

import icono from '../../public/img/menu(1).png';
import logo from '../../public/img/logo.png';


import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './pagina.css';

const Carrusel = () =>{
  return(
    <>

      <div className='cabecera'>
        <input type = "checkbox" id = "check"/>
        <label for = "check" className = "checkbtn">
          <img src={icono} style={{width: "22px", height: "24px", position: "absolute", top: "22px", left: "32px"}}/>
          <a href='/'><img src={logo} style={{width: "2.8%", position: "absolute", top: "15px", left: "48.6%"}}/></a>
        </label>
        
      </div>
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-touch="false" data-bs-interval="false" style={{height: "110vh", width: "100%", position: "absolute", top:"-10%"}}>
      <div className="carousel-indicators" style={{padding: "70px"}}>
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
      <div className="carousel-inner" >
        <div className="carousel-item active">
          <img src={bts}className="d-block w-40 h-60" alt="..." style={
         {position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          }}/>
          <img src={primera}className="d-block w-100" alt="..." style={{height: "100%"}}/>
          
        </div>
        <div className="carousel-item" style={{height: "100%"}}>
        <img src={tomorrow}className="d-block w-70 h-60" alt="..." style={
         {position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          }}/>
          <img src={segunda} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item" style={{height: "100%"}}>
        <img src={butter}className="d-block w-60 h-60" alt="..." style={
         {position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          }}/>
          <img src={tercera} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item" style={{height: "100%"}}>
        <img src={tomorrow2}className="d-block w-70 h-60" alt="..." style={
         {position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          }}/>
          <img src={cuarta} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item" style={{height: "100%"}}>
        <img src={lee}className="d-block w-70 h-60" alt="..." style={
         {position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          }}/>
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
    <footer className='abajo'></footer>
    
    </>
  );

}
export default Carrusel;
