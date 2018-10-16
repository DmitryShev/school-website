import React from 'react';
import styled, { css } from 'styled-components';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import { Header } from '../components/Header';
import { Carousel } from '../components/Carousel';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Team } from '../components/Team';
import { Footer } from '../components/Footer';


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

export const MainContainer = () => (
  <Container>
    <Header />
    <About />
    <Carousel />
    <Services />
    <Team />
    <Footer />
  </Container>
);
