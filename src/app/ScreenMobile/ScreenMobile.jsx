import React from "react";
import OverlayWave from '../../components/OverlayWave/OverlayWave';
import Container from '../../components/Container/Container';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import SectionMainText from '../../components/SectionMainText/SectionMainText';
import Screen from './Screen/Screen';

import classes from '../../scss/app/ScreenMobile/ScreenMobile.module.scss';

const screenMobile = () => {
  const screens = [
    {img: 'Screen1.png', descr: 'Select Items', icon: 'arrow'},
    {img: 'Screen2.png', descr: 'Review Order', icon: 'arrow'},
    {img: 'Screen3.png', descr: 'Send Order', icon: 'tick'},
  ]

  return (
    <section className={classes.screenMobile}>
      <Container assignClasses={['screenMobile']}>
        <OverlayWave assignClasses={['screenMobile']} />          
        <OverlayWave assignClasses={['screenMobileTwo']} />
        <SectionTitle assignClasses={['screenMobile']}>
          Seamless Ordering Experience
        </SectionTitle>
        <SectionMainText assignClasses={['screenMobile']}>
          Increase your sales by 30% with a better checkout 
          experience. Your customers can place orders 
          easily with a few taps on the item list.
        </SectionMainText>
        <ul className={classes.screensList}>
        { 
          screens.map((screen, index) => 
            <Screen key={index} 
              img={screen.img} 
              descr={screen.descr} 
              icon={screen.icon}
            />
          ) 
        }
        </ul>
      </Container>
    </section>
  );
};

export default screenMobile;