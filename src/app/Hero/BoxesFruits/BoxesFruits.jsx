import React from "react";

import classes from '../../../scss/app/Hero/BoxesFruits/BoxesFruits.module.scss';

const boxesFruits = () => {
  return (
    <div className={classes.BoxesFruits}>
      <div className={classes.Boxes}></div>
      <div className={classes.Fruits}></div>
    </div>
  );
};

export default boxesFruits;