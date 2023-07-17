import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BsPencil, BsTelephone } from 'react-icons/bs';
import { deleteContact } from 'redux/operations/contactsOperations';
import { ContactLi, ContactContainer, FirstLetterNameDiv, ContactContentP, CallA, ContactActionsContainer, EditContactDiv, ContactBtn } from './ContactItem.styled';
import { Loader } from '../Loader/Loader';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const [isDeleting, setIsDeleting] = useState(false);
  const { name, phone } = contact;

  const onDeleteContact = contactId => {
    setIsDeleting(true);
    dispatch(deleteContact(contactId)).finally(() => {
      setIsDeleting(false);
    });
  };

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
    }

  return (
    <ContactLi>
      <ContactContainer>
        <FirstLetterNameDiv style={{ backgroundColor: getRandomHexColor() }}>{name.charAt(0)}</FirstLetterNameDiv>
        <ContactContentP>
        <span>{name} </span>
        <span>{phone}</span>
        </ContactContentP>
        <CallA href={`tel:${phone}`} title="Call"><BsTelephone/></CallA>
        <ContactActionsContainer>
        <EditContactDiv><BsPencil/></EditContactDiv>
      <ContactBtn
        type="button"
        disabled={isDeleting}
        onClick={() => onDeleteContact(contact.id)}
      >
        {isDeleting && <Loader />}
        Delete
      </ContactBtn>
        </ContactActionsContainer>
      </ContactContainer>
      
    </ContactLi>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactItem;
