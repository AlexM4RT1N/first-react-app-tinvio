import React from 'react';

import classes from '../../scss/components/Subtitle/Subtitle.module.scss';

const subTitle = (props) => {
  const addClasses = [classes.subtitle];
  
  if(props.assignClasses) {
    const assignClasses = [...props.assignClasses]
    assignClasses.forEach((item) => addClasses.push(classes[item]))
  } 

  return (
    <h3 className={addClasses.join(' ')}>
      {props.children}
    </h3>
  )
}

export default subTitle;