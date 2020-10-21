import React, { Component } from "react";
import Container from '../../Components/Container/Container';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import Subtitle from '../../Components/Subtitle/Subtitle';
import Btn from '../../Components/Btn/Btn';
import TextNearBtn from '../../Components/TextNearBtn/TextNearBtn';
import BoxesFruits from './BoxesFruits/BoxesFruits';
import HomePageImg from './HomePageImg/HomePageImg';

import classes from './Hero.module.scss';

class Hero extends Component {

  state = {
    
  }  


  render() {

    return (
      <section className={classes.hero}>
        <Container assignClasses={['hero']}>

          <Subtitle assignClasses={['']}>FOR A SMARTER SUPPLY CHAIN</Subtitle>
          
          <SectionTitle assignClasses={['hero']}>
            Take your business to the next level with Tinvio’s Supplier Platform
          </SectionTitle>

          <Btn assignClasses={['hero']} text={'Get Started Now'} />

          <TextNearBtn assignClasses={['hero']}>Yes, it’s free 🎉</TextNearBtn>

          <BoxesFruits />

          <HomePageImg />

        </Container>

      </section>
    );
  }
};

export default Hero;
