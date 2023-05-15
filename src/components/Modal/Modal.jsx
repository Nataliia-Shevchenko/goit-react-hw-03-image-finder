import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalImg } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscape);
  }

  handleEscape = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalImg>
          <img src={this.props.src} alt={this.props.alt} />
        </ModalImg>
      </Overlay>,
      modalRoot
    );
  }
}
