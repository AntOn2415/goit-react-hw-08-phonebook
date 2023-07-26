import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import  Filter  from '../components/Filter';
import ContactList  from '../components/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import { fetchContacts } from 'redux/operations/contactsOperations';

export default function ContactsPage () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
}
