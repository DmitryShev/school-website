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
  
  font-family: SourceSansProRegular, GESSTwoLight;

  // text-shadow: 1px 1px 2px #ffff00, 0 0 1em #ffff00;
  // background-color: #000;
  // background-color: #eebb33; //#ffff00; #ffff00;
  // background-color: #F9F871; //#ff9a3d, #c55660, #5d3550, #111111);
`;

const Header = styled.h1`
  color: #000;
  text-align: center;
  text-transform: uppercase;
  min-height: 60px;
  width: 100%;
  padding: 10px;
  //background-color: #ff9a3d;
  background-color: #eebb33;
`;

export const About = ({ slogan }) => (
  <Container>
    <Header>{slogan}</Header>
  </Container>
);

About.propTypes = {
  slogan: string.isRequired
};
