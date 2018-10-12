import React from 'react';
import styled from 'styled-components';
import i18next from 'i18next';
import { string } from 'prop-types';

import facebookIcon from '../assets/img/facebook.svg';
import twitterIcon from '../assets/img/twitter.svg';
import telegramIcon from '../assets/img/telegram.svg';
import mailIcon from '../assets/img/mail.svg';

import privacyPolicy from '../assets/docs/PrivacyPolicy.pdf';
import termsAndCondition from '../assets/docs/TermsAndCondition.pdf';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2e364c;
  width: 100%;
  z-index: 1;
`;

const Title = styled.div`
  flex: 3;
  opacity: 0.54;
  font-family: SourceSansProRegular, GESSTwoLight;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SocialIcons = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  flex: 1;

  li {
    display: inline-flex;
    vertical-align: middle;
    margin: 3px 10px 0;
  }
  li:hover {
    opacity: 0.5;
  }
  
  @media (max-width: 1165px) {
    flex: 2;
  }
  
  @media (max-width: 1000px) {
    flex: 1;
  }
  
  @media (max-width: 768px) {
    margin-top: 17px;
  }
`;

const Contacts = styled.ul`
  display: flex;
  list-style-type: none;
  flex: 3;
  text-align: ${props => (props.lang === 'en' ? 'right' : 'left')};
  justify-content: flex-end;

  li {
    font-family: SourceSansProRegular, GESSTwoLight;
    display: inline-flex;
    vertical-align: middle;
    margin: 0 12px 0;
    height: 30px;
    opacity: 0.54;
    white-space: nowrap;
  }
  li:hover {
    opacity: 1;
  }

  img {
    margin: ${props => (props.lang === 'en' ? '5px 12px 0 0' : '5px 0 0 12px')};
  }

  a {
    color: white;
    margin-top: 5px;
  }

  span {
    margin-top: 5px;
  }

  @media (max-width: 768px) {
    li {
      text-align: center;
      display: flex;
      justify-content: center;
      margin-top: 17px;
    }
  }
  
  @media (max-width: 768px) {
    margin-bottom: 17px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  width: 90%;
  flex-shrink: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
    min-height: 210px;


    ${Contacts} {
      flex-direction: column;
    }
  }

  @media (min-width: 1600px) {
    width: 75%;
  }
`;

export const Footer = ({ lang }) => (
  <Wrap>
    <Container>
      <Title>
        <p>{i18next.t('Title')}</p>
      </Title>

      <SocialIcons>
        <li><a href="https://www.facebook.com/"><img src={facebookIcon} alt="facebook_icon" /></a></li>
        <li><a href="https://twitter.com/"><img src={twitterIcon} alt="twitter_icon" /></a></li>
        <li><a href="https://telegram.org/"><img src={telegramIcon} alt="telegram_icon" /></a></li>
      </SocialIcons>
      <Contacts lang={lang}>
        <li>
          <img src={mailIcon} alt="mail_icon" />
          <a href="mailto:info@mahfazah.io">info@mahfazah.io</a>
        </li>
        <li>
          <a href={privacyPolicy}>{i18next.t('PrivacyPolicy')}</a>
        </li>
        <li>
          <a href={termsAndCondition}>{i18next.t('Condition')}</a>
        </li>
      </Contacts>
    </Container>
  </Wrap>
);

Footer.propTypes = {
  lang: string.isRequired
};
