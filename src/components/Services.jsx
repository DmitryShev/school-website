import React from 'react';
import styled from 'styled-components';

import { large, medium } from './helpers/deviceSizes';
import { ProductCarousel } from './elements/ProductCarousel';

const Container = styled.div`
  display: flex;

  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;

  background-color: #F9F4E8;
  height: 800px;

  @media (max-width: ${medium}) {
    flex-direction: column;
  }
`;

const Header = styled.h1`
  width: 200px;
  height: 200px;
  margin 40px;
`;

export const Services = () => (
  <Container>
    <Header>Открой для себя мир Salsa Вместе с Salsa Cubana Novosibirsk!</Header>
    <ProductCarousel />
  </Container>
);
