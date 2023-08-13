import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from '@react-hook/media-query';
import { BsPencil, BsTelephone, BsDashCircle } from 'react-icons/bs';
import { deleteContact } from 'redux/operations/contactsOperations';
import { uniqueFirstLettersContactsSelector } from 'redux/selectors';
import { useThemeContext } from '../../hooks/ThemeContext';
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
  EditContactBtn,
  ContactDeleteBtn,
  LetterContainerDiv,
} from './ContactItem.styled';
import { Loader } from '../Loader/Loader';
import { getRandomHexColor } from 'helpers';
import Modal from '../Modal';
import ContactFormEdit from 'components/ContactFormEdit';

const ContactItem = ({ contact, selectedContactId, toggleActions }) => {
  const uniqueFirstLetters = useSelector(uniqueFirstLettersContactsSelector);

  const dispatch = useDispatch();
  const [isDeleting, setIsDeleting] = useState(false);
  const [contactColors, setContactColors] = useState({});
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { id, name, number } = contact;

  const isScreenS = useMediaQuery('(min-width: 200px)');
  const isScreenL = useMediaQuery('(min-width: 375px)');
  const isScreenX = useMediaQuery('(min-width: 1024px)');

  let trimmedName = contact.name;
  let trimmedNumber = contact.number;

  if (isScreenS) {
    trimmedName =
      contact.name.length > 14
        ? `${contact.name.slice(0, 10)}...`
        : contact.name;
    trimmedNumber =
      contact.number.length > 10
        ? `${contact.number.slice(0, 9)}...`
        : contact.number;
  }
  if (isScreenL) {
    trimmedName =
      contact.name.length > 24
        ? `${contact.name.slice(0, 20)}...`
        : contact.name;
    trimmedNumber =
      contact.number.length > 20
        ? `${contact.number.slice(0, 19)}...`
        : contact.number;
  }
  if (isScreenX) {
    trimmedName =
      contact.name.length > 34
        ? `${contact.name.slice(0, 30)}...`
        : contact.name;
    trimmedNumber =
      contact.number.length > 24
        ? `${contact.number.slice(0, 24)}...`
        : contact.number;
  }

  const isActionsContainerOpen = selectedContactId === contact.id;

  const handleContactContentClick = () => {
    toggleActions(id);
  };

  useEffect(() => {
    if (!contactColors[contact.id]) {
      const newColor = getRandomHexColor();
      setContactColors(prevColors => ({
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

  const handleEditButtonClick = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  useThemeContext();

  return (
    <ContactLi>
      <ContactContainerDiv>
        <ContactCardDiv>
          <FirstLetterNameDiv
            style={{ backgroundColor: contactColors[contact.id] }}
          >
            {name.charAt(0)}
          </FirstLetterNameDiv>
          <ContactContentP onClick={handleContactContentClick}>
            <NameSpan>{trimmedName}</NameSpan>
            <PhoneSpan>{trimmedNumber}</PhoneSpan>
          </ContactContentP>
          <CallA href={`tel:${number}`} title="Call">
            <ContainerIconSpan>
              <BsTelephone />
            </ContainerIconSpan>
          </CallA>
        </ContactCardDiv>

        {isActionsContainerOpen && (
          <ContactActionsContainer>
            <EditContactBtn onClick={handleEditButtonClick}>
              <BsPencil />
              Edit
            </EditContactBtn>
            <ContactDeleteBtn
              type="button"
              disabled={isDeleting}
              onClick={() => onDeleteContact(contact.id)}
            >
              <BsDashCircle />
              {isDeleting && <Loader />}
              Delete
            </ContactDeleteBtn>
          </ContactActionsContainer>
        )}
      </ContactContainerDiv>
      <LetterContainerDiv>
        {uniqueFirstLetters.includes(id) && (
          <FirstLetterContactsGroupDiv>
            {name.charAt(0)}
          </FirstLetterContactsGroupDiv>
        )}
      </LetterContainerDiv>
      {isOpenModal && (
        <Modal
          contactId={contact.id}
          onCloseModal={handleCloseModal}
          isOpenModal={isOpenModal}
        >
          <ContactFormEdit contact={contact} onCloseModal={handleCloseModal} />
        </Modal>
      )}
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
