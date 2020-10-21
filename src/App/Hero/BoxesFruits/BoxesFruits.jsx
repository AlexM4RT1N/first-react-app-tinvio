import React, { Component } from "react";

import classes from './BoxesFruits.module.scss';

class BoxesFruits extends Component {

  state = {
    
  }  


  render() {

    return (
      <div className={classes.BoxesFruits}>
        <div className={classes.Boxes}></div>
        <div className={classes.Fruits}></div>
      </div>
    );
  }
};

export default BoxesFruits;
