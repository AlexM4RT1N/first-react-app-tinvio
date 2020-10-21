import React from 'react';

import classes from './SectionTitle.module.scss';

const sectionTitle = (props) => {
  const addClasses = [classes.SectionTitle];
  
  if(props.assignClasses) {
    const assignClasses = [...props.assignClasses]
    assignClasses.map((item) => addClasses.push(classes[item]))
  } 

  return (
    <h2 className={addClasses.join(' ')}>
      {props.children}
    </h2>
  )

}

export default sectionTitle;