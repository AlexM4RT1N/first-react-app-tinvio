import React from "react";
import classes from './Logo.module.scss';


const logo = (props) => {
  const addClasses = [classes.appLogo];
  
  if(props.assignClasses) {
    const assignClasses = [...props.assignClasses]
    assignClasses.map((item) => addClasses.push(classes[item]))
  } 

  return (
    <a className={addClasses.join(' ')} href="/"><span className="visually-hidden">Logo</span></a>
  );
};

export default logo;