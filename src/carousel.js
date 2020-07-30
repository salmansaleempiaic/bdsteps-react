import React from "react";

const Carousel = () => {
  return (
    <div className="carousel">
      <figure>
        <a>
          <img
            src="http://bdsteps.org/assets/SliderImages/A-BDSteps-850X250C.jpg"
            alt="img1"
          ></img>
        </a>
        <a>
          {" "}
          <img
            src="http://bdsteps.org/assets/SliderImages/B-Skyler-850X250.jpg"
            alt="img2"
          ></img>
        </a>
        <a>
          {" "}
          <img
            src="http://bdsteps.org/assets/SliderImages/C-Top5things-850X250.jpg"
            alt="img3"
          ></img>
        </a>
        <a>
          {" "}
          <img
            src="http://bdsteps.org/assets/SliderImages/A-BDSteps-850X250C.jpg"
            alt="img1"
          ></img>
        </a>
      </figure>
    </div>
  );
};

export default Carousel;
