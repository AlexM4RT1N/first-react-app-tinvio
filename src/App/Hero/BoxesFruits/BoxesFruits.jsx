import React, { Component } from "react";

import classes from '../../../scss/app/Hero/BoxesFruits/BoxesFruits.module.scss';

export default class BoxesFruits extends Component {
  render() {
    return (
      <div className={classes.BoxesFruits}>
        <div className={classes.Boxes}></div>
        <div className={classes.Fruits}></div>
      </div>
    );
  }
};