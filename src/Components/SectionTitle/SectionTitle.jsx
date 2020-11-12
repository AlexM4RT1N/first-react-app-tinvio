import React from 'react';

import classes from '../../scss/components/SectionTitle/SectionTitle.module.scss';

const sectionTitle = (props) => {
  const addClasses = [classes.SectionTitle];
  
  if(props.assignClasses) {
    const assignClasses = [...props.assignClasses]
    assignClasses.forEach((item) => addClasses.push(classes[item]))
  } 

  return (
    <h2 className={addClasses.join(' ')}>
      {props.children}
    </h2>
  )
}

export default sectionTitle;