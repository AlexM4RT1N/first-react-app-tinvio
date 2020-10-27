import React, { Component } from "react";
import Container from '../../Components/Container/Container';
import Logo from '../../Components/Logo/Logo';
import Nav from '../../Components/Nav/Nav';

import './Header.scss';

class Footer extends Component {

  state = {
    items: [
      {text: 'Home', href: '#0'},
      {text: 'Supplier', href: '#1'},
      {text: 'About', href: '#2'},
      {text: 'Contact', href: '#3'},
      {text: 'Contact', href: '#4'},
      {text: 'Contact', href: '#5'},
    ],
  }

  

  render() {
    return (
      <header className="header">
        <Container assignClasses={['header']}>

          <Logo assignClasses={['header']} />
              
          <Nav items={this.state.items} assignClasses={['header', this.state.classAvtive]} />        

        </Container>

      </header>
    );
  }
};

export default Footer;
