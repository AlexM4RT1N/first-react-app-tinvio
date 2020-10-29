import React, { Component } from "react";
import OverlayWave from '../../Components/OverlayWave/OverlayWave';
import Form from '../SectionForm/Form/Form';
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

    classAcvtive: '',
    modalAcvtive: '',
  }

  burgerActive = () => {
    const changeClassActive = this.state.classAcvtive ? '' : 'active';
    this.setState({classAcvtive: changeClassActive})
    
  }

  btnGetStartedHeader = () => {
    if(document.documentElement.clientWidth < 768){
      const changeClassActive = this.state.classAcvtive ? '' : 'active';
      this.setState({classAcvtive: changeClassActive})
    } else {
      const changeModalActive = this.state.modalAcvtive ? '' : 'active';
      this.setState({modalAcvtive: changeModalActive})
    }
  }


  render() {

    return (
      <header className="header" >
        <Form modalFormClicked={() => this.btnGetStartedHeader()} classModal={'modal'} modalAcvtive={[this.state.modalAcvtive]} />

        <Container assignClasses={['header']}>

          <OverlayWave assignClasses={['header']} />

          <Logo assignClasses={['header']} />
              
          <Nav modalFormClicked={() => this.btnGetStartedHeader()} btn={true} items={this.state.items} assignClasses={['header', this.state.classAcvtive]} />        

          <Burger clicked={() => this.burgerActive()} assignClasses={[this.state.classAcvtive]} />

        </Container>

      </header>
    );
  }
};

export default Header;
