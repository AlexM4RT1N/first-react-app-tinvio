import React from "react";

import classes from '../../scss/components/Logo/Logo.module.scss';

const logo = ({ assignClasses }) => {
  const addClasses = [classes.appLogo];
  if (assignClasses) assignClasses.forEach((item) => addClasses.push(classes[item]));

  return (
    <a className={addClasses.join(' ')} href="/">
      <span className="visually-hidden">Logo</span>
    </a>
  );
};

export default logo;