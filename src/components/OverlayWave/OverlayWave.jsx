import React from 'react';

import classes from '../../scss/components/OverlayWave/OverlayWave.module.scss';

const OverlayWave = ({ assignClasses }) => {
  const addClasses = [classes.OverlayWave];
  if (assignClasses) assignClasses.forEach((item) => addClasses.push(classes[item]));

  return (
    <div className={addClasses.join(' ')}></div>
  )
}

export default OverlayWave;