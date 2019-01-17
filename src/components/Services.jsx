import React from 'react';

import styled from 'styled-components';

import { medium } from './helpers/deviceSizes';
import { ProductCarousel } from './elements/ProductCarousel';
import SalsaLogoBlack from '../assets/img/icon.svg';

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;

  background-color: #F9F4E8;

  height: 600px;

  @media (max-width: ${medium}) {
    flex-direction: column;
    height: 850px;
    justify-content: flex-start;
  }

`;

const Header = styled.h1`
  width: 200px;
  // height: 420px;
  margin: 40px;
  text-align: center;
  font-family: SourceSansPro;

  img {
    width: 200px;
    height: 200px;
  }

  em {
    font-family: SourceSansBold;
  }

  @media (max-width: ${medium}) {
    text-align: center;
    margin: 20px 20px 10px 20px;
  }
`;

export const Services = () => (
  <Container>
    <Header>
      <p><i>Открой для себя мир <em>SALSA</em> Вместе с</i></p>
      <img src={SalsaLogoBlack} alt="logo" />
    </Header>
    <ProductCarousel />
  </Container>
);
