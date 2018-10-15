import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 130px;
  width: 100%;
  color: #fff;
  background-color: #000;
`;

export const Footer = () => (
  <Container>
    <p>© All Rights Reserved. Tilda Publishing Design Co.
    hello@tilda.cc
    </p>
  </Container>
);
