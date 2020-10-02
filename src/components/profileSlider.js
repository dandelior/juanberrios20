import React, { Component } from "react";
import "../assets/sass/profileSlider.sass"

export default class ProfileSlider extends Component {
    render() {

      // const IMAGE_PATH = `{${process.env.PUBLIC_URL}} + '/img'`;
      
      return (
        <div className="profileSlider">
          <div className="sliderWrapper">
            <div className="slide">
              <img src={process.env.PUBLIC_URL + '/img/works/km0/cover.png'} />
            </div>
            <div className="slide">
              <img src={process.env.PUBLIC_URL + '/img/me-1.jpg'} />
            </div>
            <div className="slide">
              <img src={process.env.PUBLIC_URL + '/img/works/km0/cover.png'} />
            </div>
          </div>
        </div>
      );
    }
  }