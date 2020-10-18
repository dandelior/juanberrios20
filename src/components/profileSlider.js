import React, { Component } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import "../assets/sass/profileSlider.sass"

export default class ProfileSlider extends Component {
  render() {

    // const IMAGE_PATH = `{${process.env.PUBLIC_URL}} + '/img'`;
    
    return (
      <Splide
        options={
          {
          type: 'loop',
          // height: '70vh',
          autoWidth: true,
          focus: 'center',
          arrows: false
          }
        }
        className="profileSlider"
      >
        <SplideSlide>
          <figure className="dia">
            <img src={process.env.PUBLIC_URL + '/img/ps_2.jpg'} alt="Imagen de Perfil"/>
            {/* <caption>2018</caption> */}
          </figure>
        </SplideSlide>
        
        <SplideSlide>
          <figure className="dia">
            <img src={process.env.PUBLIC_URL + '/img/ps_4.jpg'} alt="Imagen de Perfil"/>
            {/* <caption>hola</caption> */}
          </figure>
        </SplideSlide>
        <SplideSlide>
          <figure className="dia">
            <img src={process.env.PUBLIC_URL + '/img/ps_3.jpg'} alt="Imagen de Perfil"/>
            {/* <caption>hola</caption> */}
          </figure>
        </SplideSlide>
        <SplideSlide>
          <figure className="dia">
            <img src={process.env.PUBLIC_URL + '/img/ps_5.jpg'} alt="Imagen de Perfil"/>
            {/* <caption>hola</caption> */}
          </figure>
        </SplideSlide>
      </Splide>
    );
  }
}