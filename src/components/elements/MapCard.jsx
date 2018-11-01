import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

import { medium } from '../helpers/deviceSizes';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  align-content: center;
  margin: 20px 40px;
`;

const Address = styled.div`
  margin: 0 20px;
`;

const MapContainer = styled.div`
  width: 600px;
  height: 300px;

  @media (max-width: ${medium}) {
    width: 30vh;
    height: 300px;
  }
`;

export const MapCard = ({ address, id }) => (
  <Container>
    <Address>{address}</Address>
    <MapContainer id={id} />
  </Container>
);

MapCard.propTypes = {
  address: string.isRequired,
  id: string.isRequired
};
