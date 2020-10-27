import React, { Component } from "react";

import classes from './Screen.module.scss';

class Screen extends Component {

  state = {
  }  


  render() {
    const {img, descr, icon} = this.props;

    return (
      <li className={classes.screen}>
        <div className={classes.wrapImg}>
          <img className={classes.img} src={require(`../../../images/Screens/${img}`)} alt={descr}/>
        </div>

        <div className={classes.wrapDescr}>
          <p className={`${classes.describe} ${classes[icon]}`}>{descr}</p>
        </div>
      </li>
    );
  }
};

export default Screen;
