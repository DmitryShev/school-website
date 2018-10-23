import React, { Component } from 'react';
import styled from 'styled-components';

import { trainers } from './helpers/trainers';
import { MemberCard } from './elements/MemberCard';
import { SelectedTeamCard } from './elements/SelectedTeamCard';

const Container = styled.div`
  background-color: #eeeeee;//#c17a28;//#eeeeee;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  //align-items: center;
  align-content: center;
  padding: 20px;
  
  // #ddbb11, #c17a28, #8b472f, #492424, #000000);
`;

const MemberContainer = styled.div`
  
`;

const Members = styled.div`
  display: flex;
  flex-wrap: wrap;
  //justify-content: space-between;
  align-items: center;
  align-content: center;
  color: #221111;
  justify-content: flex-start;

`;

const WrapSelectedTeamCard = styled.div`
  flex: 1;
`;

export class Team extends Component {
  state = {
    name: 'Marcos',
    description: 'Fernandes',
    video: '...',
    img: '...'
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

/*
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
*/
