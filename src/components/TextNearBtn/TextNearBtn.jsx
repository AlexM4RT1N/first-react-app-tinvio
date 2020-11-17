import React from 'react';

import classes from '../../scss/components/TextNearBtn/TextNearBtn.module.scss';

const textNearBtn = ({ assignClasses, children }) => {
  const addClasses = [classes.TextNearBtn];
  if (assignClasses) assignClasses.forEach((item) => addClasses.push(classes[item]));

  return (
    <span className={addClasses.join(' ')}>
      {children}
    </span>
  )
}

export default textNearBtn;