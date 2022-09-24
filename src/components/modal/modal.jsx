/* eslint-disable react/jsx-pascal-case */
import { Modal__backdrop, Modal__content } from './modal.styled';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

export function Modal({ children, onCloseModal }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCloseModal]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  };

  return createPortal(
    <Modal__backdrop onClick={handleBackdropClick}>
      <Modal__content>{children}</Modal__content>
    </Modal__backdrop>,
    modalRoot
  );
}
