import React from "react";

import classes from '../../scss/components/Nav/Nav.module.scss';

const item = ({ href, text }) => {  
  return (
    <li className={classes.nav__item}>
      <a href={href}>{text}</a>
    </li>
  );
};

export default item;