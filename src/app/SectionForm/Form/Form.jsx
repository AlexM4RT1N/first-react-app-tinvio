import React, { Component } from "react";
import DescrWithArrow from '../DescrWithArrow/DescrWithArrow';
import Btn from '../../../components/Btn/Btn'
import TextNearBtn from '../../../components/TextNearBtn/TextNearBtn'

import classes from '../../../scss/app/SectionForm/Form/Form.module.scss';

export default class Form extends Component {
  state = {
    active: false
  }

  render() {
    const { id, modalFormClicked, modalAcvtive, classModal } = this.props;
    return (
      <div className={`${classes.wrapForm} ${classes[classModal]} ${classes[modalAcvtive]}`}>
        <DescrWithArrow text={'Let’s get to know each other'} arrow={'left'}/>        
        <form id={id} className={classes.form} action="#">
          <div onClick={modalFormClicked} className={classes.closeModalForm}></div>
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
          <TextNearBtn  assignClasses={['form']}>No spam, promise <span role="img" aria-label="promise">🙌</span></TextNearBtn>
        </form>
        <div onClick={modalFormClicked} className={classes.closeOverlayModal}></div>
      </div>
    );
  }
};