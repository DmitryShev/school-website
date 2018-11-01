import React from 'react';
import styled from 'styled-components';
import DG from '2gis-maps';

import { MapCard } from './elements/MapCard';
import { Contacts as contArr } from './helpers/uiTexts';
import { medium } from './helpers/deviceSizes';


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
    //width: auto;
  }
`;

export class Footer extends React.Component {
  state = {
    // 82.91162967681885,55.034822892327284
    // 54.94807990933321,"lon":83.00189099999999,"zoom":11
    /*

    */
  }

  componentDidMount = () => {
    const map = DG.map('map', {
      'center': [55.0348, 82.9118],
      'zoom': 16
    });
    DG.marker([55.0348, 82.9118]).addTo(map).bindPopup('Я попап!');

    const secondMap = DG.map('second-map', {
      'center': [54.8481, 83.0921],
      'zoom': 16
    });
    DG.marker([54.8481, 83.0921]).addTo(secondMap).bindPopup('Я попап!');
  }

  render() {
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
          <MapCard id={id} address={address0} />
          <MapCard id={secondId} address={address1} />
        </MapsContainer>
      </Container>
    );
  }
}

/* <a class="dg-widget-link"
/* href="http://2gis.ru/novosibirsk/firm/70000001024116967/center/82.91162967681885,55.034822892327284/zoom/16?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=bigMap">Посмотреть на карте Новосибирска</a>
<div class="dg-widget-link">
<a href="http://2gis.ru/novosibirsk/firm/70000001024116967/photos/70000001024116967/center/82.91162967681885,55.034822892327284/zoom/17?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=photos">Фотографии компании</a></div><div class="dg-widget-link"><a href="http://2gis.ru/novosibirsk/center/82.911621,55.034392/zoom/16/routeTab/rsType/bus/to/82.911621,55.034392╎Salsa Cubana Novosibirsk, студия танца?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=route">Найти проезд до Salsa Cubana Novosibirsk, студия танца</a></div><script charset="utf-8" src="https://widgets.2gis.com/js/DGWidgetLoader.js"></script><script charset="utf-8">new DGWidgetLoader({"width":640,"height":600,"borderColor":"#a3a3a3","pos":{"lat":55.034822892327284,"lon":82.91162967681885,"zoom":16},"opt":{"city":"novosibirsk"},"org":[{"id":"70000001024116967"}]});</script><noscript style="color:#c00;font-size:16px;font-weight:bold;">Виджет карты использует JavaScript. Включите его в настройках вашего браузера.</noscript>

*/
/*export const Footer = () => (
  <Container>
    <p>© All Rights Reserved. Tilda Publishing Design Co.
    hello@tilda.cc
    </p>
    <div id="map" style="width: 100%; height: 400px;">
    
    </div>
    <script>{
            DG.then(function() {
                DG.map('map', {
                    center: [54.98, 82.89],
                    zoom: 13
                });
            })
          }
        </script>
  </Container>
);*/
