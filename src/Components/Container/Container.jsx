import React from "react";

import classes from './Container.module.scss';

const container = (props) => {
  const addClasses = [classes.container];
  
  if(props.assignClasses) {
    const assignClasses = [...props.assignClasses]
    assignClasses.map((item) => addClasses.push(classes[item]))
  } 

  return (
    <div className={addClasses.join(' ')}>{props.children}</div>
  );
};

export default container;