import React, { Component } from "react";
import DescrWithArrow from '../DescrWithArrow/DescrWithArrow';
import Btn from '../../../Components/Btn/Btn'
import TextNearBtn from '../../../Components/TextNearBtn/TextNearBtn'

import classes from './Form.module.scss';

class Form extends Component {

  state = {
  }  


  render() {

    return (
      <div className={classes.wrapForm}>
        <DescrWithArrow text={'Let’s get to know each other'} arrow={'left'} />
        
        <form className={classes.form} action="#">

          <h3 className={classes.formTitle}>Hi, we are Tinvio! And you?</h3>

          <div className={classes.wrapInputs}>
            <div className={`${classes.inputName} ${classes.input}`}>
              <input name='name' id='name' type="text" placeholder='Name' required/>              
              <label htmlFor="name">Name</label>
            </div>
            <div className={`${classes.inputBusinessName} ${classes.input}`}>
              <input name='businessName' id='businessName' type="text" placeholder='Business Name' required/>
              <label htmlFor="name">Business Name</label>
            </div>
            <div className={`${classes.inputCode} ${classes.input}`}>
              <input type="tel" name="code-country" id='code-country' placeholder='+65' required/>
              <label htmlFor="name">Code</label>
            </div>
            <div className={`${classes.inputTel} ${classes.input}`}>
              <input type="tel" name="phone" id='phone'  required/>
              <label htmlFor="name">Phone</label>
            </div>
          </div>

          <Btn assignClasses={['form']} text={'Get Started'} />

          <TextNearBtn  assignClasses={['form']}>No spam, promise 🙌</TextNearBtn>

        </form>
      </div>
    );
  }
};

export default Form;
