import React, { Component } from "react";
import Container from '../../components/Container/Container';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import PartnersList from './PartnersList/PartnersList';

import classes from '../../scss/app/Partners/Partners.module.scss';

export default class Partners extends Component {
  state = {
    partners: [
      {id: 1, name: 'Go Cheken', logo: 'GoCheken.png'},
      {id: 2, name: 'Jolliebean', logo: 'Jolliebean.svg'},
      {id: 3, name: 'Bens Cookies', logo: 'Bens.svg'},
      {id: 4, name: 'Simply Wrapps', logo: 'SimplyWrapps.png'},
      {id: 5, name: 'Italian Club', logo: 'Italian.png'},
    ]    
  }

  render() {
    return (
      <section className={classes.partners}>
        <Container assignClasses={['partners']}>          
          <SectionTitle assignClasses={['partners']}>
            Trusted by 1000+ partners across APAC
          </SectionTitle>
          <PartnersList partners={this.state.partners}/>
        </Container>
      </section>
    );
  }
};