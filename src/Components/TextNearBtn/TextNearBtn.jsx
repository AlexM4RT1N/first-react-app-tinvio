import React from 'react';

import classes from './TextNearBtn.module.scss';

const textNearBtn = (props) => {
  const addClasses = [classes.TextNearBtn];
  
  if(props.assignClasses) {
    const assignClasses = [...props.assignClasses]
    assignClasses.map((item) => addClasses.push(classes[item]))
  } 

  return (
    <span className={addClasses.join(' ')}>
      {props.children}
    </span>
  )

}

export default textNearBtn;