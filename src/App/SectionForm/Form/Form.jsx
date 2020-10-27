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
            <input className={classes.inputName} name='name' type="text" placeholder='Name' required/>
            <input className={classes.inputBusinessName} name='name' type="text" placeholder='Business Name' required/>
            <input className={classes.inputCode} type="tel" name="code-country" placeholder='+65' required/>
            <input className={classes.inputTel} type="tel" name="phone"  required/>
          </div>

          <Btn assignClasses={['form']} text={'Get Started'} />

          <TextNearBtn  assignClasses={['form']}>No spam, promise 🙌</TextNearBtn>

        </form>
      </div>
    );
  }
};

export default Form;
