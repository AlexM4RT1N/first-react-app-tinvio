import React from "react";

import classes from '../../scss/components/Container/Container.module.scss';

const container = ({ assignClasses, children}) => {
  const addClasses = [classes.container];
  if (assignClasses) assignClasses.forEach((item) => addClasses.push(classes[item]));  

  return (
    <div className={addClasses.join(' ')}>{children}</div>
  );
};

export default container;