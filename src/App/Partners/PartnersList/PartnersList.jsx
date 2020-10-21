import React, { Component } from "react";
import PartnersItem from './PartnersItem';

import classes from './PartnersList.module.scss';

class PartnersList extends Component {

  state = {
    
  }  


  render() {
    const { partners } = this.props;

    return (
      <ul className={classes.partnersList} >
        {
          partners.map((item, index) => {
            return <PartnersItem key={index} name={item.name} src={item.logo} />
          })
        }
      </ul>
    );
  }
};

export default PartnersList;