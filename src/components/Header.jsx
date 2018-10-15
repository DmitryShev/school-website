import React from 'react';
import styled from 'styled-components';

import SalsaLogo from '../assets/img/SalsaLogo.jpg';

const Container = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  top: 0;
  background-color: #000;
  height: 100px;
  color: #fff;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  font-family: SourceSansProRegular, GESSTwoLight;
  font-size: 1.2rem;
  letter-spacing: .175em;
  text-transform: uppercase;
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
  }
`;

export const Header = () => (
  <Container>
    <Menu>
      <Item>Home</Item>
      <Item>Тренера</Item>
      <Item>Расписание</Item>
    </Menu>
    <Logo ><img src={SalsaLogo} alt="Logo" /></Logo>
    <Menu>
      <Item>Залы</Item>
      <Item>Новости</Item>
      <Item>Контакты</Item>
    </Menu>
  </Container>
);
