import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 218px;
  height: 350px;
  margin: 0px;
  cursor: pointer;
  color: #fff;
  :hover {
    opacity: 0.8;
  }
`;

const ImgContainer = styled.div`
  height: 180px;
    img {
      width: 100%;
      height: 100%;
    }
`;

const Title = styled.h1`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;

  //white-space: pre-line;

  background-color: #000;

  text-transform: uppercase;
  font-family: SourceSansProRegular, GESSTwoLight;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: .065em;
  height: 60px;

  :hover {
    
  }
`;

const Description = styled.p`
  background-color: #cc1122;
  height: 110px;
  :hover {
    
  }
`;

export const ProductCard = ({ text, img }) => (
  <Container>
    <ImgContainer>
      <img src={img} alt="Dance Icon" />
    </ImgContainer>
    <Title>{text}</Title>
    <Description>No text</Description>
  </Container>
);

ProductCard.propTypes = {
  text: string.isRequired,
  img: string.isRequired
};

