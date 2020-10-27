import React from 'react';

import classes from './SectionMainText.module.scss';

const sectionMainText = (props) => {
  const addClasses = [classes.sectionMainText];
  
  if(props.assignClasses) {
    const assignClasses = [...props.assignClasses]
    assignClasses.map((item) => addClasses.push(classes[item]))
  } 

  return (
    <p className={addClasses.join(' ')}>
      {props.children}
    </p>
  )

}

export default sectionMainText;