import React from "react";

import classes from '../../../scss/app/Partners/PartnersList/PartnersList.module.scss';

const partnersItem = ({ name, src }) => {
  return (
    <li className={classes.partnersItem}>
      <img className={classes.itemLogo} 
        src={require(`../../../images/logosPartners/${src}`)} 
        alt={name}
      />
    </li>
  );
};

export default partnersItem;