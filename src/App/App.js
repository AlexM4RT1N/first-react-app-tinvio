import React, { Component } from 'react';
import Container from '../Components/Container/Container';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Partners from './Partners/Partners';

import './App.scss';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Header />

        <Hero />

        <Partners />

      </div>
    );
  }
}

export default App;
