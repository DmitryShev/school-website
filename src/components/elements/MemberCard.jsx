import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';


const Container = styled.div`
  width: 220px;
  height: 260px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 10px;
  color: #000;
  //background-image: radial-gradient(circle, #ffff00, #eca521, #b05d34, #5b2c2b, #000000);
`;

const ImgContainer = styled.div`
  width: 150px;
  height: 150px;

  img {
    border-radius: 100px;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 0 1px #000;
    // box-shadow: 0 0 0 1px #990000, 0 0 70px #ffff00;
  }
`;

const Title = styled.h3`
  margin: 10px;
  text-align: center;
`;

const Description = styled.p`

`;

export const MemberCard = ({ name, img }) => (
  <Container>
    <ImgContainer>
      <img src={img} alt="Trainer img" />
    </ImgContainer>
    <Title>{name}</Title>
  </Container>
);

MemberCard.propTypes = {
  name: string.isRequired,
  description: string.isRequired,
  img: string.isRequired
};
