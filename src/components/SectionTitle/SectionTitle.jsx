import React from 'react';

import classes from '../../scss/components/SectionTitle/SectionTitle.module.scss';

const sectionTitle = ({ assignClasses, children }) => {
  const addClasses = [classes.SectionTitle];
  if (assignClasses) assignClasses.forEach((item) => addClasses.push(classes[item]));

  return (
    <h2 className={addClasses.join(' ')}>
      {children}
    </h2>
  )
}

export default sectionTitle;