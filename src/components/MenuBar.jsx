import React from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components';

import SalsaLogo from '../assets/img/SalsaLogo.jpg';
import SmallMenuIcon from '../assets/img/menu.svg';
import { large, medium } from './helpers/deviceSizes';

const Container = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  top: 0;

  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  align-content: center;
  justify-content: space-between;

  height: ${({ top }) => (top ? '120px' : '30px')};
  background-color: ${({ top }) => (top ? '#000' : '#fff')};
  opacity: ${({ top }) => (top ? '1' : '.8')};
  transition: 0.3s;

  font-family: SourceSansProRegular, sans-serif;
  font-size: ${({ top }) => (top ? '1.2rem' : '1rem')};
  letter-spacing: .2em;
  text-transform: uppercase;
  font-weight: bold;

  a {
    text-decoration: none;
    color: ${({ top }) => (top ? '#fff' : '#000')};
    padding: 3px;
    :visited {
      color: ${({ top }) => (top ? '#fff' : '#000')};
    }
    :hover {
      background-color: #000;
      color: #fff;
      border-radius: 5px;
    }

  }

  @media (max-width: ${medium}) {
    font-size: .8rem;
    justify-content: ${({ top }) => (top ? 'center' : 'flex-end')};
  }

  @media (max-width: ${large}) {
    font-size: .7rem;
  }

  @media (max-width: 1100px) {
    font-size: .8rem;
  }
`;

const Menu = styled.ul`
  width: 500px;
  text-align: center;

  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  align-content: center;
  justify-content: space-around;

  @media (max-width: ${medium}) {
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
    display: ${({ top }) => (top || 'none')};
  }
`;

const MenuLeft = styled.ul`
  width: 500px;
  text-align: center;

  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  align-content: center;
  justify-content: space-around;

  @media (max-width: ${medium}) {
    flex-direction: column;
    align-items: flex-start;
    text-align: right;
    display: ${({ top }) => (top || 'none')};
  }
`;


const Item = styled.li`
  margin: 20px;
  list-style-type: none;
  
  :hover {
    opacity: .5;
    cursor: pointer;
  }

  @media (max-width: ${medium}) { 
    margin: 7px 5px;
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
`;

export const MenuButton = styled.div`
  display: none;
  color: #000;
  opacity: 1;

  @media (max-width: ${medium}) {
    display: ${({ top }) => (top ? 'none' : 'flex')};
    margin: 0 10px;
  }
`;


export const MenuBar = ({ scrollTop }) => {
  let showMenu = false;

  return (
    <Container top={scrollTop}>
      <Menu top={scrollTop}>
        <Item><a href="#">Залы</a></Item>
        <Item><a href="#Our-Team">Тренера</a></Item>
        <Item><a href="#">Расписание</a></Item>
      </Menu>
      {scrollTop && <Logo>
        <img src={SalsaLogo} alt="Logo" />
      </Logo>}
      <MenuLeft top={scrollTop}>
        <Item><a href="#">События</a></Item>
        <Item><a href="#footer">Контакты</a></Item>
        <Item><a href="#">Фестивали</a></Item>
      </MenuLeft>

      <MenuButton top={scrollTop} onClick={() => {
        console.log(showMenu)
        return (showMenu = !showMenu);
      }}>
        <img src={SmallMenuIcon} alt="Menu"  />
        {!showMenu ?
          <div>
            <ul>
              <li><a href="#">Залы</a></li>
              <li><a href="#Our-Team">Тренера</a></li>
              <li><a href="#">Расписание</a></li>
  
              <li><a href="#">События</a></li>
              <li><a href="#footer">Контакты</a></li>
              <li><a href="#">Фестивали</a></li>
            </ul>
          </div>
          : null}
      </MenuButton>
      
    </Container>
  );
};

MenuBar.propTypes = {
  scrollTop: bool.isRequired
};
