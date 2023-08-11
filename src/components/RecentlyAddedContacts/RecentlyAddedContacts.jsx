import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LoaderRotatingLines } from '../Loader/Loader';
import RecentlyAddedContactItem from '../RecentlyAddedContactItem/RecentlyAddedContactItem'
import { fetchContacts } from 'redux/operations/contactsOperations';
import { useThemeContext } from '../../hooks/ThemeContext'; 
import {
  contactsSelector,
} from 'redux/selectors';
import {
  TitleH2,
  ContactsContainer,
  LoaderRotatingLinesContainer,
  ContactUl,
} from './RecentlyAddedContacts.styled';


const RecentlyAddedContacts = () => {
  const contacts = useSelector(contactsSelector);

  const [isFetchingContacts, setIsFetchingContacts] = useState(false);
  const [selectedContactId, setSelectedContactId] = useState(null);

  const dispatch = useDispatch();

  const isEmptyFilter = contacts.length === 0;

  useEffect(() => {
    setIsFetchingContacts(true);
    dispatch(fetchContacts()).finally(() => {
      setIsFetchingContacts(false);
    });
  }, [dispatch]);


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
  };

  return (
    <section>
      <TitleH2>Recently added contacts</TitleH2>
      <ContactsContainer>
      {!isEmptyFilter && (
          <ContactUl>
            {contacts.slice().reverse().map(contact => (
              <RecentlyAddedContactItem
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

export default RecentlyAddedContacts;
