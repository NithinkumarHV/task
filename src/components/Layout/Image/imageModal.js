import React from "react";
import "./imageModal.css";
import beach from "../../Resources/beach-1449767.jpg";
import beach1 from "../../Resources/beach-calm-clouds-coconut-trees-457878.jpg";
import beach2 from "../../Resources/beach-coconut-trees-coconuts-daylight-240526.jpg";
import beach3 from "../../Resources/cottages-in-the-middle-of-beach-753626.jpg";
import beach4 from "../../Resources/load.png"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function imageModal(props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 575 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 575, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const isModalActive = props.isModalActive;
  if (isModalActive) {
    return (
      <div
        className="container-fluid text-center images-carousel"
        data-aos="fade-up" 
        data-aos-duration="1000"
        data-aos-distance="1000"
      >
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={2000}
          swipeable={true}
          draggable={false}
          showDots={true}
          infinite={true}
        >
          <div>
            <img src={beach} alt="" />
          </div>
          <div>
            <img src={beach1} alt="" />
          </div>
          <div>
            <img src={beach2} alt="" />
          </div>
          <div>
            <img src={beach3} alt="" />
          </div>
          <div>
            <img src={beach4} alt="" />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default imageModal;
