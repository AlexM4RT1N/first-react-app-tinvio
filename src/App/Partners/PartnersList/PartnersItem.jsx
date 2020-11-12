import React, { Component } from "react";

import classes from '../../../scss/app/Partners/PartnersList/PartnersList.module.scss';

export default class PartnersItem extends Component {
  render() {
    const {name, src} = this.props;
    return (
      <li className={classes.partnersItem}>
        <img className={classes.itemLogo} 
          src={require(`../../../images/logosPartners/${src}`)} 
          alt={name}
        />
      </li>
    );
  }
};