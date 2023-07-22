import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsPencil, BsTelephone, BsDashCircle } from 'react-icons/bs';
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
import {getRandomHexColor} from '../../helpers/getRandomHexColor'

const ContactItem = ({ contact, selectedContactId, toggleActions }) => {
  const uniqueFirstLetters = useSelector(uniqueFirstLettersContactsSelector);

  const dispatch = useDispatch();
  const [isDeleting, setIsDeleting] = useState(false);
  const [contactColors, setContactColors] = useState({});

  const { id, name, number } = contact;
  const trimmedName = contact.name.length > 24 ? `${contact.name.slice(0, 20)}...` : contact.name;
  const isActionsContainerOpen = selectedContactId === contact.id;

  useEffect(() => {
    if (!contactColors[contact.id]) {
      const newColor = getRandomHexColor();
      setContactColors((prevColors) => ({
        ...prevColors,
        [contact.id]: newColor,
      }));
    }
  }, [contact.id, contactColors]);

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
          <FirstLetterNameDiv style={{ backgroundColor: contactColors[contact.id] }}>
            {name.charAt(0)}
          </FirstLetterNameDiv>
          <ContactContentP onClick={() => toggleActions(id)}>
            <NameSpan>
              {trimmedName}
            </NameSpan>
            <PhoneSpan>{number}</PhoneSpan>
          </ContactContentP>
          <CallA href={`tel:${number}`} title="Call">
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
    number: PropTypes.string.isRequired,
  }).isRequired,
  selectedContactId: PropTypes.string,
  toggleActions: PropTypes.func,
};

export default ContactItem;