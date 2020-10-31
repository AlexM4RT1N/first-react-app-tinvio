import React from "react";
import Item from './Item'
import Btn from '../Btn/Btn';


import classes from './Nav.module.scss';

const nav = (props) => {
  const addClasses = [classes.nav];
  
  if(props.assignClasses) {
    const assignClasses = [...props.assignClasses]
    assignClasses.map((item) => addClasses.push(classes[item]))
  } 

  return (
    <div className={addClasses.join(' ')}>
      <div className={classes.overlayWave}></div>
      <ul className={classes.nav__list}>
        {
          props.items.map((item, index) => {
            return <Item key={index} text={item.text} href={item.href} />
          })
        }
      </ul> 
        { 
          props.btn && (document.documentElement.clientWidth < 768) ? 

          <a href="#mainForm"><Btn modalFormClicked={props.modalFormClicked} text={'Get Started'} assignClasses={['nav']} /></a> :

          props.btn ? <Btn modalFormClicked={props.modalFormClicked} text={'Get Started'} assignClasses={['nav']} /> : null
        }

    </div>
  );
};

export default nav;