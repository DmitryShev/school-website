import React from 'react';
import { number } from 'prop-types';
import Slider from 'react-slick';
import styled from 'styled-components';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { products } from '../helpers/products';
import { ProductCard } from './ProductCard';
import { medium, large, small } from '../helpers/deviceSizes';


const Container = styled.div`
  //position: relative;
  width: 50vw;
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

  @media (max-width: ${medium}) {
    width: 60vw;
    margin-top: 10px;
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

export const ProductCarousel = ({ carousel }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: carousel,
    slidesToScroll: carousel,
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

ProductCarousel.propTypes = {
  carousel: number.isRequired
};
