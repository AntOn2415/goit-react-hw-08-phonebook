import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { LoaderThreeDots, LoaderRotatingLines } from '../Loader/Loader';
import ContactItem from '../ContactItem';
import { fetchContacts } from 'redux/operations/contactsOperations';
import {
  contactsSelector,
  isLoadingSelector,
  errorSelector,
  memoizedFilteredContactsSelector,
} from 'redux/selectors';
import {
  ContactsContainer,
  LoaderContainer,
  LoaderRotatingLinesContainer,
  ContactUl,
  EmptyContactsMessage,
} from './ContactList.styled';

const ContactList = () => {
  const isLoading = useSelector(isLoadingSelector);
  const error = useSelector(errorSelector);
  const filteredContacts = useSelector(memoizedFilteredContactsSelector);
  const contacts = useSelector(contactsSelector);

  const [isFetchingContacts, setIsFetchingContacts] = useState(false);
  const [showEmptyMessage, setShowEmptyMessage] = useState(false);
  const [selectedContactId, setSelectedContactId] = useState(null);


  const dispatch = useDispatch();

  const contactsLength = contacts.length;
  const isEmptyFilter = filteredContacts.length === 0;

  useEffect(() => {
    setIsFetchingContacts(true);
    dispatch(fetchContacts()).finally(() => {
      setIsFetchingContacts(false);
      setShowEmptyMessage(true);
    });
  }, [dispatch]);

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const toggleActions = (contactId) => {
    setSelectedContactId((prevId) => (prevId === contactId ? null : contactId));
  };

  useEffect(() => {
    if (selectedContactId === null) {
      toggleActions(selectedContactId);
    }
  }, [selectedContactId]);

  if (isFetchingContacts) {
    return (
      <LoaderRotatingLinesContainer>
        <LoaderRotatingLines />
      </LoaderRotatingLinesContainer>
    );
  }

  if (contactsLength === 0 && showEmptyMessage && !error) {
    return (
      <EmptyContactsMessage>Please add your first contact</EmptyContactsMessage>
    );
  }

  if (contactsLength > 0 && isEmptyFilter) {
    return <EmptyContactsMessage>No matching contacts</EmptyContactsMessage>;
  }

  return (
    <section>
      <ContactsContainer>
      <LoaderContainer>
        {isLoading && showEmptyMessage && <LoaderThreeDots />}
      </LoaderContainer>
      {!isEmptyFilter && (
        <ContactUl>
          {filteredContacts.map(contact => (
            <ContactItem
              key={contact.id}
              contact={contact}
              selectedContactId={selectedContactId}
              toggleActions={toggleActions}
            />
          ))}
        </ContactUl>
      )}
    </ContactsContainer>
    </section>
    
  );
};

export default ContactList;
