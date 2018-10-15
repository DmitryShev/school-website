import React from 'react';
import styled from 'styled-components';

import { products } from './helpers/products';
import { ProductCard } from './ProductCard';

const Container = styled.div`
  
`;

const Product = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: space-around;
  background-color: #ddbb11;
  
`;

const Header = styled.h1`
  background-color: #cc1122; //#e6212b;
  margin: 20px 0;
  text-align: center;
  height: 80px;
  color: #fff;

  display: flex;
  
  justify-content: center;
  align-items: center;
`;

export const Services = () => (
  <Container>
    <Header>Our Products</Header>
    <Product>
      {products.map(item => <ProductCard text={item.text} img={item.img} key={item.id} />)}
    </Product>
  </Container>
);
