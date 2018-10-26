import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import { large, medium } from './helpers/deviceSizes';

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  min-height: 100px;
  font-family: SourceSansProRegular;
`;

const Header = styled.h1`
  color: #000;
  text-align: center;
  text-transform: uppercase;
  min-height: 60px;
  width: 100%;
  padding: 10px;
  background-color: #eebb33;

  @media (max-width: ${medium}) {
    font-size: .9rem;
  }
`;

export const HeaderAbout = ({ slogan }) => (
  <Container>
    <Header>{slogan}</Header>
  </Container>
);

HeaderAbout.propTypes = {
  slogan: string.isRequired
};
