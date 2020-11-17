import React from "react";
import DescrWithArrow from '../DescrWithArrow/DescrWithArrow';

import classes from '../../../scss/app/SectionForm/SectionForm.module.scss';

const countryList = () => {
  const country = [
    {img: 'Singapore.png', name: 'Singapore'},
    {img: 'Indonesia.png', name: 'Indonesia'},
    {img: 'Australia.png', name: 'Australia'},
    {img: 'Taiwan.png', name: 'Taiwan'},
    {img: 'Hong Kong.png', name: 'Hong Kong'},
    {img: 'Thailand.png', name: 'Thailand'},
    {img: 'India.png', name: 'India'},
    {img: 'Vietnam.png', name: 'Vietnam'},
  ]

  return (
    <div className={classes.wrapCountryList}>
      <DescrWithArrow text={'Or meet us in'} arrow={'right'} />
      <ul className={classes.countryList}>
      { 
        country.map((country, index) => 
          <li className={classes.country} key={index}>
            <img src={require(`../../../images/Form/countries/${country.img}`)} alt=""/>
            <span>{country.name}</span>
          </li>
        ) 
      }
      </ul>        
    </div>
  );
};

export default countryList;