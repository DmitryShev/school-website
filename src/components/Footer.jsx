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
  width: 300px;
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
    font-size: 1.1em;
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

  @media (max-width: ${medium}) {
    margin: 10px auto;
  }
`;

const MapsContainer = styled.div`
  margin-top: 20px;

  h3 {
    margin: 5px 40px;

    @media (max-width: ${medium}) {
      margin: 5px 0;
    }
  }
  @media (max-width: ${medium}) {
    margin: 10px auto;
  }

  strong {
    margin: 20px 40px;

    @media (max-width: ${medium}) {
      margin: 0 auto;
    }
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
        <h2>Телефоны для связи</h2>
        <p><a href={`tel:${tel0}`}>{tel0}</a></p>
        <p><a href={`tel:${tel1}`}>{tel1}</a></p>
        <h2>Мы в социальных сетях</h2>
        <a href={vk}><img src={vkIcon} alt="vk logo" /></a>
        <a href={instagram}><img src={instagramIcon} alt="instagram logo" /></a>
      </Contacts>

      <MapsContainer>
        <h3>Адреса занятий:</h3>
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
