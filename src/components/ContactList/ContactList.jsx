import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { LoaderRotatingLines } from '../Loader/Loader';
import ContactItem from '../ContactItem';
import { fetchContacts } from 'redux/operations/contactsOperations';
import { useThemeContext } from '../../hooks/ThemeContext'; 
import {
  contactsSelector,
  errorSelector,
  memoizedFilteredContactsSelector,
} from 'redux/selectors';
import {
  TitleHiddenH2,
  ContactsContainer,
  LoaderRotatingLinesContainer,
  ContactUl,
  EmptyContactsMessage,
} from './ContactList.styled';


const ContactList = () => {
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

  const toggleActions = contactId => {
    setSelectedContactId(prevId => (prevId === contactId ? null : contactId));
  };
  
  useEffect(() => {
    if (selectedContactId === null) {
      toggleActions(selectedContactId);
    }
  }, [selectedContactId]);
  
  useThemeContext();
  
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
      <TitleHiddenH2>Сontact list</TitleHiddenH2>
      <ContactsContainer>
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


