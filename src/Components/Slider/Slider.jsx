import React, { Component } from "react";
import ImagesOverlay from './ImagesOverlay/ImagesOverlay';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import SectionMainText from '../../Components/SectionMainText/SectionMainText';

import classes from './Slider.module.scss';

class Slider extends Component {
  state = {
    slider: {
      currentSlide: 0,
    } 
  }  
  


  render() {
    const {slides} = this.props;

    return (
      <div className={classes.slider}>

        <div className={classes.underWave}></div>

        <ImagesOverlay slides={slides}/>

        <div className={classes.sliderNav}>
          <div className={classes.prevSlide}></div>
          <ul className={classes.sliderDots}>
            <li className={classes.dotsItem}></li>
            <li className={classes.dotsItem}></li>
            <li className={classes.dotsItem}></li>
          </ul>
          <div className={classes.nextSlide}></div>
        </div>
          
        <SectionTitle assignClasses={['sectionSlider']}>
        {slides[this.state.slider.currentSlide].title}
        </SectionTitle>

        <SectionMainText assignClasses={['sectionSlider']}>
          {slides[this.state.slider.currentSlide].text}
        </SectionMainText>

      </div>
    );
  }
};

export default Slider;
