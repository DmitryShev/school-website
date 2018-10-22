import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import { Header } from '../components/Header';
import { Carousel } from '../components/Carousel';
import { About } from '../components/About';
import { AboutTeam } from '../components/AboutTeam';
import { Services } from '../components/Services';
import { Team } from '../components/Team';
import { Footer } from '../components/Footer';
import { VideoPresentation } from '../components/VideoPresentation';
import { Texts } from '../components/helpers/uiTexts';


const Container = styled.div`
  background-color: #221111;
`;

const history = createHistory();

export class MainContainer extends Component {
  state = {
    scrollTop: true
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { scrollTop } = this.state;
    const { scrollY } = window;
    if (scrollY <= 0 && !scrollTop) {
      this.setState({ scrollTop: true });
    } else if (scrollY > 0 && scrollTop !== false) {
      this.setState({ scrollTop: false });
    }
  }

  render() {
    const { scrollTop } = this.state;
    const { slogan, schoolName, ourTeam } = Texts;
    // console.log(scrollPosition, 'scroll');
    return (
      <Container >
        <Header scrollTop={scrollTop} />
        {/*<Carousel />*/}
        <VideoPresentation />

        <About slogan={slogan} />
        <Services />
        <AboutTeam text={ourTeam} />
        <Team />
        
        <Footer />
      </Container>
    );
  }
}

/*
export const MainContainer = () => (
  <Container>
    <Header />
    <About />
    <Carousel />
    <VideoPresentation />
    <Services />
    <Team />
    <Footer />
  </Container>
);
*/