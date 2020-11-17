import React from "react";

import classes from '../../scss/components/Btn/Btn.module.scss';

const btn = ({ assignClasses, communicationClicked, modalFormClicked, text }) => {
  const addClasses = [classes.btn];  
  if (assignClasses) assignClasses.forEach((item) => addClasses.push(classes[item]));

  return (
    <button className={addClasses.join(' ')} 
      onClick={communicationClicked || modalFormClicked}      
      >
      {text}
    </button>
  );
};

export default btn;