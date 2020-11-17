import React from 'react';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Partners from './Partners/Partners';
import SectionSlider from './SectionSlider/SectionSlider';
import Communication from './Communication/Communication';
import ScreenMobile from './ScreenMobile/ScreenMobile';
import SimpleSteps from './SimpleSteps/SimpleSteps';
import SectionForm from './SectionForm/SectionForm';
import Footer from './Footer/Footer';

import '../scss/app/App.scss';

const app = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Partners />
      <SectionSlider />
      <Communication />
      <ScreenMobile />
      <SimpleSteps />
      <SectionForm />
      <Footer />
    </div>
  );
}

export default app;