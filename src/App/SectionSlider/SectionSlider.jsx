import React, { Component } from "react";
import Container from '../../Components/Container/Container';
import Slider from "../../Components/Slider/Slider";
import OverlayWave from "../../Components/OverlayWave/OverlayWave";

import classes from './SectionSlider.module.scss';

class SectionSlider extends Component {

  state = {
    slides: [
      {active: false, id: 1, title: 'All your orders in one place', images: 'Orders.png', text: 'Say no more to chunky emails and messy WhatsApp messages. Receive and manage your orders in one platform'},
      {active: true, id: 2, title: '2 All your orders in one 2222', images: 'OperationalCosts.png', text: 'Say 222 more to chunky emails and messy WhatsApp messages. Receive and manage your orders in 222 platform'},
      {active: false, id: 3, title: '3 All your orders in one 3333', images: 'Analytics.png', text: 'Say 333 more to chunky emails and messy WhatsApp messages. Receive and manage your orders in 333 platform'},
    ]    
  }  


  render() {

    return (
      <section className={classes.sectionSlider}>
        <Container assignClasses={['sectionSlider']}>
          
          <OverlayWave />

          <Slider slides={this.state.slides} />

        </Container>
      </section>
    );
  }
};

export default SectionSlider;
