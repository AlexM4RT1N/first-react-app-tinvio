import React, { Component } from "react";
import Container from '../../components/Container/Container';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Subtitle from '../../components/Subtitle/Subtitle';
import Step from './Step/Step';

import classes from '../../scss/app/SimpleSteps/SimpleSteps.module.scss';

export default class SimpleSteps extends Component {
  state = {
    steps: [
      {img: '1.png', title: 'Get in Touch With Us', text: 'Fill up the form and we’ll reach out to you'},
      {img: '2.png', title: 'Connect to Your Clients', text: 'They’ll receive a fully guided tutorial on how to order'},
      {img: '3.png', title: 'Onboarded In a Heartbeat', text: 'Activated and live within a day'},
    ]
  }

  render() {
    return (
      <section className={classes.simpleSteps}>
        <Container assignClasses={['simpleSteps']}>
          <Subtitle assignClasses={['simpleSteps']}>
            ARE YOU READY?
          </Subtitle>
          <SectionTitle assignClasses={['simpleSteps']}>
            3 Simple Steps to Get Started
          </SectionTitle>
          <ul className={classes.stepsList}>
            { 
              this.state.steps.map((screen, index) => 
                <Step key={index}  img={screen.img} 
                  title={screen.title} text={screen.text} 
                />
              ) 
            }
          </ul>
        </Container>
      </section>
    );
  }
};