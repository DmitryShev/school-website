import React from 'react';
import Slider from 'react-slick';
import styled, { css } from 'styled-components';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const Container = styled.div`
  height: 610px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const Photo = styled.div`
  height: 550px;
  img {
    width: 100%;
    height: 100%;

  }
`;

const SliderWrap = styled(Slider)`
  height: 90%;
  width: 90%;
  padding: 40px;
  margin: 0 auto;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  

  button {
    width: 40px;
    height: 40px;
    margin: 10px;
    z-index: 10;
  }
  button:before {
    font-size: 40px;
    color: black;
  }
`;

const settings = {
  dots: true,
  fade: true,
  arrows: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  speed: 1000,
};

export const Carousel = () => (
  <Container>
  
  <SliderWrap {...settings}>
    <Photo>
      <img src='https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.png'/>
    </Photo>
    <Photo>
      <img src='https://html.com/wp-content/uploads/flamingo.jpg' />
    </Photo>
    <Photo>
      <img src='https://prod.media.wapa.pe/670x376/wapa/imagen/2017/01/23/Nota-15441-zumba_para_ninos.jpg'/>
    </Photo>
    <Photo>

      <img src='https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2017/02/23/14878455050932.jpg'/>
    </Photo>
    <Photo>

      <img src='https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.png'/>
    </Photo>
    <Photo>

      <img src='https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.png'/>
    </Photo>
  </SliderWrap>
  </Container>
);
