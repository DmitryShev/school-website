import React from 'react';
import styled from 'styled-components';

import { Contacts as contArr } from './helpers/uiTexts';
import { medium } from './helpers/deviceSizes';
import map0 from '../assets/img/map0.png';
import map1 from '../assets/img/map1.png';


const Container = styled.div`
  //height: 700px;
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
  a {
    text-decoration: none;
    color: yellow;
    
  }
`;

const MapsContainer = styled.div`
  @media (max-width: ${medium}) {
    margin: 0 auto;
  }
`;

const MapCard = styled.div`
  background: url(${({ map }) => map}) center no-repeat;
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
    margin: 20px 5px;
  }
`;

const mapLink0 = "http://2gis.ru/novosibirsk/firm/70000001024116967/center/82.91162967681885,55.034822892327284/zoom/16?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=bigMap";
const mapLink1 = "http://2gis.ru/novosibirsk/firm/141265769740098/center/83.092161,54.848143/zoom/16?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=bigMap";

export const Footer = () => {
  const id = 'map';
  const secondId = 'second-map';
  const {
    tel0,
    tel1,
    address0,
    address1,
    address2,
    vk,
    instagram
  } = contArr;
  return (
    <Container id="footer">
      <Contacts>
        <h1>Контакты</h1>
        <p>Телефоны для связи:</p>
        <p>{tel0}</p>
        <p>{tel1}</p>
        <h1>Мы в социальных сетях</h1>
        <p>Группа Вконтакте</p>
        <a href={vk}>Salsa_Cubana_nsk</a>
        <p>Instagram</p>
        <a href={instagram}>Salsa_Cubana_nsk</a>
      </Contacts>
      <MapsContainer>
        <a href={mapLink0}>
          <MapCard map={map0} />
        </a>

        <a href={mapLink1}>
          <MapCard map={map1} />
        </a>
      </MapsContainer>
    </Container>
  );
};
