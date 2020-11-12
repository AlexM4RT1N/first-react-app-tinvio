import React, { Component } from "react";

import classes from '../../../scss/app/Hero/HomePageImg/HomePageImg.module.scss';

export default class HomePageImg extends Component {
  render() {
    return (
      <div className={classes.WrapHomePageImg}>
        <div className={classes.HomePageImg}></div>
      </div>
    );
  }
};