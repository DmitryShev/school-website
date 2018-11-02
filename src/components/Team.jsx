import React, { Component } from 'react';
import styled from 'styled-components';

import { trainers } from './helpers/trainers';
import { MemberCard } from './elements/MemberCard';
import { SelectedTeamCard } from './elements/SelectedTeamCard';
import { medium } from './helpers/deviceSizes';

const Container = styled.div`
  background-color: #eeeeee;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: center;
  padding: 20px;

  @media (max-width: ${medium}) {
    flex-direction: column;
  }
`;

const MemberContainer = styled.div`

`;

const Members = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  color: #221111;
  justify-content: flex-start;

  @media (max-width: ${medium}) {
    flex-direction: row;
    justify-content: center;
  }

`;

const WrapSelectedTeamCard = styled.div`
  flex: 1;
`;

export class Team extends Component {
  state = {
    name: trainers[0].name,
    description: trainers[0].description,
    img: trainers[0].img
  }

  updateTeammate = (name, description, img) => {
    if (this.state.name !== name && this.state.description !== description) {
      this.setState({
        name,
        description,
        img
      });
    }
  }

  render() {
    const { name, description, img } = this.state;
    return (
      <Container>
        <MemberContainer>
          <Members>
            {trainers.map(item => (
              <MemberCard
                key={item.id}
                name={item.name}
                description={item.description}
                img={item.img}
                onClick={() => this.updateTeammate(item.name, item.description, item.img)}
              />))
            }
          </Members>
        </MemberContainer>
        <WrapSelectedTeamCard>
          <SelectedTeamCard name={name} description={description} img={img} />
        </WrapSelectedTeamCard>
      </Container>
    );
  }
}
