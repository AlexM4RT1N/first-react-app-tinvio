import React from 'react';

import classes from '../../scss/components/Subtitle/Subtitle.module.scss';

const subTitle = ({ assignClasses, children }) => {
  const addClasses = [classes.subtitle];
  if (assignClasses) assignClasses.forEach((item) => addClasses.push(classes[item])); 

  return (
    <h3 className={addClasses.join(' ')}>
      {children}
    </h3>
  )
}

export default subTitle;