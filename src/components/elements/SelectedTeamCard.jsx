import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

import { medium } from '../helpers/deviceSizes';

const Container = styled.div`
  width: 400px;
  margin: 10px;

  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  background-color: #fff;

  h2 {
    text-align: center;
  }

  h4 {
    padding: 5px;
  }

  p {
    padding: 5px;
    
  }

  transition: 0.5s;

  @media (max-width: ${medium}) {
    margin: 5px;
    width: auto;
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 90%;

  img {
    border-radius: 4px 4px 0 0;
    width: 100%;
    height: 100%;
  }
`;

export const SelectedTeamCard = ({
  name,
  description,
  img,
  direction
}) => (
  <Container>
    <ImgContainer>
      <img src={img} alt="Trainer" />
    </ImgContainer>
    <h2>{name}</h2>
    <h4>{direction}</h4>
    <p>{description}</p>
  </Container>
);

SelectedTeamCard.propTypes = {
  name: string.isRequired,
  img: string.isRequired,
  direction: string.isRequired,
  description: string.isRequired
};
