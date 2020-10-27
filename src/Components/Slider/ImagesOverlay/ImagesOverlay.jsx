import React, { Component } from "react";

import classes from './ImagesOverlay.module.scss';

class ImagesOverlay extends Component {
  state = {   
  }  
  // {active: false, id: 3, title: 'Bens Cookies', imagesDesktop: 'Bens.svg', imagesMobile: '.png', text: "lorem ipsum"},


  render() {

    return (
      <div className={classes.imagesOverlay}>

        <div className={classes.images}>

          <img src={require('../../../images/Carousel/Orders.png')} alt="img"/>

        </div>
        <div className={classes.underWave}>
        </div>
      </div>
    );
  }
};

export default ImagesOverlay;
