import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import { MenuBar } from '../components/MenuBar';
import { HeaderAbout } from '../components/HeaderAbout';
import { HeaderTeam } from '../components/HeaderTeam';
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
    if (scrollY <= 50 && !scrollTop) {
      this.setState({ scrollTop: true });
    } else if (scrollY > 50 && scrollTop !== false) {
      this.setState({ scrollTop: false });
    }
  }

  render() {
    const { scrollTop } = this.state;
    const { slogan, schoolName, ourTeam } = Texts;
    console.log(window);
    return (
      <Container >
        <MenuBar scrollTop={scrollTop} />
        <VideoPresentation />
        <HeaderAbout slogan={slogan} />
        <Services />
        <HeaderTeam text={ourTeam} />
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