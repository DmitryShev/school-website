import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100px;
  color: black;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  font-family: SourceSansProRegular, GESSTwoLight;
  font-size: 1.2rem;
  letter-spacing: .175em;
  text-transform: uppercase;
  border-bottom: 1px solid black;
`;

const Menu = styled.ul`

`;

const Item = styled.li`
  display: inline-block;
  margin: 20px;

`;

const Logo = styled.div`
  width: 90px;
  height: 90px;
  
  img {
    width: 100%;
    height: 100%;
    border-radius: 100px; /* Радиус скругления */
    border: 1px solid green; /* Параметры рамки */
  }
`;

export const Header = () => (
  <Container>
    <Menu>
      <Item>Home</Item>
      <Item>Тренера</Item>
      <Item>Расписание</Item>
    </Menu>
    <Logo ><img src="http://dekorokna.by/img/sotr/6.png" alt="Logo" /></Logo>
    <Menu>
      <Item>Залы</Item>
      <Item>Новости</Item>
      <Item>Контакты</Item>
    </Menu>
    
  </Container>
);
