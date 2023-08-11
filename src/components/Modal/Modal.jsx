import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { createPortal } from 'react-dom';
import { useThemeContext } from '../../hooks/ThemeContext'; 
import { ModalBackdrop, ModalDiv, CloseBtn } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

function Modal({ children, onCloseModal, isOpenModal }) {
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

  const handleContentClick = e => {
    e.stopPropagation();
  };

  useThemeContext();

  return createPortal(
    <ModalBackdrop onClick={onCloseModal} showModal={isOpenModal}>
      <ModalDiv showModal={isOpenModal} onClick={handleContentClick}>
        <CloseBtn type="button" onClick={onCloseModal}>
          <RiCloseCircleLine />
        </CloseBtn>
        {children}
      </ModalDiv>
    </ModalBackdrop>,
    modalRoot
  );
}

Modal.propTypes = {
  contactId: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  isOpenModal: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
