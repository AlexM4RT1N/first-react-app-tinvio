import React from 'react';

import classes from '../../scss/components/SectionMainText/SectionMainText.module.scss';

const sectionMainText = ({ assignClasses, children }) => {
  const addClasses = [classes.sectionMainText];
  if (assignClasses) assignClasses.forEach((item) => addClasses.push(classes[item]));

  return (
    <p className={addClasses.join(' ')}>
      {children}
    </p>
  )
}

export default sectionMainText;