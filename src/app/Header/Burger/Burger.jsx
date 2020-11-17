import React from "react";

import classes from '../../../scss/app/Header/Burger/Burger.module.scss';

const burger = ({ assignClasses, clicked }) => {
  const addClasses = [classes.burger];
  if (assignClasses) assignClasses.forEach((item) => addClasses.push(classes[item]));  
  
  return (
    <div className={addClasses.join(' ')} onClick={clicked}>
      <span className={classes.upLine}></span>
      <span className={classes.midLine}></span>
      <span className={classes.downLine}></span>
    </div>
  );
};

export default burger;