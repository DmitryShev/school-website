import React from 'react';
import { string, func } from 'prop-types';
import styled from 'styled-components';

import { medium, large, small } from '../helpers/deviceSizes';


const Container = styled.div`
  width: 220px;
  height: 270px;
  //margin: 10px;
  //border: 1px solid #000;
  
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  background-color: #fff;

  //box-shadow: 0px 0px 100px 0px #000000;

  // display: flex;
  // flex-direction: column;
  // flex-wrap: nowrap;
  // justify-content: center;
  // align-items: center;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: center;

  margin: 10px;
  color: #000;
  //background-image: radial-gradient(circle, #ffff00, #eca521, #b05d34, #5b2c2b, #000000);
  cursor: pointer;
  &:hover {
    opacity: .9;
  }

  &:active {
    box-shadow: inset 1px 1px 10px -1px;
    border: 2px solid #000;
  }

  @media (max-width: ${medium}) {
    width: 50px;
    height: 50px;
    margin: 5px;
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 90%;

  img {
    //border-radius: 100px;
    border-radius: 4px 4px 0 0;
    width: 100%;
    height: 100%;
    //box-shadow: 0 0 0 1px #000;
    // box-shadow: 0 0 0 1px #990000, 0 0 70px #ffff00;
  }
`;

const Title = styled.h3`
  //margin: 10px;
  text-align: center;
  height: 9%;

  @media (max-width: ${medium}) {
    display: none;
  }
  
`;

export const MemberCard = ({ name, img, onClick }) => (
  <Container onClick={onClick}>
    <ImgContainer>
      <img src={img} alt="Trainer" />
    </ImgContainer>
    <Title>{name}</Title>
  </Container>
);

MemberCard.propTypes = {
  name: string.isRequired,
  img: string.isRequired,
  onClick: func.isRequired
};
