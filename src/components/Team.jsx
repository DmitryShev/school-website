import React from 'react';
import styled from 'styled-components';

import { trainers } from './helpers/trainers';
import { MemberCard } from './MemberCard';

const Container = styled.div`
  background-color: #eeeeee;
  
  
`;

const Header = styled.h1`
  text-align: center;
  color: #221111;
  background-color: #ee9999;
  height: 80px;

  display: flex;
  
  justify-content: center;
  align-items: center;
`;

const Members = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  color: #221111;

`;

export const Team = () => (
  <Container>
    <Header>Our Team</Header>
    <Members>
      {trainers.map(item => (
        <MemberCard
          key={item.id}
          name={item.name}
          description={item.description}
          img={item.img}
        />))
      }
    </Members>
  </Container>
);
