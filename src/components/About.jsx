import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100px;
`;

const Header = styled.h1`
  color: white;
  background-color: black;
  text-align: center;
  text-transform: uppercase;
  min-height: 60px;
  border-bottom: 1px solid black;
  width: 100%
  opacity: .9;
  padding: 10px;
`;

export const About = () => (
  <Container>
    <Header> • The best Salsa ScHool in Novosibirsk • </Header>
  </Container>
);
