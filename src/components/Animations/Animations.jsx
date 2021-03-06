import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../images/animation.json';

import classes from '../../scss/components/Animations/Animations.module.scss';

const animations = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className={classes.animations}>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default animations;