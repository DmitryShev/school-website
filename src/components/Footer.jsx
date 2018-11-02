import React from 'react';
import styled from 'styled-components';

import { Contacts as contArr, mapLink0, mapLink1 } from './helpers/uiTexts';
import { medium } from './helpers/deviceSizes';
import map0 from '../assets/img/map0.png';
import map1 from '../assets/img/map1.png';
import vkIcon from '../assets/img/vk.svg';
import instagramIcon from '../assets/img/instagram.svg';


const Container = styled.div`
  width: 100%;
  color: #fff;
  background-color: #000;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;

const Contacts = styled.div`
  margin: 0 40px;
  font-size: 1.2em;
  
  h1 {
    line-height: 1em;
    margin: 10px 0;
    font-family: SourceSansProBold;
  }

  h2 {
    margin: 5px 0;
  }

  a {
    text-size: 1.1em;
    color: #eebb33;
    font-family: SourceSansProBold;
  }
  a:visited {
    color: #eebb33;
  }
  a:hover {
    opacity: 0.5;
  }

  img {
    width: 32px;
    height: 32px;
    margin-right: 10px;
    :hover {
      opacity: 0.5;
    }

    @media (max-width: ${medium}) {
      width: 54px;
      height: 54px;
    }
  }
`;

const MapsContainer = styled.div`
  @media (max-width: ${medium}) {
    margin: 0 auto;
  }
`;

const MapCard = styled.div`
  background: url(${({ map }) => map}) center no-repeat;
  border-radius: 4px;
  width: 600px;
  height: 300px;
  cursor: pointer;
  margin: 20px 40px;
  :hover {
    opacity: 0.9;
  }

  @media (max-width: ${medium}) {
    width: 300px;
    height: 300px;
    margin: 20px 0px;
  }
`;

export const Footer = () => {
  const {
    tel0,
    tel1,
    address0,
    address2,
    vk,
    instagram
  } = contArr;
  return (
    <Container id="footer">
      <Contacts>
        <h1>Контакты</h1>
        <h2><strong>Телефоны для связи:</strong></h2>
        <p><a href={tel0}>{tel0}</a></p>
        <p><a href={tel1}>{tel1}</a></p>
        <h2>Мы в социальных сетях</h2>
        <a href={vk}><img src={vkIcon} alt="vk logo" /></a>
        <a href={instagram}><img src={instagramIcon} alt="instagram logo" /></a>
        <h2>Где мы занимаемся</h2>
      </Contacts>

      <MapsContainer>
        <p><strong>{address0}</strong></p>
        <a href={mapLink0}>
          <MapCard map={map0} />
        </a>

        <p><strong>{address2}</strong></p>
        <a href={mapLink1}>
          <MapCard map={map1} />
        </a>
      </MapsContainer>
    </Container>
  );
};
