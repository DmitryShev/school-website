import React from 'react';
// import { string } from 'prop-types';
import styled from 'styled-components';

import Img from '../assets/img/Cheer-Up.jpg';
import Mp4 from '../assets/videos/video-bg.mp4';
import Webm from '../assets/videos/Cheer.webm';

const Container = styled.div`
  height: 80vh;  //610px;
  margin-top: 120px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
`;

const VideoContainer = styled.div`
  background: url(${Img}) no-repeat #000;
  background-size: cover;
  position: relative;
  width: 100%;
  height: 100%;
  opacity: .5;
`;

const Video = styled.video`
  position: absolute;

  top: 0;
  left: 0;
  width: 100%;
  height: auto;

`;

const About = styled.div`
  position: absolute;
  z-index: 2;
  color: #fff;
  text-align: center;
  height: 460px;
  width: 250px;
  
  
  right: 20px;
  top: 140px;
  //bottom: 80px;

  padding: 10px;
  background-color:rgba(0, 0, 0, 0.7);
  bottom: 60px;

  font-family: SourceSansProRegular, GESSTwoLight;
  h1 {
    font-size: 30px;
    font-weight: bold;
    letter-spacing: .1em;
    text-transform: uppercase;
    margin: 5px;
    white-space: pre-wrap;
  }

`;

const Text = styled.div`
  //font-size: .9rem
  //font-size: 1.3rem;
  //text-transform: uppercase;
  
  strong {
    font-size: 1.3rem;
    text-transform: uppercase;
    margin: 10px;
  }

`;

export const VideoPresentation = () => (
  <Container>
    <VideoContainer>

      <Video autoPlay loop preload="auto" muted>
        <source src={Mp4} type="video/mp4" />
        <source src={Webm} type="video/webm" />
      </Video>

    </VideoContainer>
    <About>
      <Text>
        <h1>salsa cubana novosibirsk</h1>
        <p>Школа латиноамериканских танцев под руководством профессионального
        танцовщика и хореографа
        </p>
        <p><strong>Маркоса Фернандеса (Куба)</strong></p>
      </Text>
    </About>
  </Container>
);

// VideoPresentation.propTypes = {
//   slogan: string.isRequired
// };
