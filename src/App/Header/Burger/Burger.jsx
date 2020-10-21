import React from "react";
import classes from'./Burger.module.scss'


const burger = (props) => {
  const addClasses = [classes.burger];
  
  if(props.assignClasses) {
    const assignClasses = [...props.assignClasses]    
    assignClasses.map((item) => addClasses.push(classes[item]))
  }   
  
  return (
    <div className={addClasses.join(' ')} onClick={props.clicked}>
      <span className={classes.upLine}></span>
      <span className={classes.midLine}></span>
      <span className={classes.downLine}></span>
    </div>
  );
};

export default burger;