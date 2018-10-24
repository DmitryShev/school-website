import React from 'react';
import { string } from 'prop-types';
import ReactModal from 'react-modal';
import styled from 'styled-components';

const Container = styled.div`
  width: 218px;
  height: 350px;
  margin: 0px;
  cursor: pointer;
  color: #fff;
  :hover {
    opacity: 0.8;
  }
`;

const ImgContainer = styled.div`
  height: 180px;
    img {
      width: 100%;
      height: 100%;
    }
`;

const Title = styled.h1`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;


  background-color: #000;

  text-transform: uppercase;
  font-family: SourceSansProRegular, GESSTwoLight;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: .065em;
  height: 60px;

`;

const Description = styled.p`
  background-color: #cc1122;

`;

export class ProductCard extends React.Component {
  static propTypes = {
    text: string.isRequired,
    img: string.isRequired,
    description: string.isRequired
  };

  state = {
    showModal: false
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  render() {
    //console.log(this.state);
    const { img, text, description, video } = this.props;
    return (
      <Container>
        <ImgContainer onClick={this.handleOpenModal}>
          <img src={img} alt="Dance Icon" />
        </ImgContainer>
        <Title onClick={this.handleOpenModal}>{text}</Title>

        
          <ReactModal isOpen={this.state.showModal} style={{
            overlay: {
              zIndex: '100'
            } }}>
            <Description>{description}</Description>
            <div>{video}</div>
            <button onClick={this.handleCloseModal}>Close Modal</button>
          </ReactModal>
        
      </Container>
    );
  }
}

/*

export const ProductCard = ({ text, img }) => (
  <Container>
    <ImgContainer>
      <img src={img} alt="Dance Icon" />
    </ImgContainer>
    <Title>{text}</Title>
    <Description>No text</Description>
  </Container>
);

ProductCard.propTypes = {
  text: string.isRequired,
  img: string.isRequired
};

*/