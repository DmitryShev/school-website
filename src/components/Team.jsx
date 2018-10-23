import React from 'react';
import styled from 'styled-components';

import { trainers } from './helpers/trainers';
import { MemberCard } from './elements/MemberCard';

const Container = styled.div`
  background-color: #c17a28;//#c17a28;//#eeeeee;
  
  // #ddbb11, #c17a28, #8b472f, #492424, #000000);
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
