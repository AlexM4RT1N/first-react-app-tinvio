import React from "react";

import classes from '../../../scss/app/SimpleSteps/Step/Step.module.scss';

const step = ({ img, title, text }) => {
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
};

export default step;