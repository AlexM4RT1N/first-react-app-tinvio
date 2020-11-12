import React, { Component } from "react";

import classes from '../../../scss/components/Slider/ImagesOverlay/ImagesOverlay.module.scss';

export default class ImagesOverlay extends Component {
  render() {
    const { slides, currentSlide } = this.props;
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
  }
};
