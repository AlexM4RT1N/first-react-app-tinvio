import React from "react";
import Item from './Item';
import Btn from '../Btn/Btn';

import classes from '../../scss/components/Nav/Nav.module.scss';

const nav = ({ assignClasses, items, btn, modalFormClicked}) => {
  const addClasses = [classes.nav];
  if (assignClasses) assignClasses.forEach((item) => addClasses.push(classes[item]));

  return (
    <div className={addClasses.join(' ')}>
      <div className={classes.overlayWave}></div>
      <ul className={classes.nav__list}>
      {
        items.map((item, index) => 
          <Item key={index} text={item.text} href={item.href} />
        )
      }
      </ul> 
      { 
        btn && (document.documentElement.clientWidth < 768) ? 
        <a href="#mainForm"><Btn modalFormClicked={modalFormClicked} text={'Get Started'} assignClasses={['nav']} /></a> :
        btn && <Btn modalFormClicked={modalFormClicked} text={'Get Started'} assignClasses={['nav']} />
      }
    </div>
  );
};

export default nav;