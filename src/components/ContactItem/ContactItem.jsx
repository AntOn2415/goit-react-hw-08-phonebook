import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsPencil, BsTelephone, BsDashCircle } from 'react-icons/bs';
import TextTruncate from 'react-text-truncate';
import { deleteContact } from 'redux/operations/contactsOperations';
import { uniqueFirstLettersContactsSelector } from 'redux/selectors';
import {
  ContactLi,
  FirstLetterContactsGroupDiv,
  ContactContainerDiv,
  FirstLetterNameDiv,
  ContactCardDiv,
  ContactContentP,
  NameSpan,
  PhoneSpan,
  CallA,
  ContainerIconSpan,
  ContactActionsContainer,
  EditContactDiv,
  ContactBtn,
} from './ContactItem.styled';
import { Loader } from '../Loader/Loader';

const ContactItem = ({ contact, selectedContactId, toggleActions }) => {
  const uniqueFirstLetters = useSelector(uniqueFirstLettersContactsSelector);

  const dispatch = useDispatch();
  const [isDeleting, setIsDeleting] = useState(false);

  const { id, name, phone } = contact;
  const isActionsContainerOpen = selectedContactId === contact.id;

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  const onDeleteContact = contactId => {
    setIsDeleting(true);
    dispatch(deleteContact(contactId)).finally(() => {
      setIsDeleting(false);
    });
  };

  return (
    <ContactLi>
      <div style={{ width: '15px', height: '20px' }}>
        {uniqueFirstLetters.includes(id) && (
          <FirstLetterContactsGroupDiv>
            {name.charAt(0)}
          </FirstLetterContactsGroupDiv>
        )}
      </div>
      <ContactContainerDiv>
        <ContactCardDiv>
          <FirstLetterNameDiv style={{ backgroundColor: getRandomHexColor() }}>
            {name.charAt(0)}
          </FirstLetterNameDiv>
          <ContactContentP onClick={() => toggleActions(id)}>
            <NameSpan>
              <TextTruncate
                line={1}
                element="span"
                truncateText="..."
                text={name}
              />
            </NameSpan>
            <PhoneSpan>{phone}</PhoneSpan>
          </ContactContentP>
          <CallA href={`tel:${phone}`} title="Call">
            <ContainerIconSpan>
              <BsTelephone />
            </ContainerIconSpan>
          </CallA>
        </ContactCardDiv>

        {isActionsContainerOpen && (
          <ContactActionsContainer>
            <EditContactDiv>
              <BsPencil />
              Edit
            </EditContactDiv>
            <ContactBtn
              type="button"
              disabled={isDeleting}
              onClick={() => onDeleteContact(contact.id)}
            >
              <BsDashCircle />
              {isDeleting && <Loader />}
              Delete
            </ContactBtn>
          </ContactActionsContainer>
        )}
      </ContactContainerDiv>
    </ContactLi>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  selectedContactId: PropTypes.string,
  toggleActions: PropTypes.func,
};

export default ContactItem;
