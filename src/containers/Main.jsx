import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import { Header } from '../components/Header';
import { Carousel } from '../components/Carousel';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Team } from '../components/Team';
import { Footer } from '../components/Footer';
import { VideoPresentation } from '../components/VideoPresentation';
import { Texts } from '../components/helpers/uiTexts';


const Container = styled.div`

  background-color: #221111;
  
//#fcf8ee
`;
//   display: flex;
//   color: white;
//   overflow: hidden;
//   position: relative;

//   ${({ lang }) => (lang === 'en'
//     ? css`background-image: radial-gradient(circle at 74% 50%, #64729c, #222a41);`
//     : css`background-image: radial-gradient(circle at 50% 74%, #64729c, #222a41);`)
// }


const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: 800px;
  height: ${({ fixed }) => (fixed ? '100vh' : 'auto')};
  min-height: 100vh;

  @media (max-width: 768px) {
    height: auto;
  }
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
    const { slogan } = Texts;
    // console.log(scrollPosition, 'scroll');
    return (
      <Container >
        <Header scrollTop={scrollTop} />
        {/*<About slogan={slogan} />*/}
        {/*<Carousel />*/}
        <VideoPresentation />


        <Services />
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