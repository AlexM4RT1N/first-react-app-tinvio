import React from "react";
import PartnersItem from './PartnersItem';

import classes from '../../../scss/app/Partners/PartnersList/PartnersList.module.scss';

const partnersList = ({ partners }) => {
  return (
    <ul className={classes.partnersList} >
    {
      partners.map((item, index) => 
        <PartnersItem key={index} 
          name={item.name} 
          src={item.logo} 
        />
      )
    }
    </ul>
  );
};

export default partnersList