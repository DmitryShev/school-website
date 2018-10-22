import React from 'react';
import styled from 'styled-components';
import DG from '2gis-maps';


const Container = styled.div`
  height: 800px;
  width: 100%;
  color: #fff;
  background-color: #000;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;

const Info = styled.div`
  height: 400px;
  width: 400px;
`;

const MapWrap = styled.div`
  margin: 40px;
  height: 300px;
  width: 600px;
`;


const MapContainer = styled.div`
  width: 100%; 
  height: 100%
  margin: 10px;
`;

export class Footer extends React.Component {
  state = {
    // 82.91162967681885,55.034822892327284
  }

  componentDidMount = () => {
    const map = DG.map('map', {
      'center': [55.0348, 82.9118],
      'zoom': 16
    });
    DG.marker([55.0348, 82.9118]).addTo(map).bindPopup('Я попап!');

    const secondMap = DG.map('second-map', {
      'center': [55.0348, 82.9118],
      'zoom': 16
    });
    //DG.marker([55.0348, 82.9118]).addTo(map).bindPopup('Я попап!');
  }

  render() {
    return (
      <Container>
        <Info>
          <p>blablabla lorem</p>
        </Info>
        <MapWrap>
          <MapContainer id="map" />
          <MapContainer id="second-map" />
        </MapWrap>
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
