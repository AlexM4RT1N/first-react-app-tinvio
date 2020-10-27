import React, { Component } from "react";
import Container from '../../Components/Container/Container';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import Btn from '../../Components/Btn/Btn';
import SectionMainText from '../../Components/SectionMainText/SectionMainText';

import classes from './Communication.module.scss';

class Communication extends Component {

  state = {  
    slide: {
      before: 'active',
      after: '',
      img: 'Before.png',
      title: 'Old-School Chaos',
      text: 'Unstructured orders across multiple apps and inboxes. New message notifications and alerts every few minutes',
    }    
  }  

  before = () => {
    console.log('before');

    this.setState({slide: {
      before: 'active',
      after: '',
      img: 'Before.png',
      title: 'Old-School Chaos',
      text: 'Unstructured orders across multiple apps and inboxes. New message notifications and alerts every few minutes',
    }})
  } 
  after = () => {
    console.log('after');
    this.setState({slide: {
      before: '',
      after: 'active',
      img: 'After.png',
      title: '222-School Chao2',
      text: 'Unstructured 22222 across multiple apps and inboxes. New message notifications 222 alerts every few minutes',
    }})
  } 


  render() {

    return (
      <section className={classes.communication}>
        <Container assignClasses={['communication']}>
          
          <SectionTitle assignClasses={['communication']}>
            Communication
          </SectionTitle>

          <div className={classes.wrapBtn}>
            <Btn communicationClicked={() => this.before()} text={'BEFORE'} assignClasses={['communication', this.state.slide.before]} />          
            <Btn communicationClicked={() => this.after()} text={'AFTER'} assignClasses={['communication', this.state.slide.after]} />
          </div>

          <div className={classes.wrapSlides}>
            <img className={classes.imgSlides} src={require(`../../images/BeforeAfter/${this.state.slide.img}`)} alt=""/>

            <h3 className={classes.titleSlides}>{this.state.slide.title}</h3>

            <SectionMainText assignClasses={['communication']}>{this.state.slide.text}</SectionMainText>
          </div>

        </Container>

      </section>
    );
  }
};

export default Communication;
