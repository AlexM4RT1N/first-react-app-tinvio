import React, { Component } from "react";

import classes from '../../../scss/app/SimpleSteps/Step/Step.module.scss';

export default class Step extends Component {
  render() {
    const {img, title, text} = this.props;
    return (
      <li className={classes.step}>
          <img className={classes.img} 
            src={require(`../../../images/Steps/${img}`)} 
            alt={title}
          />
          <h3 className={classes.title}>{title}</h3>
          <p className={classes.text}>{text}</p>
      </li>
    );
  }
};