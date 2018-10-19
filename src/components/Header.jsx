import React from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components';

import SalsaLogo from '../assets/img/SalsaLogo.jpg';

const Container = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  top: 0;
  
  height: ${({ top }) => (top ? '120px' : '30px')};
  background-color: ${({ top }) => (top ? '#000' : '#fff')};
  color: ${({ top }) => (top ? '#fff' : '#000')};
  opacity: ${({ top }) => (top ? '1' : '.7')};
  transition: 0.5s;

  //opacity: 0.7;
  //background-image: linear-gradient(to right, #990000, #c24c00, #e18600, #f6c200, #ffff00);
  //background-image: radial-gradient(circle, #051937, #004d7a, #008793, #00bf72, #a8eb12);
  //background-image: radial-gradient(circle, #990000, #b34b00, #bf8100, #bdb600, #a8eb12);
  //background-image: radial-gradient(circle, #990000, #c24c00, #e18600, #f6c200, #ffff00);
  //height: 120px;

  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  align-content: center;
  justify-content: space-between;

  font-family: SourceSansProRegular, GESSTwoLight;
  font-size: ${({ top }) => (top ? '1.3rem' : '.9rem')};
  //font-size: 1.3rem;
  letter-spacing: .2em;
  text-transform: uppercase;
  font-weight: bold;
`;

const Menu = styled.ul`

  width: 500px;
  text-align: center;
`;

const MenuLeft = styled.ul`
  
  width: 500px;
  text-align: center;
`;

const Item = styled.li`
  display: inline-block;
  margin: 20px;

  :hover {
    opacity: .5;
    cursor: pointer;
  }
`;

const Logo = styled.div`
  width: 110px;
  height: 110px;
  flex-shrink: 0;
  img {
    width: 100%;
    height: 100%;
    border-radius: 100px;
    //box-shadow: 0 0 0 1px #990000, 0 0 70px #990000;
  }
`;

export const Header = ({ scrollTop }) => (
  <Container top={scrollTop}>
    <Menu>
      <Item>Home</Item>
      <Item>Тренера</Item>
      <Item>Расписание</Item>
    </Menu>
    {scrollTop && <Logo><img src={SalsaLogo} alt="Logo" /></Logo>}
    <MenuLeft>
      <Item>Залы</Item>
      <Item>фестивали</Item>
      <Item>Контакты</Item>
    </MenuLeft>
  </Container>
);

Header.propTypes = {
  scrollTop: bool.isRequired
};
