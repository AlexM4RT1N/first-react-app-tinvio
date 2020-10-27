import React, { Component } from "react";

import classes from '../SectionForm.module.scss';

class DescrWithArrow extends Component {

  state = {
  }  


  render() {
    const {text, arrow} = this.props;

    return (
      <div className={`${classes.descrWithArrow} ${classes[arrow]}`}>

        <img className={classes.descrWithArrowImg} src={require('../../../images/Form/arrow90.png') } alt="arrow"/>

        <p className={classes.descrWithArrowText}>{text}</p>

      </div>
    );
  }
};

export default DescrWithArrow;
