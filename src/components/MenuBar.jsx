import React from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components';

import SalsaLogo from '../assets/img/SalsaLogo.jpg';
import { SmallMenuIcon } from './helpers/svgs';

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

  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  align-content: center;
  justify-content: space-between;

  font-family: SourceSansProRegular, sans-serif;
  font-size: ${({ top }) => (top ? '1.2rem' : '.9rem')};
  letter-spacing: .2em;
  text-transform: uppercase;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: .8rem;
    height: ${({ top }) => (top ? '120px' : '30px')};
    //border: 1px solid #fff;
    justify-content: ${({ top }) => (top ? 'center' : 'flex-end')};
  }
`;

const Menu = styled.ul`
  width: 500px;
  text-align: center;
  @media (max-width: 768px) { 
    text-align: right;
    display: ${({ top }) => (top || 'none')};
  }
`;

const MenuLeft = styled.ul`
  width: 500px;
  text-align: center;
  @media (max-width: 768px) { 
    text-align: left;
    display: ${({ top }) => (top || 'none')};
  }
`;

const Item = styled.li`
  display: inline-block;
  margin: 20px;

  :hover {
    opacity: .5;
    cursor: pointer;
  }

  @media (max-width: 768px) { 
    margin: 10px 5px;
    display: block;
  }
`;

const Logo = styled.div`
  width: 100px;
  height: 100px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    border-radius: 100px;
  }

  @media (max-width: 768px) {
    
    // width: 80px;
    // height: 80px;
  }
`;

export const MenuButton = styled.div`
  display: none;
  color: black;
  opacity: 1;

  @media (max-width: 768px) {
    display: ${({ top }) => (top ? 'none' : 'flex')};
    margin: 0 10px;
  }
`;


export const MenuBar = ({ scrollTop }) => (
  <Container top={scrollTop}>
    <Menu top={scrollTop}>
      <Item>Залы</Item>
      <Item>Тренера</Item>
      <Item>Расписание</Item>
    </Menu>
    {scrollTop && <Logo><img src={SalsaLogo} alt="Logo" /></Logo>}
    <MenuLeft top={scrollTop}>
      <Item>События</Item>
      <Item>Контакты</Item>
      <Item>Фестивали</Item>
    </MenuLeft>

    <MenuButton top={scrollTop}>
      <SmallMenuIcon />
    </MenuButton>
  </Container>
);

MenuBar.propTypes = {
  scrollTop: bool.isRequired
};
