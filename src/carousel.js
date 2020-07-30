import React from "react";

const Carousel = () => {
  return (
    <div>
      <div
        class="gallery js-flickity"
        data-flickity-options='{ "wrapAround": true }'
      >
        <div class="gallery-cell"></div>
        <div class="gallery-cell"></div>
        <div class="gallery-cell"></div>
        <div class="gallery-cell"></div>
        <div class="gallery-cell"></div>
      </div>
    </div>
  );
};

export default Carousel;
