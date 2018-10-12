import React from 'react';
import { func, string } from 'prop-types';
import styled, { css } from 'styled-components';
import i18next from 'i18next';

import logo from '../assets/img/logo.svg';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  height: 76px;
  margin-top: 30px;
  z-index: 1;
  
  @media (max-width: 375px) {
    margin-top: 17px;
    height: 40px;
  }
  
  @media (min-width: 1600px) {
    width: 75%;
  }
`;

const Lang = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
  margin-top: 29px;

  a {
    font-family: SourceSansProBold, GESSTwoLight;
    text-decoration: none;
    color: white;
    margin: 10px;
  }
  
  @media (max-width: 375px) {
    font-size: 14px;
    margin-top: 11px;
  }
`;

const LangItems = styled.li`
  display: inline;
  ${({ active }) => active || css`opacity: 0.54;`}
  :hover {
    opacity: 1;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 47px;
    height: 40px;
  }
  p {
    font-family: FiraSans, GESSTwoLight;
    font-size: 18px;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    display: flex;
    margin: ${props => (props.lang === 'en' ? '0 0 0 16px' : '0 16px 0 0')};
  }
  
  @media (max-width: 375px) {
    img {
      width: 31px;
      height: 32px;
    }
    p {
      font-size: 14px;
    }
  }
`;

export const Header = ({ handleSetLang, lang }) => (
  <Container>
    <Logo lang={lang}>
      <img src={logo} alt="logo" />
      <p>{i18next.t('Title')}</p>
    </Logo>
    {(lang === 'en') ?
      <Lang>
        <LangItems active={lang === 'en'}><a href="#" name="en" onClick={handleSetLang}>English</a></LangItems>
        <LangItems active={lang === 'ar'}><a href="#" name="ar" onClick={handleSetLang}>العربية</a></LangItems>
      </Lang> :
      <Lang>
        <LangItems active={lang === 'ar'}><a href="#" name="ar" onClick={handleSetLang}>العربية</a></LangItems>
        <LangItems active={lang === 'en'}><a href="#" name="en" onClick={handleSetLang}>English</a></LangItems>
      </Lang>
    }
  </Container>
);

Header.propTypes = {
  lang: string.isRequired,
  handleSetLang: func.isRequired
};
