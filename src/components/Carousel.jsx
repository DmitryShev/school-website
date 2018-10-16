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
  //background-color: #85E858;
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
  //width: 90%;
  padding: 40px;
  //margin: 0 auto;
  max-width: 1024px;

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
    color: #f6c200;
  }
`;




const PagingButton = styled.div`
  background-color: #c24c00;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 20px;
  height: 20px;

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
  centerPadding: '100px',
  speed: 1000,
  customPaging: i => <PagingButton><button>{i + 1}</button></PagingButton>
};

export const Carousel = () => (
  <Container>
  <SliderWrap {...settings}>
    <Photo>
      <img src='https://pp.userapi.com/c638930/v638930295/2f03/mVH7_fbuJfc.jpg'/>
    </Photo>
    <Photo>
      <img src='https://pp.userapi.com/c638930/v638930295/2ec7/1MoY4wCPMGA.jpg' />
    </Photo>
    <Photo>
      <img src='https://pp.userapi.com/c638930/v638930295/2bd0/YSFcDM8u2hg.jpg'/>
    </Photo>
    <Photo>

      <img src='https://pp.userapi.com/c638930/v638930295/2b1c/1G4V86pQpQU.jpg'/>
    </Photo>
    <Photo>

      <img src='https://pp.userapi.com/c637522/v637522295/f657/jobTjsy5tNU.jpg'/>
    </Photo>
    <Photo>

      <img src='https://pp.userapi.com/c636917/v636917295/2dee8/MpHsvNqHgNc.jpg'/>
    </Photo>
  </SliderWrap>
  </Container>
);
