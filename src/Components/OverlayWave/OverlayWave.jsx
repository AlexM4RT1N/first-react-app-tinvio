import React from 'react';

import classes from './OverlayWave.module.scss';

const OverlayWave = (props) => {
  const addClasses = [classes.OverlayWave];
  
  if(props.assignClasses) {
    const assignClasses = [...props.assignClasses]
    assignClasses.map((item) => addClasses.push(classes[item]))
  } 

  return (
    <div className={addClasses.join(' ')}></div>
  )
}

export default OverlayWave;