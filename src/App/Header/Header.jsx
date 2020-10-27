import React, { Component } from "react";
import Container from '../../Components/Container/Container';
import Logo from '../../Components/Logo/Logo';
import Nav from '../../Components/Nav/Nav';
import Burger from './Burger/Burger';

import './Header.scss';

class Header extends Component {

  state = {
    items: [
      {text: 'Home', href: '#0'},
      {text: 'Supplier', href: '#1'},
      {text: 'About', href: '#2'},
      {text: 'Contact', href: '#3'},
    ],

    classAvtive: '',
  }

  burgerActive = () => {
    const changeClassActive = this.state.classAvtive ? '' : 'active';
    this.setState({classAvtive: changeClassActive})
  }


  render() {
    return (
      <header className="header">
        <Container assignClasses={['header']}>

          <Logo assignClasses={['header']} />
              
          <Nav btn={true} items={this.state.items} assignClasses={['header', this.state.classAvtive]} />        

          <Burger clicked={() => this.burgerActive()} assignClasses={[this.state.classAvtive]} />

        </Container>

      </header>
    );
  }
};

export default Header;
