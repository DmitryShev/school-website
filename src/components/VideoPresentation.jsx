import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

import Mp4 from '../assets/videos/salsa-bg.mp4';
import MarcImg from '../assets/img/marcos.jpg';
import { medium } from './helpers/deviceSizes';

const Container = styled.div`
  margin-top: 120px;
  width: 100%;
  height: 610px;
`;

const VideoContainer = styled.div`
  background-color: #000;
  background-size: cover;

  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  overflow: hidden;
  height: auto;
  z-index: -1;

  @media (max-width: ${medium}) {
    background-color: #eca521;
  }
`;

const Video = styled.video`
  
  opacity: .8;
  top: 0;
  left: 0;
  position: absolute;
  width: auto; 
  height: auto;
  min-width: 100%;
  min-height: 100%;


  @media (max-width: ${medium}) {
    display: none;
  }

`;

const About = styled.div`
  position: absolute;
  z-index: 2;
  color: #fff;
  text-align: center;
  height: 560px;
  width: 320px;
  opacity: 1;
  right: 20px;

  top: 50%;
  transform: translateY(-50%);

  padding: 10px;
  background-color:rgba(0, 0, 0, 0.8);
  bottom: 60px;

  font-family: SourceSansProRegular;

  @media (max-width: ${medium}) {
    margin-top: 120px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Text = styled.div`
  h1 {
    font-size: 30px;
    font-weight: bold;
    letter-spacing: .1em;
    text-transform: uppercase;
    margin: 5px;
    white-space: pre-wrap;
  }

  img {
    width: 290px;
    height: 290px;
    margin: 20px 5px;
    border-radius: 4px;
    border: 1px solid #000;
  }

`;

const Name = styled.p`
  font-size: 1.3rem;
  text-transform: uppercase;
  margin: 10px 0;
  font-family: SourceSansProBold;
`;

export const VideoPresentation = ({ schoolName, text, name }) => (
  <Container>
    <VideoContainer>

      <Video autoPlay loop preload="auto" muted>
        <source src={Mp4} type="video/mp4" />
      </Video>

    </VideoContainer>

    <About>
      <Text>
        <h1>{schoolName}</h1>
        <p>{text}</p>
        <Name>{name}</Name>
        <img src={MarcImg} alt="marcos" />
      </Text>
    </About>
  </Container>
);

VideoPresentation.propTypes = {
  schoolName: string.isRequired,
  text: string.isRequired,
  name: string.isRequired
};
