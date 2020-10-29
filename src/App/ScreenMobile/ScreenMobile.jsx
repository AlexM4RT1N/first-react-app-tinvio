import React, { Component } from "react";
import OverlayWave from '../../Components/OverlayWave/OverlayWave';
import Container from '../../Components/Container/Container';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import SectionMainText from '../../Components/SectionMainText/SectionMainText';
import Screen from './Screen/Screen';

import classes from './ScreenMobile.module.scss';


class ScreenMobile extends Component {

  state = {
    screens: [
      {img: 'Screen1.png', descr: 'Select Items', icon: 'arrow'},
      {img: 'Screen2.png', descr: 'Review Order', icon: 'arrow'},
      {img: 'Screen3.png', descr: 'Send Order', icon: 'tick'},
    ]
  }  


  render() {

    return (
      <section className={classes.screenMobile}>
        <Container assignClasses={['screenMobile']}>

          <OverlayWave assignClasses={['screenMobile']} />
          
          <OverlayWave assignClasses={['screenMobileTwo']} />

          <SectionTitle assignClasses={['screenMobile']}>
            Seamless Ordering Experience
          </SectionTitle>

          <SectionMainText assignClasses={['screenMobile']}>
            Increase your sales by 30% with a better checkout experience. Your customers can place orders easily with a few taps on the item list
          </SectionMainText>

          <ul className={classes.screensList}>
            { this.state.screens.map((screen, index) => <Screen key={index}  img={screen.img} descr={screen.descr} icon={screen.icon} />) }
          </ul>


        </Container>

      </section>
    );
  }
};

export default ScreenMobile;
