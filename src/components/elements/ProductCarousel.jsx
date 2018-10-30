import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import { products } from '../helpers/products';
import { ProductCard } from './ProductCard';
import { medium, large, small } from '../helpers/deviceSizes';


const Container = styled.div`
  position: relative;
  width: 880px;
  margin: 70px;

  button {
    width: 60px;
    height: 60px;
    margin: 0 -40px;
    z-index: 10;
  }

  button:before {
    font-size: 60px;
    color: #000;
    opacity: 1;
  }
`;

const PagingButton = styled.div`
  background-color: #cc1122;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 20px;
  height: 20px;
`;

export const ProductCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    customPaging: i => <PagingButton><button>{i + 1}</button></PagingButton>
  };

  return (
    <Container>
      <Slider {...settings}>
        {products.map(item =>
          <ProductCard text={item.text} img={item.img} key={item.id} description={item.description} video={item.video} />
        )}
      </Slider>
    </Container>
  );
};

