import React from "react";

import classes from '../../../scss/app/SectionForm/SectionForm.module.scss';

const descrWithArrow = ({ text, arrow }) => {
  return (
    <div className={`${classes.descrWithArrow} ${classes[arrow]}`}>
      <img className={classes.descrWithArrowImg} 
        src={require('../../../images/Form/arrow90.png')} 
        alt="arrow"
      />
      <p className={classes.descrWithArrowText}>{text}</p>
    </div>
  );
};

export default descrWithArrow;