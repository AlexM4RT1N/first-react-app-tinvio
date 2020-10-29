import React from "react";

import classes from './Btn.module.scss';

const btn = (props) => {
  const addClasses = [classes.btn];
  
  if(props.assignClasses) {
    const assignClasses = [...props.assignClasses]
    assignClasses.map((item) => addClasses.push(classes[item]))
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