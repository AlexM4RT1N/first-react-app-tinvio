import React, { Component } from "react";
import Container from '../../Components/Container/Container';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import Subtitle from '../../Components/Subtitle/Subtitle';
import Form from './Form/Form';
import CountryList from './CountryList/CountryList';

import classes from './SectionForm.module.scss';

class SectionForm extends Component {

  state = {    
  }  

  render() {
    

    return (
      <section className={classes.sectionForm}>
        <Container assignClasses={['sectionForm']}>
          
          <Subtitle assignClasses={['sectionForm']}>
            let’s do this
          </Subtitle>

          <SectionTitle assignClasses={['sectionForm']}>
            Fill up the form and we’ll get in touch within a few hours
          </SectionTitle>          

          <Form />
          
          <CountryList />

        </Container>

      </section>
    );
  }
};

export default SectionForm;
