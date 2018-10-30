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
import { Texts, Marcos } from '../components/helpers/uiTexts';


const Container = styled.div`
  background-color: #221111;
`;

const history = createHistory();

export class MainContainer extends Component {
  state = {
    scrollTop: true,
    height: '',
    width: ''
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleWindowSize);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleWindowSize);
  }

  handleScroll = () => {
    const { scrollTop } = this.state;
    const { scrollY } = window;
    if (scrollY <= 30 && !scrollTop) {
      this.setState({ scrollTop: true });
    } else if (scrollY > 30 && scrollTop !== false) {
      this.setState({ scrollTop: false });
    }
  }

  handleWindowSize = () => {
    const { height, width } = this.state;
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
    console.log('height', height);
    console.log('width', width);
  }

  render() {
    const { scrollTop } = this.state;
    const { slogan, schoolName, ourTeam } = Texts;
    return (
      <Container >
        <h3>
          Window width: {this.state.width} and height: {this.state.height}
        </h3>
        
        <MenuBar scrollTop={scrollTop} />
        <VideoPresentation {...Marcos} />
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