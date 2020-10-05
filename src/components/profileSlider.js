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
          <div className="dia">
            <img src={process.env.PUBLIC_URL + '/img/fake_profile_slider_1.jpg'} alt="Imagen de Perfil"/>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="dia">
            <img src={process.env.PUBLIC_URL + '/img/fake_profile_slider_2.jpg'} alt="Imagen de Perfil 2"/>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="dia">
            <img src={process.env.PUBLIC_URL + '/img/fake_profile_slider_1.jpg'} alt="Imagen de Perfil 3"/>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="dia">
            <img src={process.env.PUBLIC_URL + '/img/fake_profile_slider_1.jpg'} alt="Imagen de Perfil 4"/>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="dia">
            <img src={process.env.PUBLIC_URL + '/img/fake_profile_slider_2.jpg'} alt="Imagen de Perfil 5"/>
          </div>
        </SplideSlide>
      </Splide>
    );
  }
}