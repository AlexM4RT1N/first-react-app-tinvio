import React from "react";
import Container from '../../components/Container/Container';
import Slider from "../../components/Slider/Slider";
import OverlayWave from "../../components/OverlayWave/OverlayWave";

import classes from '../../scss/app/SectionSlider/SectionSlider.module.scss';

const sectionSlider = () => {
  const slides = [
    {id: 1, title: 'All your orders in one place', image: 'Orders.png', text: 'Say no more to chunky emails and messy WhatsApp messages. Receive and manage your orders in one platform'},
    {id: 2, title: '2 All your orders in one 2222', image: 'OperationalCosts.png', text: 'Say 222 more to chunky emails and messy WhatsApp messages. Receive and manage your orders in 222 platform'},
    {id: 3, title: '3 All your orders in one 3333', image: 'Analytics.png', text: 'Say 333 more to chunky emails and messy WhatsApp messages. Receive and manage your orders in 333 platform'},
  ]    

  return (
    <section className={classes.sectionSlider}>
      <Container assignClasses={['sectionSlider']}>
        <OverlayWave assignClasses={['sectionSlider']} />
        <Slider slides={slides} />
      </Container>
    </section>
  );
};

export default sectionSlider;