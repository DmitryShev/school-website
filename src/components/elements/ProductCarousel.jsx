import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import ReactModal from 'react-modal';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { products } from '../helpers/products';
import { ProductCard } from './ProductCard';
import { medium } from '../helpers/deviceSizes';
import closeModal from '../../assets/img/closeModal.svg';


const Container = styled.div`
  width: 65vw;
  margin: 70px;
  

  button {
    width: 60px;
    height: 60px;
    margin: 0 -38px;
    z-index: 10;
  }

  button:before {
    font-size: 60px;
    color: #000;
    opacity: 1;
  }

  @media (max-width: ${medium}) {
    width: 60vw;
    margin-top: 10px;
  }
`;

const IFrameBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 100%;
  margin: 5px 0;

  iFrame {
    width: 49.5%;
    height: 100%;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    margin: 5px 0;
    @media (max-width: ${medium}) {
      width: 100%;
      
    }
  }

  @media (max-width: ${medium}) {
    width: 100%;
    height: 100%;
    flex-direction: column;
  }
`;

const Button = styled.button`
  width: 32px;
  height: 32px;
  background-color: #eebb33;
  border: none;
  outline: 0;
  margin: 5px;

  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
  :active {
    box-shadow: inset 1px 1px 10px -1px;
    border: 1px solid #000;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #eebb33;
  margin: 0;

  h1 {
    text-transform: uppercase;
    font-family: SourceSansProRegular;
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: .065em;
    margin: 0 5px;
    text-align: center;

    @media (max-width: ${medium}) {
      font-size: 1rem;
    }
  }
`;


const PagingButton = styled.div`
  background-color: #eebb33;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 20px;
  height: 20px;
`;

const WrapDesc = styled.p`
  margin-top: 10px;
`;

export class ProductCarousel extends Component {
  state = {
    showModal: false,
    carousel: 1,
    settings: {
      dots: true,
      infinite: true,
      speed: 500,
      customPaging: i => <PagingButton><button>{i + 1}</button></PagingButton>
    },
    text: 'hello',
    description: 'hello',
    video0: 'no video',
    video1: 'no video'
  }

  componentWillMount = () => {
    this.handleWindowSize();
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.handleWindowSize);
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleWindowSize);
  }

  handleShowModal = (id) => {
    this.setState({
      showModal: !this.state.showModal
    });
    if (!this.state.showModal) {
      this.setState({
        text: products[id].text,
        description: products[id].description,
        video0: products[id].video0,
        video1: products[id].video1
      });
    }
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  handleWindowSize = () => {
    const { carousel } = this.state;
    const { innerWidth } = window;

    switch (true) {
      case (innerWidth < 740 && carousel !== 1):
        this.setState({ carousel: 1 });
        break;
      case (innerWidth <= 1030 && innerWidth >= 740 && carousel !== 2):
        this.setState({ carousel: 2 });
        break;
      case (innerWidth <= 1500 && innerWidth >= 1030 && carousel !== 3):
        this.setState({ carousel: 3 });
        break;
      case (innerWidth > 1500 && carousel !== 4):
        this.setState({ carousel: 4 });
        break;
      default:
        break;
    }
  }

  render() {
    const {
      settings,
      showModal,
      carousel,
      text,
      description,
      video0,
      video1
    } = this.state;
    return (
      <Container>
        <Slider {...settings} slidesToShow={carousel} slidesToScroll={carousel} >
          {products.map(item => (
            <ProductCard
              id={item.id}
              text={item.text}
              img={item.img}
              key={item.id}
              description={item.description}
              handleShowModal={this.handleShowModal}
            />)
          )}
        </Slider>
        {showModal &&
          <ReactModal
            isOpen={showModal}
            style={{ overlay: { zIndex: '100' } }}
            ariaHideApp={false}
            onRequestClose={this.handleCloseModal}
          >
            <ModalHeader>
              <h1>{text}</h1>
              <Button onClick={this.handleShowModal}><img src={closeModal} alt="close" /></Button>
            </ModalHeader>
            <IFrameBlock>
              <iframe
                title="dance video"
                src={video0}
                frameBorder="0"
                allowFullScreen
              />
              <iframe
                title="dance video"
                src={video1}
                frameBorder="0"
                allowFullScreen
              />
            </IFrameBlock>
            <WrapDesc>{description}</WrapDesc>
            <button onClick={this.handleShowModal}>Закрыть</button>
          </ReactModal>}
      </Container>
    );
  }
}
