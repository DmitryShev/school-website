import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import ReactModal from 'react-modal';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { products } from '../helpers/products';
import { ProductCard } from './ProductCard';
import { medium } from '../helpers/deviceSizes';


const Container = styled.div`
  //position: relative;
  width: 50vw;
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

const PagingButton = styled.div`
  background-color: #eebb33;//#cc1122;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 20px;
  height: 20px;
`;
/*
export const ProductCarousel = ({ carousel }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: carousel,
    slidesToScroll: carousel,
    customPaging: i => <PagingButton><button>{i + 1}</button></PagingButton>
  };

  return (
    <Container>
      <Slider {...settings}>
        {products.map(item => (
          <ProductCard
            text={item.text}
            img={item.img}
            key={item.id}
            description={item.description}
            video={item.video}
          />)
        )}
      </Slider>
    </Container>
  );
};

ProductCarousel.propTypes = {
  carousel: number.isRequired
};
*/
export class ProductCarousel extends React.Component {
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
    description: 'hello'
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

  handleShowModal = id => {
    this.setState({
      showModal: !this.state.showModal
    })
    if (!this.state.showModal) {
      this.setState({
        text: products[id].text,
        description: products[id].description
    })
    }
  }

  handleWindowSize = () => {
    const { carousel } = this.state;
    const { innerWidth } = window;

    switch (true) {
      case (innerWidth < 768 && carousel !== 1):
        this.setState({ carousel: 1 });
        break;
      case (innerWidth <= 1024 && innerWidth >= 768 && carousel !== 2):
        this.setState({ carousel: 2 });
        break;
      case (innerWidth > 1024 && carousel !== 3):
        this.setState({ carousel: 3 });
        break;
      default:
        break;
    }
  }

  render() {
    const { settings, showModal, carousel, text, description } = this.state;
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
          <ReactModal isOpen={showModal} style={{ overlay: { zIndex: '100' } }} ariaHideApp={false}>
            <p>{text}</p>
            <p>{description}</p>
            <button onClick={this.handleShowModal}>Close Modal</button>
          </ReactModal>}
      </Container>
    );
  }
}
