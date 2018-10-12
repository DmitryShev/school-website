import React from 'react';
import { string } from 'prop-types';
import styled, { css } from 'styled-components';

import { Faqs } from '../components/Faqs';

const Container = styled.div`
  display: flex;
  color: white;
  height: 100%;
  position: relative;
  flex: 1;
  width: 100%;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  width: 100%;

`;

const SmallRctngl = styled.div`
  width: 255.1px;
  height: 242.9px;
  transform: rotate(-47deg);
  opacity: 0.9;
  border-radius: 40px;
  background-image: linear-gradient(213deg, #48536e, #566288);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  bottom: -90px;
  left: -260px;
  
  @media (max-width: 768px) {
    width: 125.1px;
    height: 120.9px;
    bottom: 130px;
    left: -70px;
  }
  
  @media (max-width: 375px) {
    width: 125.1px;
    height: 120.9px;
    bottom: 130px;
    left: -70px;
  }
`;

const SmallRctglContainer = styled.div`
  position: absolute;
  bottom: 0px;
  ${({ lang }) => (lang === 'en' ? css`left: 0;` : css`right: 0; transform: scale(-1, 1);`)}
`;

const RctglContainer = styled.div`
  position: absolute;
  width: 650px;
  height: 485px;
  top: 0px;
  ${({ lang }) => (lang === 'en' ? css`right: -40px;` : css`left: -40px; transform: scale(-1, 1);`)}
`;

const RctnglRight1 = styled.div`
  width: 485.7px;
  height: 657.3px;
  transform: rotate(139deg);
  border-radius: 40px;
  background-image: linear-gradient(750deg, #566288, #4c4769);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  position: absolute;

  right: -105px;
  top: -480px;

  @media (max-width: 768px) {
    width: 0;
    height: 0;
  }
`;

const RctnglRight2 = styled.div`
  width: 415.7px;
  height: 625.3px;
  transform: rotate(-25deg);
  border-radius: 40px;
  background-image: linear-gradient(326deg, #ff2465, #c40f3a);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  right: -20px;
  top: -480px;

  @media (max-width: 768px) {
    width: 0;
    height: 0;
  }
`;

export const QuestionsContainer = ({ lang }) => (
  <Container lang={lang}>
    <RctglContainer lang={lang}>
      <RctnglRight2 />
      <RctnglRight1 />
    </RctglContainer>
    <Wrap>
      <Faqs lang={lang} />
    </Wrap>
    <SmallRctglContainer lang={lang}>
      <SmallRctngl />
    </SmallRctglContainer>
  </Container>
);

QuestionsContainer.propTypes = {
  lang: string.isRequired
};
