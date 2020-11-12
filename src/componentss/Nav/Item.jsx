import React from "react";

import classes from '../../scss/components/Nav/Nav.module.scss';

const item = (props) => {  
  return (
    <li className={classes.nav__item}>
      <a href={props.href}>{props.text}</a>
    </li>
  );
};

export default item;