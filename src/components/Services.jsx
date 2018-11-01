import React from 'react';
import { number } from 'prop-types';

import styled from 'styled-components';

import { medium } from './helpers/deviceSizes';
import { ProductCarousel } from './elements/ProductCarousel';
import SalsaLogoBlack from '../assets/img/SalsaLogoBlack.svg';

const Container = styled.div`
  display: flex;
  
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;

  background-color: #F9F4E8;
  height: 600px;

  @media (max-width: ${medium}) {
    flex-direction: column;
    height: 700px;
    justify-content: flex-start;
  }
`;

const Header = styled.h1`
  width: 200px;
  height: 320px;
  margin: 40px;
  text-align: center;

  p {

  }

  @media (max-width: ${medium}) {
    margin: 20px 20px 10px 20px;
  }
`;

export const Services = ({ carousel }) => (
  <Container>
    <Header>
      <p>Открой для себя мир Salsa Вместе с</p>
      <img src={SalsaLogoBlack} alt="logo" />
    </Header>
    <ProductCarousel carousel={carousel} />
  </Container>
);

Services.propTypes = {
  carousel: number.isRequired
};
