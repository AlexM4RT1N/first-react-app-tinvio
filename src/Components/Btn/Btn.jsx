import React from "react";

import classes from '../../scss/components/Btn/Btn.module.scss';

const btn = (props) => {
  const addClasses = [classes.btn];  
  if(props.assignClasses) {
    const assignClasses = [...props.assignClasses]
    assignClasses.forEach((item) => addClasses.push(classes[item]))
  }   

  return (
    <button className={addClasses.join(' ')} 
      onClick={props.communicationClicked || props.modalFormClicked}      
      >
      {props.text}
    </button>
  );
};

export default btn;