import React, { Component } from "react";
import Container from '../../Components/Container/Container';
import Logo from '../../Components/Logo/Logo';
import Nav from '../../Components/Nav/Nav';

import classes from './Footer.module.scss';

class Footer extends Component {

  state = {
    items: [
      {text: 'Home', href: '#0'},
      {text: 'About', href: '#1'},
      {text: 'Contact', href: '#2'},
      {text: 'FAQ', href: '#3'},
      {text: 'Blog', href: '#4'},
      {text: 'Legal', href: '#5'},
    ],
  }

  

  render() {
    return (
      <footer className={classes.footer}>
        <Container assignClasses={['footer']}>

          <Logo assignClasses={['footer']} />
              
          <Nav btn={false} items={this.state.items} assignClasses={['footer']} />   

          <ul className={classes.socialList}>
            <li className={classes.socialItem}><a className={classes.socialLink} href="#"><span className="visually-hidden">Instagram</span></a></li>
            <li className={classes.socialItem}><a className={classes.socialLink} href="#"><span className="visually-hidden">Linkedin</span></a></li>
          </ul> 

          <ul className={classes.downloadList}>
            <li className={classes.downloadItem}><a className={classes.downloadLink} href="#"><span className="visually-hidden">Download on the App Store</span></a></li>
            <li className={classes.downloadItem}><a className={classes.downloadLink} href="#"><span className="visually-hidden">Get it on Google Play</span></a></li>
          </ul>  

          <span className={classes.footerCopy}>© Tinvio™ 2019. All Rights Reserved</span>   

        </Container>
      </footer>
    );
  }
};

export default Footer;
