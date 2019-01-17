import React, { PureComponent } from 'react';
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

export class Team extends PureComponent {
  state = {
    name: trainers[0].name,
    description: trainers[0].description,
    img: trainers[0].img,
    direction: trainers[0].direction
  }

  updateTeammate = (name, description, img, direction) => {
    this.setState(() => ({
      name,
      description,
      img,
      direction
    }));
  }

  render() {
    const {
      name,
      description,
      img,
      direction
    } = this.state;
    return (
      <Container>
        <MemberContainer>
          <Members>
            {trainers.map(item => (
              <MemberCard
                key={item.id}
                updateTeammate={this.updateTeammate}
                {...item}
              />))
            }
          </Members>
        </MemberContainer>
        <WrapSelectedTeamCard>
          <SelectedTeamCard name={name} description={description} img={img} direction={direction} />
        </WrapSelectedTeamCard>
      </Container>
    );
  }
}
