import React from "react";
import OverlayWave from '../../components/OverlayWave/OverlayWave';
import Container from '../../components/Container/Container';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Subtitle from '../../components/Subtitle/Subtitle';
import Form from './Form/Form';
import CountryList from './CountryList/CountryList';

import classes from '../../scss/app/SectionForm/SectionForm.module.scss';

const sectionForm = () => {
  const balls = [ 0, 1, 2, 3, 4 ];

  return (
    <section className={classes.sectionForm}>
      <Container assignClasses={['sectionForm']}>
        <ul className={classes.overlayBalls}>            
        {
          balls.map((item, index) => 
            <div key={index} 
            className={classes.ball}></div>
          )
        }
        </ul>
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
};

export default sectionForm;