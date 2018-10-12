import styled, { css } from 'styled-components';

export const SmallRctngl = styled.div`
  width: 255.1px;
  height: 242.9px;
  transform: rotate(-47deg);
  opacity: 0.9;
  border-radius: 40px;
  background-image: linear-gradient(213deg, #48536e, #566288);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  bottom: -20px;
  left: -115px;
  
  @media (max-width: 768px) {
    width: 125.1px;
    height: 120.9px;
    bottom: 250px;
    left: -60px;
  }
  
  @media (max-width: 375px) {
    width: 125.1px;
    height: 120.9px;
    bottom: 250px;
    left: -60px;
  }
`;

export const SmallRctglContainer = styled.div`
  position: absolute;
  bottom: 0px;
  ${({ lang }) => lang === 'en'
    ? css`left: 0;`
    : css`right: 0; transform: scale(-1, 1);`}
`;

export const RctglContainer = styled.div`
  position: absolute;
  width: 650px;
  height: 485px;
  top: 0px;
  ${({ lang }) => lang === 'en'
    ? css`right: -40px;`
    : css`left: -40px; transform: scale(-1, 1);`}
`;

export const RctnglRight1 = styled.div`
  width: 485.7px;
  height: 657.3px;
  transform: rotate(139deg);
  border-radius: 40px;
  background-image: linear-gradient(750deg, #566288, #4c4769);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  right: -155px;
  top: -55px;

  @media (max-width: 768px) {
    width: 280.7px;
    height: 425.3px;
    right: -185px;
    top: 700px;
    transform: rotate(139deg);
  }
  
  @media (max-width: 590px) {
    width: 235.7px;
    height: 357.3px;
    right: -155px;
    top: 820px;
  }
  
  @media (max-width: 375px) {
    width: 235.7px;
    height: 357.3px;
    right: -155px;
    top: 550px;
  }
`;

export const RctnglRight2 = styled.div`
  width: 415.7px;
  height: 625.3px;
  transform: rotate(-25deg);
  border-radius: 40px;
  background-image: linear-gradient(326deg, #ff2465, #c40f3a);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  right: -70px;
  top: -50px;

  @media (max-width: 768px) {
    width: 280.7px;
    height: 390.3px;
    right: -145px;
    top: 700px;
    transform: rotate(159deg);
  }
  
  @media (max-width: 590px) {
    width: 180.7px;
    height: 355.3px;
    right: -100px;
    top: 820px;
  }
  
  @media (max-width: 375px) {
    width: 180.7px;
    height: 355.3px;
    right: -100px;
    top: 550px;
  }
`;
