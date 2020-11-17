import React from "react";

import classes from '../../../scss/components/Slider/ImagesOverlay/ImagesOverlay.module.scss';

const imagesOverlay = ({ slides, currentSlide }) => {  
  return (
    <div className={classes.imagesOverlay}>
      <div className={classes.images}>
        <ul style={{transform: `translateX(-${currentSlide}00%)`}} className={classes.imagesList}>
        {
          slides.map((slide, index) => {
            return (
              <li key={index} className={classes.imagesItem}>
                <img src={require(`../../../images/Carousel/${slide.image}`)} alt="img"/>
              </li>
            )
          })
        }
        </ul>
      </div>
      <div className={classes.underWave}></div>
    </div>
  );  
};

export default imagesOverlay