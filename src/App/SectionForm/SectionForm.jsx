import React, { Component } from "react";
import OverlayWave from '../../Components/OverlayWave/OverlayWave';
import Container from '../../Components/Container/Container';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import Subtitle from '../../Components/Subtitle/Subtitle';
import Form from './Form/Form';
import CountryList from './CountryList/CountryList';

import classes from './SectionForm.module.scss';

class SectionForm extends Component {

  state = {    
  }  

  render() {
    

    return (
      <section className={classes.sectionForm}>
        <Container assignClasses={['sectionForm']}>

          <div className={classes.overlayBalls}>
            <div className={classes.ball}></div>
            <div className={classes.ball}></div>
            <div className={classes.ball}></div>
            <div className={classes.ball}></div>
            <div className={classes.ball}></div>
          </div>

          <OverlayWave assignClasses={['sectionForm']} />
          
          <Subtitle assignClasses={['sectionForm']}>
            let’s do this
          </Subtitle>

          <SectionTitle assignClasses={['sectionForm']}>
            Fill up the form and we’ll get in touch within a few hours
          </SectionTitle>          

          <Form id={'mainForm'} />
          
          <CountryList />

        </Container>

      </section>
    );
  }
};

export default SectionForm;
