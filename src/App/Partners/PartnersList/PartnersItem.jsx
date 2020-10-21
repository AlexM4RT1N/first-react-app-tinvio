import React, { Component } from "react";

import classes from './PartnersList.module.scss';

class PartnersItem extends Component {

  state = {
    
  }  


  render() {

    const {name, src} = this.props;

    return (
      <li className={classes.partnersItem}>
        <img className={classes.itemLogo} src={require(`../../../images/logosPartners/${src}`)} alt={name}/>
      </li>
    );
  }
};

export default PartnersItem;