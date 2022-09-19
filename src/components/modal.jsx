import { Component } from 'react';
import { Modal__backdrop, Modal__content } from './modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    // console.log('Modal componentDidMount');

    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log('Modal componentWillUnmount');
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('Нажали Esc');
      this.props.onCloseModal();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onCloseModal();
    }
  };

  render() {
    // console.log(this.props.children);
    return createPortal(
      <Modal__backdrop onClick={this.handleBackdropClick}>
        <Modal__content>{this.props.children}</Modal__content>
      </Modal__backdrop>,
      modalRoot
    );
  }
}
