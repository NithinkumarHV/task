import React, { Component } from "react";
import ImageModal from "../Image/imageModal";
import "./videoStyle.css";
import backgroundVideo from "../../Resources/videoToPlay.mp4";
import load from "../../Resources/load.png";
import beach from "../../Resources/beach-1449767.jpg";
import beach1 from "../../Resources/beach-calm-clouds-coconut-trees-457878.jpg";


class videoComponent extends Component {
  state = {
    getModalOfSlider: false,
  };
  getSlider = () => {
    this.setState({
      getModalOfSlider: !this.state.getModalOfSlider,
    });
  };
  render() {
    const { getModalOfSlider } = this.state;

    if (!getModalOfSlider) {
      return (
        <div className="hero">
          <video autoPlay="autoplay" loop="loop" muted poster={load}>
            <source src={backgroundVideo} type="video/mp4" />
          </video>
          <div className="container-fluid">
            <div className="row text-center">
              <div className="col-12 caption">
                <h1>Welcome to Beaches and Boats</h1>
                <h2>Checkout these amazing packages for travelling throughout the world</h2>
              </div>
          </div>
          <div className="row text-center">
            <div className="col-6 align-self-center">
              <img
                onClick={this.getSlider}
                className="img-fluid"
                src={beach}
                alt=""
              />
              <p>Marina Beach</p>
            </div>
            <div className="col-6 align-self-center">
              <img
                onClick={this.getSlider}
                className="img-fluid"
                src={beach1}
                alt=""
              />
              <p>Kovalam Beach</p>
            </div>
          </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="hero" style={{ height: "60vh" }}>
            <video
              autoPlay="autoplay"
              loop="loop"
              muted
              poster={load}
              style={{ height: "60%" }}
            >
              <source src={backgroundVideo} type="video/mp4" />
            </video>
            <div className="container-fluid">
              <div className="row text-center">
               <div className="col-12 caption">
                  <h1>Welcome to Beaches and Boats</h1>
                  <h2>Checkout these amazing packages for travelling throughout the world</h2>
                </div>
              </div>
            <div className="row text-center">
              <div className="col-6 align-self-center">
                <img
                  onClick={this.getSlider}
                  className="img-fluid"
                  src={beach}
                  alt=""
                /><p>Marina Beach</p>
              </div>
              <div className="col-6 align-self-center">
                <img
                  onClick={this.getSlider}
                  className="img-fluid"
                  src={beach1}
                  alt=""
                /><p>Kovalam Beach</p>
              </div>
              
            </div>
          </div>
          </div>
          <ImageModal isModalActive={true} />
        </div>
      );
    }
  }
}

export default videoComponent;
