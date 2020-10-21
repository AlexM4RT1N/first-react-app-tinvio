import React, { Component } from "react";

import classes from './HomePageImg.module.scss';

class HomePageImg extends Component {

  state = {
    
  }  


  render() {

    return (
      <div className={classes.WrapHomePageImg}>
        <div className={classes.HomePageImg}></div>
      </div>
    );
  }
};

export default HomePageImg;