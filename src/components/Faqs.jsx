import React from 'react';
import styled from 'styled-components';
import i18next from 'i18next';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';

import { Faq } from './Faq';
import { questions } from '../localization/questions';
import leftArrow from '../assets/img/left-arrow.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;
  flex-grow: 1;
  
  width: 90%;

  font-size: 20px;
  line-height: 1.8;
  letter-spacing: 0.5px;

  color: #ffffff;
  word-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 1.33;
    letter-spacing: 0.4px;
  
  }
  
  @media (min-width: 1600px) {
    width: 75%;
  }
`;

const Title = styled.div`
  display: flex;

  justify-content: center;
  margin-top: 40px;
  margin-bottom: 10px;
  width: 90%;
  
  @media (max-width: 768px) { 
    flex-direction: column;
    margin-top: 10px;
  }

  @media (min-width: 1600px) {
    width: 75%;
  }
`;

const Questions = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  margin-bottom: 118px;
  margin-top: 24px;

  
  @media (max-width: 768px) {
    margin-bottom: 64px;
    width: 90%;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  width: 100px;
  height: 60px;
  margin: 10px;

  flex: 1;
  z-index: 1;  

  @media (max-width: 768px) {
    height: 40px;
    width: 60px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    color: #ffffff;
    font-size: 18px;
    font-family: FiraSans;
    outline: 0;

    @media (max-width: 768px) {
      margin-top: 10px;
      font-size: 14px;
    }
  }

  button:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  img {
    width: 18px;
    height: 18px;
    margin: ${({ lang }) => (lang === 'en' ? '0 8px 0 0' : '0 0 0 8px')};
    transform: ${({ lang }) => (lang === 'en' ? 'rotate(0deg)' : 'rotate(180deg)')};


    @media (max-width: 768px) {
      width: 16px;
      height: 14px;
      margin: ${({ lang }) => (lang === 'en' ? '0 8px 0 0' : '0 0 0 8px')};
    }
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 64px;
    line-height: 1.2;
    font-family: FiraSans;
    font-weight: normal;
    text-transform: uppercase;

    @media (max-width: 768px) { 
      font-size: 36px;
    }
  }

  p {
    font-size: 25px;
    line-height: 1.6;
    letter-spacing: 0.7px;

    @media (max-width: 768px) { 
      font-size: 20px;
    }
  }
`;

const HiddenDiv = styled.div`
  flex: 1;
  visibility: hidden;
`;


export const Faqs = ({ lang }) => (
  <Container>
    <Title>
      <ButtonWrap lang={lang}>
        <Link to='/'>
          <button>
            <img src={leftArrow} alt="arrow" />{i18next.t('Back')}
          </button>
        </Link>
      </ButtonWrap>
      <TextBlock>
        <h1>{i18next.t('Faq')}</h1>
        <p>{i18next.t('FaqHelperText')}</p>
      </TextBlock>
      <HiddenDiv />
    </Title>

    <Questions>{questions[lang].map(item =>
      <Faq key={item.id} lang={lang} {...item} />
    )}
    </Questions>

  </Container>
);

Faqs.propTypes = {
  lang: string.isRequired
};
