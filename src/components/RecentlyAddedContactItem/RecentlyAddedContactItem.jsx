import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BsPencil, BsDashCircle } from 'react-icons/bs';
import { deleteContact } from 'redux/operations/contactsOperations';
import {
  ContactLi,
  ContactContainerDiv,
  FirstLetterNameDiv,
  ContactCardDiv,
  ContactContentP,
  NameSpan,
  PhoneSpan,
  ContactActionsContainer,
  EditContactBtn,
  ContactBtn,
} from './RecentlyAddedContactItem.styled';
import { Loader } from '../Loader/Loader';
import { getRandomHexColor } from '../../helpers/getRandomHexColor';
import Modal from '../Modal';
import ContactFormEdit from 'components/ContactFormEdit';

const RecentlyAddedContactItem = ({ contact, selectedContactId, toggleActions }) => {

  const dispatch = useDispatch();
  const [isDeleting, setIsDeleting] = useState(false);
  const [contactColors, setContactColors] = useState({});
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { id, name, number } = contact;

  const trimmedName =
    contact.name.length > 24 ? `${contact.name.slice(0, 20)}...` : contact.name;

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
            <PhoneSpan>{number}</PhoneSpan>
          </ContactContentP>
        </ContactCardDiv>

        {isActionsContainerOpen && (
          <ContactActionsContainer>
            <EditContactBtn onClick={handleEditButtonClick}>
              <BsPencil />
              Edit
            </EditContactBtn>
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

RecentlyAddedContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  selectedContactId: PropTypes.string,
  toggleActions: PropTypes.func,
};

export default RecentlyAddedContactItem;

