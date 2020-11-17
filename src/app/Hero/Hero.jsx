import React from "react";
import OverlayWave from '../../components/OverlayWave/OverlayWave';
import Container from '../../components/Container/Container';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Subtitle from '../../components/Subtitle/Subtitle';
import Btn from '../../components/Btn/Btn';
import TextNearBtn from '../../components/TextNearBtn/TextNearBtn';
import BoxesFruits from './BoxesFruits/BoxesFruits';
import HomePageImg from './HomePageImg/HomePageImg';

import classes from '../../scss/app/Hero/Hero.module.scss';

const hero = () => {
  return (
    <section className={classes.hero}>
      <Container assignClasses={['hero']}>
        <OverlayWave assignClasses={['hero']} />
        <Subtitle assignClasses={['']}>
          FOR A SMARTER SUPPLY CHAIN
        </Subtitle>          
        <SectionTitle assignClasses={['hero']}>
          Take your business to the next level with Tinvio’s Supplier Platform
        </SectionTitle>
        <a href="#mainForm">
          <Btn assignClasses={['hero']} text={'Get Started Now'} />
        </a>
        <TextNearBtn assignClasses={['hero']}>
          Yes, it’s free <span role="img" aria-label="firecracker">🎉</span>
        </TextNearBtn>
        <BoxesFruits />
        <HomePageImg />
      </Container>
    </section>
  );
};

export default hero;