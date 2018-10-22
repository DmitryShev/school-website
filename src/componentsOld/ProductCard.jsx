import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 260px;
  height: 190px;
  margin: 10px;
`;

const Description = styled.div`
  text-align: center;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: SourceSansProRegular, GESSTwoLight;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: .065em;
  height: 40px;
`;

const ImgContainer = styled.div`
height: 150px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const ProductCard = ({ text, img }) => (
  <Container>
    <ImgContainer>
      <img src={img} alt="Dance Icon" />
    </ImgContainer>
    <Description>{text}</Description>
  </Container>
);

ProductCard.propTypes = {
  text: string.isRequired,
  img: string.isRequired
};

