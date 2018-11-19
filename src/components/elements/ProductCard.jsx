import React from 'react';
import { string, func, number } from 'prop-types';
import styled from 'styled-components';
import { small, medium } from '../helpers/deviceSizes';

const Container = styled.div`
  width: 218px;
  height: 400px;//280px;
  margin: auto;
  cursor: pointer;
  color: #fff;

  :hover {
    opacity: 0.8;
  }

  @media (max-width: ${small}) {
    width: 180px;
  }
`;

const ImgContainer = styled.div`
  height: 280px; // 180px;
    img {
      border-radius: 4px 4px 0 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
    }
`;

const Title = styled.h1`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: #000;
  text-transform: uppercase;
  font-family: SourceSansProRegular, GESSTwoLight;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: .065em;
  height: 60px;
  text-align: center;

  @media (max-width: ${medium}) {
    font-size: 1.2rem;
  }
`;

export const ProductCard = ({
  text,
  img,
  handleShowModal,
  id
}) => (
  <Container onClick={() => handleShowModal(id)}>
    <ImgContainer>
      <img src={img} alt="Dance Icon" />
    </ImgContainer>
    <Title>{text}</Title>
  </Container>
);

ProductCard.propTypes = {
  text: string.isRequired,
  img: string.isRequired,
  handleShowModal: func.isRequired,
  id: number.isRequired
};
