import React, { Component } from 'react';
import Modal from 'components/Modal';
import { GalleryItem, GalleryItemImg } from './ImageGalleryItem.styled';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleImgClick = e => {
    this.toggleModal();
  };

  render() {
    return (
      <>
        <GalleryItem >
          <GalleryItemImg src={this.props.el.webformatURL} alt={this.props.el.tags} onClick={this.handleImgClick} />
        </GalleryItem>
        {this.state.showModal && (
          <Modal
            onClose={this.toggleModal}
            src={this.props.el.largeImageURL}
            alt={this.props.el.tags}
          ></Modal>
        )}
      </>
    );
  }
}
