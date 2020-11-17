import React from "react";

import classes from '../../../scss/app/ScreenMobile/Screen/Screen.module.scss';

const screen = ({ img, descr, icon }) => {
  return (
    <li className={classes.screen}>
      <div className={classes.wrapImg}>
        <img className={classes.img} alt={descr}
          src={require(`../../../images/Screens/${img}`)} 
        />
      </div>
      <div className={classes.wrapDescr}>
        <p className={`${classes.describe} ${classes[icon]}`}>{descr}</p>
      </div>
    </li>
  );
};

export default screen;