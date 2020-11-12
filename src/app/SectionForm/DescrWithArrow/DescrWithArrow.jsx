import React, { Component } from "react";

import classes from '../../../scss/app/SectionForm/SectionForm.module.scss';

export default class DescrWithArrow extends Component {
  render() {
    const {text, arrow} = this.props;
    return (
      <div className={`${classes.descrWithArrow} ${classes[arrow]}`}>
        <img className={classes.descrWithArrowImg} 
          src={require('../../../images/Form/arrow90.png')} 
          alt="arrow"
        />
        <p className={classes.descrWithArrowText}>{text}</p>
      </div>
    );
  }
};