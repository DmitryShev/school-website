import React from 'react';
import styled from 'styled-components';

import Img from '../assets/img/Cheer-Up.jpg';
import Mp4 from '../assets/videos/Cheer.mp4';
import Webm from '../assets/videos/Cheer.webm';

const Container = styled.div`
  height: 610px;
  margin-top: 120px;

  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const VideoContainer = styled.div`
  // background: url(${Img}) no-repeat #000;
  // background-size: cover;
  position: relative;
  width: 400px;
  height: 300px;
`;

const Video = styled.video`
  position:absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  // min-width: 100%; 
  // min-height: 100%;
`;

export const VideoPresentation = () => (
  <Container>
    <VideoContainer>

      <Video autoPlay loop preload="auto">
        <source src={Mp4} type="video/mp4" />
        <source src={Webm} type="video/webm" />
      </Video>

    </VideoContainer>
  </Container>
);
