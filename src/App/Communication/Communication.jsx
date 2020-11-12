import React, { Component } from "react";
import Container from '../../components/Container/Container';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Btn from '../../components/Btn/Btn';
import SectionMainText from '../../components/SectionMainText/SectionMainText';
import Animations from '../../components/Animations/Animations';

import classes from '../../scss/app/Communication/Communication.module.scss';

export default class Communication extends Component {
  state = {  
    slide: {
      before: 'active',
      after: '',
      img: 'Before',
      title: 'Old-School Chaos',
      text: 'Unstructured orders across multiple apps and inboxes. New message notifications and alerts every few minutes',
    }    
  }  

  before = () => {
    this.setState({slide: {
      before: 'active',
      after: '',
      img: 'Before',
      title: 'Old-School Chaos',
      text: 'Unstructured orders across multiple apps and inboxes. New message notifications and alerts every few minutes',
    }})
  } 
  after = () => {
    this.setState({slide: {
      before: '',
      after: 'active',
      img: 'After',
      title: '222-School Chao2',
      text: 'Unstructured 22222 across multiple apps and inboxes. New message notifications 222 alerts every few minutes',
    }})
  }

  render() {
    const img = this.state.slide.img;
    return (
      <section className={classes.communication}>
        <Container assignClasses={['communication']}>          
          <SectionTitle assignClasses={['communication']}>
            Communication
          </SectionTitle>
          <div className={classes.wrapBtn}>
            <Btn communicationClicked={() => this.before()} text={'BEFORE'} 
              assignClasses={['communication', this.state.slide.before]} 
            />          
            <Btn communicationClicked={() => this.after()} text={'AFTER'} 
              assignClasses={['communication', this.state.slide.after]} 
            />
          </div>
          <div className={classes.imgSlides}>
            { 
              img === 'Before' ? <img 
                src={require(`../../images/BeforeAfter/Before.png`)} 
                alt="Before"/> :
              img === 'After' && <Animations /> 
            }
          </div>
          <h3 className={classes.titleSlides}>{this.state.slide.title}</h3>
          <SectionMainText assignClasses={['communication']}>
            {this.state.slide.text}
          </SectionMainText>
        </Container>
      </section>
    );
  }
};