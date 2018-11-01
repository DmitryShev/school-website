import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  min-height: 100px;
  background-color: #eebb33;
  font-family: SourceSansProRegular, GESSTwoLight;
`;

const Header = styled.h1`
  color: #000;
  text-align: center;
  text-transform: uppercase;
  min-height: 60px;
  width: 100%;
  padding: 10px;
  background-color: #eebb33;
`;

export const HeaderTeam = ({ text }) => (
  <Container>
    <Header id="Our-Team">{text}</Header>
  </Container>
);

HeaderTeam.propTypes = {
  text: string.isRequired
};
