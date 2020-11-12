import React, { Component } from "react";
import PartnersItem from './PartnersItem';

import classes from '../../../scss/app/Partners/PartnersList/PartnersList.module.scss';

export default class PartnersList extends Component {
  render() {
    const { partners } = this.props;
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
  }
};