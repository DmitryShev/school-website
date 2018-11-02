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
    if (scrollY <= 30 && !scrollTop) {
      this.setState({ scrollTop: true });
    } else if (scrollY > 30 && scrollTop) {
      this.setState({ scrollTop: false });
    }
  }

  showMenu = () => (
    this.setState({ scrollTop: true })
  );

  render() {
    const { scrollTop } = this.state;
    const { slogan, ourTeam } = Texts;
    return (
      <Container>
        <MenuBar scrollTop={scrollTop} showMenu={this.showMenu} />
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
