import React, { Component } from "react";

import classes from './Step.module.scss';

class Step extends Component {

  state = {
  }  


  render() {
    const {img, title, text} = this.props;

    return (
      <li className={classes.step}>
          <img className={classes.img} src={require(`../../../images/Steps/${img}`)} alt={title}/>

          <h3 className={classes.title}>{title}</h3>

          <p className={classes.text}>{text}</p>
      </li>
    );
  }
};

export default Step;
