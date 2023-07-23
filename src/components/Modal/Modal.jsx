import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';
import {closeModal} from '../../redux/slices/modalSlice';
import { ModalOverlay, ModalDiv } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

function Modal({ onClose, children }) {

  const showModal = useSelector((state) => state.modal.showModal);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        dispatch(closeModal());
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch]); 

  console.log(showModal);
  
  return createPortal(
    <ModalOverlay onClick={onClose}>
      <ModalDiv showModal={showModal}>{children}</ModalDiv>
    </ModalOverlay>,
    modalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
