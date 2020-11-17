import React, { Component } from "react";
import Form from '../SectionForm/Form/Form';
import Container from '../../components/Container/Container';
import Logo from '../../components/Logo/Logo';
import Nav from '../../components/Nav/Nav';
import Burger from './Burger/Burger';

import classes from '../../scss/app/Header/Header.module.scss';

export default class Header extends Component {
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
  headerRef = React.createRef()

  htmlLock = (bool) => {
    document.documentElement.style.overflow = bool ? 'hidden auto' : 'hidden hidden'; 
    document.documentElement.style.height = bool ? 'auto' : '100vh';
  }

  burgerActive = () => {
    const changeClassActive = this.state.classAcvtive ? '' : 'active';
    this.setState({classAcvtive: changeClassActive});
    this.htmlLock(this.state.classAcvtive);
  }

  btnGetStartedHeader = () => {
    if(document.documentElement.clientWidth < 768){
      const changeClassActive = this.state.classAcvtive ? '' : 'active';
      this.setState({classAcvtive: changeClassActive});
      this.htmlLock(this.state.classAcvtive);
    } else {
      const changeModalActive = this.state.modalAcvtive ? '' : 'active';
      this.setState({modalAcvtive: changeModalActive});
      this.htmlLock(this.state.modalAcvtive);
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', (e) => {
      document.documentElement.scrollTop ? 
      this.headerRef.current.style.backgroundColor = 'white' :
      this.headerRef.current.style.backgroundColor = 'transparent';
    })
  }

  render() {
    return (
      <header ref={this.headerRef}  className={classes.header} >
        <Form modalFormClicked={this.btnGetStartedHeader} 
          classModal={'modal'} 
          modalAcvtive={[this.state.modalAcvtive]} 
        />
        <Container assignClasses={['header']}>
          <Logo assignClasses={['header']} />              
          <Nav modalFormClicked={this.btnGetStartedHeader} 
            btn={true} 
            items={this.state.items} 
            assignClasses={['header', this.state.classAcvtive]} 
          />
          <Burger clicked={this.burgerActive} 
            assignClasses={[this.state.classAcvtive]} 
          />
        </Container>
      </header>
    );
  }
};