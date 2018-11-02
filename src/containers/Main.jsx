import React, { Component } from 'react';
import styled from 'styled-components';

// components

import { MenuBar } from '../components/MenuBar';
import { HeaderAbout } from '../components/HeaderAbout';
import { HeaderTeam } from '../components/HeaderTeam';
import { Services } from '../components/Services';
import { Team } from '../components/Team';
import { Footer } from '../components/Footer';
import { VideoPresentation } from '../components/VideoPresentation';

// helpers
import { Texts, Marcos } from '../components/helpers/uiTexts';


const Container = styled.div`
  background-color: #221111;
`;

export class MainContainer extends Component {
  state = {
    scrollTop: true,
    carousel: 1
  }

  componentWillMount = () => {
    this.handleWindowSize();
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
    } else if (scrollY > 30 && scrollTop) {
      this.setState({ scrollTop: false });
    }
  }

  handleWindowSize = () => {
    const { carousel } = this.state;
    const { innerWidth } = window;

    switch (true) {
      case (innerWidth < 768 && carousel !== 1):
        this.setState({ carousel: 1 });
        // console.log('carousel: 1');
        break;
      case (innerWidth <= 1024 && innerWidth >= 768 && carousel !== 2):
        this.setState({ carousel: 2 });
        // console.log('carousel: 2');
        break;
      case (innerWidth > 1024 && carousel !== 3):
        this.setState({ carousel: 3 });
        // console.log('carousel: 3');
        break;
      default:
        break;
    }

    // if (innerWidth <= 768 && !width) {
    //   this.setState({ width: true });
    //   console.log('true');
    // } else if (innerWidth > 768 && width) {
    //   this.setState({ width: false });
    //   console.log('false');
    // }
  }

  showMenu = () => (
    this.setState({ scrollTop: true })
  );

  render() {
    const { scrollTop, carousel } = this.state;
    const { slogan, ourTeam } = Texts;
    return (
      <Container >
        <MenuBar scrollTop={scrollTop} showMenu={this.showMenu} />
        <VideoPresentation {...Marcos} />
        <HeaderAbout slogan={slogan} />
        <Services carousel={carousel} />
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
