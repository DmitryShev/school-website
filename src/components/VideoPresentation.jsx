import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

import Img from '../assets/img/Cheer-Up.jpg';
import Mp4 from '../assets/videos/video-bg.mp4';
import Webm from '../assets/videos/Cheer.webm';
import MarcImg from '../assets/img/marcos.jpg';
import { large, medium } from './helpers/deviceSizes';

const Container = styled.div`
  //height: 80vh;  // 610px;
  margin-top: 120px;
  width: 100%;

  height: 610px;

  @media (max-width: ${medium}) {
    //height: 100vh;
  }
`;

const VideoContainer = styled.div`
  // background: url(${Img}) no-repeat #000;
  background-color: #000;
  background-size: cover;
  position: relative;
  width: 100%;
  height: 100%;

  overflow: hidden;

  @media (max-width: ${medium}) {
    background-color: #eca521;
  }
`;

const Video = styled.video`

  position: absolute;
  opacity: .8;
  top: 0;
  left: 0;
  width: 100%;
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

  font-family: SourceSansProRegular; //GESSTwoLight, SourceSansProRegular, FiraSans, SourceSansProBold, SourceSansProLight; // SourceSansProRegular, GESSTwoLight; 

  @media (max-width: ${medium}) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Text = styled.div`
  //font-size: .9rem
  //font-size: 1.3rem;
  //text-transform: uppercase;

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
        <source src={Webm} type="video/webm" />
      </Video>

      <About>
        <Text>
          <h1>{schoolName}</h1>
          <p>{text}</p>
          <Name>{name}</Name>
          <img src={MarcImg} alt="marcos" />
        </Text>
      </About>

    </VideoContainer>
  </Container>
);

VideoPresentation.propTypes = {
  schoolName: string.isRequired,
  text: string.isRequired,
  name: string.isRequired
};
