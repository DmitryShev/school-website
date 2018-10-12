import React, { Component } from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

import angle from '../assets/img/angle.svg';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 75%;
  margin: 4px 0;
  padding: 0 16px;

  border-radius: 4px;
  background-color: rgba(28, 28, 28, 0.6);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  padding: 8px 0;
  width: 100%;
  min-height: 40px;

  @media (max-width: 768px) {
    min-height: 48px;
  }

  h4 {
    width: 95%;
  }
`;

const AngleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  transform: ${({ hide }) => (hide ? 'rotate(0deg)' : 'rotate(180deg)')};
  transition: all 0.3s ease-in-out;

  img {
    margin: 10px 0;
    @media (max-width: 768px) {
      width: 16px;
      height: 16px;
      margin: 0;
    }
  }
`;

const Text = styled.div`
  display: flex;
  width: 100%;
  margin: 8px;
`;

export class Faq extends Component {
  static propTypes = {
    title: string.isRequired,
    text: string.isRequired
  }

  state = {
    hide: false
  }

  onShow = () => (
    this.setState({ hide: !this.state.hide })
  )

  render() {
    const { title, text } = this.props;
    const { hide } = this.state;
    return (
      <Container>
        <Title onClick={this.onShow}>
          <h4>{title}</h4>
          <AngleWrap hide={hide} >
            <img src={angle} alt="angle" />
          </AngleWrap>
        </Title>

        {hide &&
          <Text>
            <p>
              {text}
            </p>
          </Text>
        }
      </Container>
    );
  }
}
