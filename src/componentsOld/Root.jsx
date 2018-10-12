import React from 'react';
import styled from 'styled-components';
import i18next from 'i18next';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import imgIphoneEn from '../assets/img/iphone-8-en.png';
import imgIphoneAr from '../assets/img/iphone-8-ar.png';
import appleLogoImg from '../assets/img/apple-logo.png';
import appStoreImgEn from '../assets/img/app-store-en.svg';
import appStoreImg from '../assets/img/app-store.svg';
import bitmap from '../assets/img/bitmap.png';
import googlePlayImgEn from '../assets/img/google-play-en.svg';
import googlePlayImg from '../assets/img/google-play.svg';

import {
  SmallRctglContainer,
  SmallRctngl,
  RctglContainer,
  RctnglRight1,
  RctnglRight2
} from './Rectangles';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Title = styled.div`
  h1 {
    font-family: FiraSans, GESSTwoLight;
    font-size: 64px;
    font-weight: 500;
    line-height: 1.2;
  }

  p {
    opacity: 0.54;
    font-size: 40px;
    font-weight: 300;
    letter-spacing: 1px;
  }
  
  @media (max-width: 375px) {
    h1 {
      font-size: 36px;
      font-weight: 500;
      line-height: 1.61;
    }
    p {
      font-size: 20px;
    }
  }
`;

const Text = styled.div`
  margin-top: 80px;
  font-size: 25px;
  font-weight: 300;
  line-height: 1.6;
  letter-spacing: 0.7px;

  p {
    white-space: pre-wrap
  }

  @media (max-width: 375px) {
    font-size: 14px;
    line-height: 1.57;
    letter-spacing: 0.4px;
    margin-top: 24px;
  }
`;

const Thumb = styled.div`
  width: 40%;
  height: 100%;
  background-size: contain;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  position: relative;
  z-index: 1;
`;

const GoogleIcon = styled.img`
  height: 36px;
`;

const AppleIcon = styled.img`
  width: 32px;
  padding-bottom: 7px;
`;

const ButtonsWrap = styled.div`
  margin-top: 81px;
  display: flex;
  flex-wrap: wrap;
  img {
    margin: 9px;
  }
  z-index: 1;
  
  @media (max-width: 768px) {
    margin-top: 40px;
    flex-direction: column;
    align-items: center;
    margin-bottom: 88px;
  }
`;

const AppStoreBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 224px;
  height: 81px;
  border-radius: 100px;
  background-color: #04d6a8;
  box-shadow: 0 8px 9px 0 rgba(0, 0, 0, 0.08);
  color: #222a41;
  margin: ${props => (props.lang === 'ar' ? '0 0 0 52px' : '0 52px 0 0')};
  cursor: pointer;

  :hover {
    background-color: #00B08A;
  }
  
  @media (max-width: 1200px) {
    margin: ${props => (props.lang === 'ar' ? '0 0 0 30px' : '0 30px 0 0')};
  }
  
  @media (max-width: 992px) {
    margin: ${props => (props.lang === 'ar' ? '0 0 0 5px' : '0 5px 0 0')};
  }
  
  @media (max-width: 964px) {
    margin-right: 0;
    margin-bottom: 24px;
  }
`;

const GoogleBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 224px;
  height: 81px;
  border-radius: 12px;
  background-color: #04d6a8;
  box-shadow: 0 8px 9px 0 rgba(0, 0, 0, 0.08);
  color: #222a41;
  cursor: pointer;

  :hover {
    background-color: #00B08A;
  }
  
`;

const FaqButton = styled.div`
  position: absolute;
  top: 50px;
  text-align: center; 
  z-index: 1;
  display: inline-block;
  transform: translateX(-50%);
  left: 50%;

  @media (max-width: 768px) {
    top: auto;
    bottom: 250px;
  }

  button {
    width: 131px;
    height: 37px;
    border-radius: 8px;
    border: solid 1px #ffffff;
    font-family: FiraSans;
    font-size: 18px;
    outline: none;
    background: none;
    color: #ffffff;
  }
  button:hover {
    background-color: #ffffff;
    cursor: pointer;
    color: #3e4968;
  }

`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex-grow: 1;
  width: 90%;
  font-family: SourceSansProLight, GESSTwoLight;
  flex: 1;
  
  @media (max-width: 768px) {
    flex-direction: column;

    ${Thumb} {
      padding-top: 150%;
      height: 0;      
      width: 100%;
      margin: 70px 0 88px;
    }

    ${ButtonsWrap} {
      margin-bottom: 0;
    }

    ${Title} {
      margin-top: 85px;
    }
  }
  
  @media (max-width: 500px) {
    ${Thumb} {
      padding-top: 200%;
    }
  }
  @media (min-width: 1600px) {
    width: 75%;
    flex: 1;
  }
`;

export const Root = ({ lang }) => (
  <Container>
    <Content>

      <RctglContainer lang={lang}>
        <RctnglRight2 />
        <RctnglRight1 />
      </RctglContainer>

      <Title lang={lang}>
        <h1>{i18next.t('Title')}</h1>
        <p>{i18next.t('TitleText')}</p>
      </Title>
      <Text>
        <p>{i18next.t('TextDescription', { name: '', escapeInterpolation: true })}</p>
      </Text>
      <ButtonsWrap>
        <AppStoreBtn href="https://itunes.apple.com/us/app/mahfazah/id1435880498?ls=1&mt=8" lang={lang}>
          <AppleIcon src={appleLogoImg} alt="app_store_logo" />
          {lang === 'en' ? <img src={appStoreImgEn} alt="app_store" /> : <img src={appStoreImg} alt="app_store" />}
        </AppStoreBtn>
        <GoogleBtn href="https://play.google.com/store/apps/details?id=io.mahfazah">
          <GoogleIcon src={bitmap} alt="google_logo" />
          {lang === 'en' ? <img src={googlePlayImgEn} alt="google_play" /> : <img src={googlePlayImg} alt="google_play" />}
        </GoogleBtn>
      </ButtonsWrap>
    </Content>

    <Thumb
      style={{
        backgroundImage: `url(${lang === 'en' ? imgIphoneEn : imgIphoneAr})`
      }}
    />

    <FaqButton>
      <Link to='./questions'>
        <button>{i18next.t('Faq')}</button>
      </Link>
    </FaqButton>

    <SmallRctglContainer lang={lang}>
      <SmallRctngl />
    </SmallRctglContainer>
  </Container>
);

Root.propTypes = {
  lang: PropTypes.string.isRequired
};
