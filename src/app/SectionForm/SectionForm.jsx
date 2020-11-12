import React, { Component } from "react";
import OverlayWave from '../../components/OverlayWave/OverlayWave';
import Container from '../../components/Container/Container';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Subtitle from '../../components/Subtitle/Subtitle';
import Form from './Form/Form';
import CountryList from './CountryList/CountryList';

import classes from '../../scss/app/SectionForm/SectionForm.module.scss';

export default class SectionForm extends Component {
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
            Fill up the form and we’ll get in touch within
            { document.documentElement.clientWidth > 1279 ? <br/> : ' '}
            a few hours
          </SectionTitle>
          <Form id={'mainForm'} />
          <CountryList />
        </Container>
      </section>
    );
  }
};