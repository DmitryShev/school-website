import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100px;
  margin-top: 100px;
  background-color: #ffff00; //#ffff00;

`;

const Header = styled.h1`
  color: #000;
  text-align: center;
  text-transform: uppercase;
  min-height: 60px;
  width: 100%;
  padding: 10px;
`;

export const About = () => (
  <Container>
    <Header> • The best Salsa ScHool in Novosibirsk • </Header>
  </Container>
);
