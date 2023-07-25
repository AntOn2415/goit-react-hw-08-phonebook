import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import {RiCloseCircleLine } from 'react-icons/ri'
import { useSelector, useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';
import {closeModal} from '../../redux/slices/modalSlice';
import { ModalBackdrop, ModalDiv,  CloseBtn } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

function Modal({contactId, children }) {
  const showModal = useSelector((state) => state.modal.contactModals[contactId] || false);
  const isModalOpen = useSelector((state) => state.modal.isModalOpen || false); 

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal(contactId));
  }
  
  useEffect(() => {
    const handleKeyDown = e => {
      
      if (e.code === 'Escape') {
        dispatch(closeModal(contactId));
        
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [contactId, dispatch]); 

  const handleContentClick = (e) => {
    e.stopPropagation();
  };


  // const handleAnimationEnd = (id) => {
  //   if (!showModal) {
  //     dispatch(closeModal(id));
  //   }
  // };

    

  console.log(isModalOpen);
  console.log(showModal);


  return createPortal(
    <ModalBackdrop onClick={handleCloseModal} showModal={isModalOpen}>
      <ModalDiv showModal={isModalOpen}  onClick={handleContentClick}>
      <CloseBtn type='button' onClick={handleCloseModal}>
        <RiCloseCircleLine/>
      </CloseBtn>{children}</ModalDiv>
    </ModalBackdrop>,
    modalRoot
  );
}

Modal.propTypes = {
  contactId: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
