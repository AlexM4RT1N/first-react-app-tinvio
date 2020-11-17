import React, { Component } from "react";
import ImagesOverlay from './ImagesOverlay/ImagesOverlay';
import SectionTitle from '../SectionTitle/SectionTitle';
import SectionMainText from '../SectionMainText/SectionMainText';

import classes from '../../scss/components/Slider/Slider.module.scss';

export default class Slider extends Component {
  state = {
    slider: {
      currentSlide: 0,
    } 
  }

  prevSlide = () => this.setState({slider: {currentSlide: this.state.slider.currentSlide - 1}})

  nextSlide = () => this.setState({slider: {currentSlide: this.state.slider.currentSlide + 1}})

  render() {
    const {slides} = this.props;
    const currentSlide = this.state.slider.currentSlide;
    return (
      <div className={classes.slider}>
        <div className={classes.underWave}></div>
        <ImagesOverlay slides={slides} currentSlide={currentSlide}/>
        <div className={classes.wrapNavText}>
          <div className={classes.sliderNav}>
            <div onClick={this.prevSlide} 
              className={`${classes.prevSlide} ${currentSlide === 0 ? classes['inactive'] : ''}`}>
            </div>
            <ul className={classes.sliderDots}>
            {
              slides.map((slide, index) =>                 
                <li key={index} className={`${classes.dotsItem} ${currentSlide === index ? classes['active'] : ''}`}></li>
              )
            }
            </ul>
            <div onClick={this.nextSlide} 
              className={`${classes.nextSlide} ${currentSlide === slides.length-1 ? classes['inactive'] : ''}`}>
            </div>
          </div>
          <div className={classes.wrapTitleText}>
            <SectionTitle assignClasses={['sectionSlider']}>
            {slides[currentSlide].title}
            </SectionTitle>
            <SectionMainText assignClasses={['sectionSlider']}>
              {slides[currentSlide].text}
            </SectionMainText>
          </div>
        </div>
      </div>
    );
  }
};